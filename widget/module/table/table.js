import Widget from 'static/js/widget.js';
import tableModel from 'model/tableModel.js';
import datetime from 'widget/filter/datetime.js';
import productCategory from 'widget/filter/productCategory.js'
import applyState from 'widget/filter/applyState.js'

var style = __inline('./table.inline.less');
var tpl = __inline('./table.tpl');

require.loadCss({
    name: 'usersys-widget-table-style',
    content: style
});

var table = Widget.extend({
    
    data :{
        data : [],  
    },
    init: function (data) {
        
        this.data = this.processData(data);
        this.vm = this.display(data, tpl ,'vue');
        this.bind();
    },
    processData : function (data){

        if(data.operater){
            let operater = data.operater;
            let tableData = data.items;
            let operaterList = operater.operaterList;
            let bindKey = operater.bindKey;
            let param = operater.param;

            tableData.forEach(function(item){
                var state = item[bindKey];
                item['operater'] = operaterList[state].name;
                item['operaterUrl'] = operaterList[state].url + "?" + param + "="+ item[param];
            });
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
    },
    update: function(data){

        let model = new tableModel();
        model.getData(data.url ,data.param).then((res) => {  
            console.log(res);
            this.vm.data = res;
        });
    },
    filters : {
        datetime : datetime ,
        productCategory : productCategory,
        applyState : applyState,
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