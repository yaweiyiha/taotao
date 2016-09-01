import Widget from 'static/js/widget.js';
import tableModel from 'model/tableModel.js';
import datetime from 'widget/filter/datetime.js';
import productCategory from 'widget/filter/productCategory.js'
import applyState from 'widget/filter/applyState.js'
import distributorStatus from 'widget/filter/distributorStatus.js'

var style = __inline('./table.inline.less');
var tpl = __inline('./table.tpl');

require.loadCss({
    name: 'usersys-widget-table-style',
    content: style
});

var table = Widget.extend({
    
    data : {
        items: [],
        pageList: [],
        pageNo: 1,
        totalPages: 1,
        totolSize: '0',
    }, 
    init: function (data) {
        this._initData_ = Object.assign({}, data);
        
        let myData = $.extend(data, this.processData(data));

        // filters store
        this._params_ = {};
        this._params_.url = data.url;
        this._params_.filters = data.filters || {};

        this.vm = this.display(myData, tpl ,'vue');
        this.bind();
    },
    calculateIndexes: function (current, length, displayLength) {
        // current，当前页码，计算出来的页码尽可能将这个页码放到中间。
        // length，页码的长度，总共有多少个页码。
        // displayLength，要显示多少个页码，包括固定的第一个和最后一个。
        displayLength = displayLength - 2;
        var indexes = [1];
        var start = Math.round(current - displayLength / 2);
        var end = Math.round(current + displayLength / 2);
        if (start <= 1) {
            start = 2;
            end = start + displayLength - 1;
            if (end >= length - 1) {
                end = length - 1;
            }
        }
        if (end >= length - 1) {
            end = length - 1;
            start = end - displayLength + 1;
            if (start <= 1) {
                start = 2;
            }
        }
        if (start !== 2) {
            indexes.push("...");
        }
        for (var i = start; i <= end; i++) {
            indexes.push(i);
        }
        if (end !== length - 1) {
            indexes.push("...");
        }
        indexes.push(length);
        return indexes;
    },
    processData : function (data){
        data.totalPages = Math.ceil(data.totalSize / data.pageSize);
        data.pageList = this.calculateIndexes(data.pageNo, data.totalPages, 5)
        if(data.operater ){
            let operater = data.operater;
            let tableData = data.items;
            let operaterList = operater.operaterList;
            if(data.operater.type === 'non-fixed'){

                let bindKey = operater.bindKey;
                let param = operater.param;

                tableData.forEach(function(item){
                    let state = item[bindKey];
                    item['operater'] = [];
                    let operaterObj = {
                        name : operaterList[state].name,
                        url  : operaterList[state].url + "?" + param + "="+ item[param]
                    } 
                    item['operater'].push(operaterObj);
                });
                
            }else if (data.operater.type === 'fixed'){
                let param = operater.param;
                tableData.forEach(function(item){
                    let name = '';
                    let url = '';
                    let evt = '';
                    let bindKey = '';
                    let operaterObj = {};
                    let val    = '';
                    item['operater'] = [];

                    operaterList.forEach(function(op){
                        name    = op.name;
                        url     = op.url ? op.url + "?" + param + "="+ item[param]: 'javascript:void(0)';
                        bindKey = op.bindKey ? op.bindKey : '';

                        if(bindKey){
                            let key = item[bindKey];
                            let pos = op.value.indexOf(key);
                            name = op.name[pos];
                            evt = op.evt;
                            val = key;
                        }
                        operaterObj = {
                            name : name,
                            url  : url ,
                            evt :  evt , 
                            val : val ,
                            par  : item[param],
                        } 
                        item['operater'].push(operaterObj);
                    })
                });
            }
            return  data;
        }

    },
    bind: function(){
        var me = this;
        listener.on('page', 'tableUpdate', (type ,data) => {
            this.update(data);
        });
        /**
         *  table query by order 
         */
        $('.table-item').on('click',function(){

            let code  = $(this).attr('data-key');
            let order = ($(this).hasClass('sorting_asc') ? 'desc' : 'asc') || 
             ($(this).hasClass('sorting_desc') ? 'asc' : 'desc' );

            let param = {
                draw : 1 ,
                orderStatus :"REVIEWING" ,
                pageNow : 1,
                pageSize : 10,
                sortString : code + "." + order
            }
            let model = new tableModel();
            model.getData(me.data.url,param).then((res) => {
                me.vm.data = res.data;
                $(this).addClass('sorting_asc');
            });
        });
        $('a[data-evt=statusChange]').on('click',function(){

            let target = $(this);
            let id = $(this).attr('data-param');
            let value = parseInt($(this).attr('value'));
            let url =  'publisher/editStatus';
            let status = value ? value - 1 : value + 1;
            let param = {
                'id'      :  id,
                'status'  :  status
            }

            me.getData(url,param).then((res) =>{

                if(res.status === 1){
                    location.reload();
                }
            });

        });

    },
    getData :function(url,param) {
        var me = this;
        return new Promise(function(resolve, reject){
            var xhr = $.ajax({
                type: 'POST',
                url:  url ,

                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                data: JSON.stringify(param),
                timeout : 10000,
                cache: false,
                success: function (ret) {
                    if(ret.msg === 'success'){
                        resolve(ret);
                    }
                    
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    },
    updateTableData: function (data) {
        var me = this;
        let model = new tableModel();
        model.getData(data.url ,data.param).then((res) => {  
            if (res.msg === 'success') {
                let totalPages = Math.ceil(res.totalSize / res.pageSize);
                let pages = me.calculateIndexes(res.pageNo, totalPages, 5);
                this.vm.$set('totalPages', totalPages);
                this.vm.$set('totalSize', res.totalSize)
                this.vm.$set('pageList', pages);
                this.vm.$set('pageNo', res.pageNo);

                res = me.processData(Object.assign(me._initData_, res));
                this.vm.$set('items', res.items);
            }
        });
    },
    update: function(data){
        this._params_.filters = data.param;
        this.updateTableData(data);
    },
    updatePage: function (page, scope = this) {
        let data = {};
        data.url = scope._params_.url;
        data.param = Object.assign(scope._params_.filters, {pageNo: page});
        scope.updateTableData(data);
    },
    setMethods: function () {
        let me = this;
        return {
            changePage: function (page) {
                console.log(page);
                me.updatePage(page, me);
            }
        }
    },
    filters : {
        datetime          : datetime ,
        productCategory   : productCategory,
        applyState        : applyState,
        distributorStatus : distributorStatus 
    },
    watch :{
        data : function(){
            if( this.data.length === 0){
                $(".emptyContent").css('display' , 'block');
            }
        }
    }
})

export default table; 