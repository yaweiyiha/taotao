import Widget from 'static/js/widget.js';
import tableModel from 'model/tableModel.js';
import datetime from 'widget/filter/datetime.js';
import productCategory from 'widget/filter/productCategory.js'
import applyState from 'widget/filter/applyState.js'
import distributorStatus from 'widget/filter/distributorStatus.js'
import AlertDialog from "widget/classComponent/dialog/alert.js"
import Util from "widget/util/util"

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
        extraInfo: {}
    }, 
    init: function (data) {
        //索引
        Array.prototype.indexOf = function(val) { 
            for (var i = 0; i < this.length; i++) { 
                if (this[i] == val) return i; 
            } 
            return -1; 
        };
        //删除
        Array.prototype.remove = function(val) { 
            var index = this.indexOf(val); 
            if (index > -1) { 
                this.splice(index, 1); 
            } 
        };

        arrPermissions = _permissions.split(',');
        //console.log(JSON.stringify(arrPermissions));
        
        //产品审核权限，产品编辑权限，发行商详情权限，发行商编辑权限，发行商状态改变权限，分销签约审核权限，查看签约状态权限
        if(data.operater.operaterList){
            for(var i=0; i<data.operater.operaterList.length; i++){
                for(var j=data.operater.operaterList[i].length-1; j>=0; j--){
                    if(data.operater.operaterList[i][j].mark){
                        if($.inArray(data.operater.operaterList[i][j].mark,arrPermissions) != -1){
                            //console.log($.inArray(data.operater.operaterList[i][j].mark,arrPermissions));
                        }else{
                            data.operater.operaterList[i].remove(data.operater.operaterList[i][j]);
                        }
                    }
                }
            } 
        }


        this._initData_ = Object.assign({}, data);
        let myData = $.extend(data, this.processData(data));

        this._params_ = {};
        this._params_.url = data.url;
        this._params_.filters = Object.assign({pageSize: 10}, data.filters);
        if (this._initData_.param && 
            this._initData_.param.exclude === 1) {
            this._params_.filters.exclude = 1;
        }
        if (this._initData_.param &&
            this._initData_.param.pageSize) {
            this._params_.filters.pageSize = this._initData_.param.pageSize;
        }

        this.vm = this.display(myData, tpl ,'vue');
        this.render();
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
    _parseOperaterItem: function (expression) {
        let res = {};
        if (/^(\{\{).+(\}\})$/.test(expression.trim())) {
            expression = expression.replace(/\s/g, '');
            expression = expression.replace(/^(\{\{)|(\}\})$/g, '');
            let match = /(.+?)\((.+?)\)/.exec(expression);
            res.type = 'expression';
            res.functionName = match[1];
            res.params = String.prototype.split.call(match[2], ',');
        } else {
            res.type = 'string';
            res.value = expression;
        }

        return res;
    },
    parseOperater: function (operater, dataItem) {
        let me = this;

        let parseList = [];

        function _parse (list, separator = '') {
            let cache = [];
            list.forEach(function (item) {
                let res = me._parseOperaterItem(item);

                if (res.type === 'string') {
                    cache.push(res.value);
                } else if (res.type === 'expression') {
                    if (res.functionName === 'DICT') {
                        cache.push(operater[res.params[1]]['' + dataItem[res.params[0]]]);
                    } else if (res.functionName === 'INTERFACE_DATA') {
                        cache.push(dataItem[res.params[0]]);
                    }
                }
            });

            return cache.join(separator);
        }
        function conditionExec (expression) {
            if (!expression) {
                return true;
            }
            let res = me._parseOperaterItem(expression);
            if (res.functionName === 'equal') {
                return ('' + dataItem[res.params[0]]) === res.params[1];
            }
        }
        if(operater && operater.operaterList){
            operater.operaterList.forEach(function (condition) {
            let parseItem = {};
            condition.forEach(function(item) {
                let continueFlag = false;

                if (!continueFlag && conditionExec(item.condition)) {
                    continueFlag = true;
                    // parse name
                    parseItem.name = _parse(item.content.name);
                    // parse url
                    parseItem.url = _parse(item.content.url);
                    if (item.content.evt && item.content.evt.length) {
                        parseItem.evt = _parse(item.content.evt);
                    } else {
                        parseItem.evt = '';
                    }
                    if (item.content.val && item.content.val.length) {
                        parseItem.val = _parse(item.content.val);
                    } else {
                        parseItem.val = '';
                    }
                    if (item.content.par && item.content.par.length) {
                        parseItem.par = _parse(item.content.par);
                    } else {
                        parseItem.par = '';
                    }
                }
            });
                parseList.push(parseItem);
        });
    }


        return parseList;
    },
    processData : function (data){
        let me = this;
        data.totalPages = Math.ceil(data.totalSize / data.pageSize);
        data.pageList = this.calculateIndexes(data.pageNo, data.totalPages, 5);

        var proNameVal = $('.distriproName').val();
        var distriagentVal = $('.distriagent').val();
        var proNameTxt = $('.distriproName option[value="'+proNameVal+'"]').text();
        var distriagentTxt = $('.distriagent option[value="'+distriagentVal+'"]').text();
        var commisionTypeStringVal = $('.distriagent option[value="'+distriagentVal+'"]').attr('data-commisionTypeString');
        var commissionRangeStringVal = $('.distriagent option[value="'+distriagentVal+'"]').attr('data-commissionRangeString');
        data.tabtop[0].val = proNameTxt;
        data.tabtop[1].val = distriagentTxt;
        data.tabtop[2].val = commisionTypeStringVal;
        data.tabtop[3].val = commissionRangeStringVal;

        if(data.items){

            data.items.forEach(function (dataItem) {
                dataItem['operater'] =  me.parseOperater(me._initData_.operater, dataItem);
                if(data.hasProductUrl){
                    let key = dataItem.categoryId || dataItem.productCategory;
                    if($.inArray('product:detail',arrPermissions) != -1){
                        let id = dataItem.productId || dataItem.id;
                        dataItem['_detailUrl_'] = `#addPro/${me.productDict[key]}/detail?id=${id}`;
                    }else{
                        dataItem['_detailUrl_'] = `javascript:;`;
                    }
                }
                
            });
        }

        
        if (data.totalInvestmentAmount) {
            data.extraInfo = {};
            data.extraInfo.totalInvestmentAmount = data.totalInvestmentAmount;
            data.extraInfo.totalCommission = data.totalCommission;
        }else{
            data.extraInfo = {};
            data.extraInfo.totalInvestmentAmount = data.totalInvestmentAmount;
            data.extraInfo.totalCommission = data.totalCommission;
        }
        
        return data;
    },
    render :function(){
        if($.inArray('product:detail',arrPermissions) != -1){
            
        }else{
            $('.detailUrl').css({
                'color': '#686868',
                'font-weight': 'normal'
            });
        }
    },
    productDict: {
        10: "fund",
        30: "asset",
        40: "trust",
        60: "debtassgin",
        70: "equityInvestment"        
    },
    bind: function(){
        var me = this;
        function updateHandler (type, data) {
            this.update(data);
        }
        listener.on('page', 'tableUpdate', updateHandler, this);
        listener.once('page', 'change', function () {
            listener.off('page', 'tableUpdate', updateHandler, this);
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
            model.getData(url, param).then((res) => {
                me.vm.data = res.data;
                $(this).addClass('sorting_asc');
            });
        });

        $(me.vm.$el).on('click', 'a[data-evt=errReasonDailog]', function () {
            AlertDialog.show($(this).attr('value'));
        });

        $(".admin-widget-table").on('click','[data-evt=statusDistriChange]',function(){

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

        $('.report-item').on('click', '.loadDownExcel' ,function(){
            
            let param = me.submitData.param;

            let url = `report/agentsales/excel?productId=${param.productId}&agentId=${param.agentId}&startDate=${param.startDate}&endDate=${param.endDate}`;
            window.location.href = url;
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
        me.submitData = data;
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
                this.vm.$set('extraInfo', res.extraInfo);
            }
        });
    },
    update: function(data){
        this._params_.url = data.url;

        // 此处需要让table保持之前的一些筛选条件，新的过滤条件覆盖同名过滤条件
        // 已有过滤条件波爱吃
        this._params_.filters = Object.assign(this._params_.filters, data.param);
        data.param = this._params_.filters;
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