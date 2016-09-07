import Widget from 'static/js/widget.js';
import table from 'widget/module/table/table.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dialog from 'widget/classComponent/dialog/dialog.js';
import Util from 'widget/util/util';
import productDistri from 'widget/component/productDistri/productDistri'
import alertDialog from "widget/classComponent/dialog/alert.js"

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tmpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({
    
    init : function (data = {}) {

        this._filters_ = {};
        this.localData = {};
    	this.data = data;
        this.eles = this.display(data, tpl, 'native');
        this.render();
        this.bind();
        Waves.attach('button', ['waves-float', 'waves-light']);

    },
    processData :function (data = {}){
    	this.data = data;
        return this.data;   
    },
    render :function(){
        
        if($('.city-select').length !== 0){
            new Vue({
                el: $('.city-select', this._containerDom_).get(0)
            });
        }
        if($('.date-control').length !== 0){

            new Vue({
                el: $('.date-control', this._containerDom_).get(0)
            });
        }
        if($('.productDistri').length !== 0){

            new Vue({
                el: $('.productDistri', this._containerDom_).get(0)
            });
        }

        if($('.time').length !== 0){
            var container = $(this);
        }

        if(this.data.tabs.length !== 0){
            var navType = this.data.type;
            var arr = $('.nav-tabs > li').toArray();
            arr.forEach(function(li){
                if($(li).attr('data-key') === navType ){
                     $(li).addClass('active');
                 }else{
                    $(li).hasClass('active') && $(c).removeClass('active');
                 }  
            });
        }
        // if($("select[data-key='name']")){

        //     let proNameEle = $("select[data-key='name']");
        //     let publisherArr   =  [];
        //     Util.getData('report/agentsales/constants', '' ,'GET').then((res)=> {

        //         res.forEach(function(item){
        //             let option = `<option value="${item.productId}">${item.productName}</option>`;
        //             publisherArr.push(option);
        //         })
        //         proNameEle.append(publisherArr);
        //     })
            
        // }        

    },

    getInputFilters: () => {
        var inputCollections = $('.panel-body').find('[data-key]');
        var data = {};
        for (var i = 0, len = inputCollections.length; i < len; i++) {
            var ele = $(inputCollections[i]);
            var key = ele.attr('data-key');
            var val = ele.attr('data-values') || ele.val();
            var validater = ele.attr('data-valide');
            if (/required/.test(validater)) {
                if (val === '') {
                    alertDialog.show(ele.attr('data-errorTip') || '填写不完整');
                    return false;
                }
            }
            if (ele.attr('is-num') === '1' && val) {
                val = +val;
            }
            if (key) {
                data[key] = val || '';
            }
        }

        return data;
    },

    bind : function(){

        var me = this;

        $('.dep .choose-button').click(function(){
            var setting = {
                type : 'dep',
                close : false ,
                css :[  {width : 600}, {height : 349} ],
                title : '选择部门',
                buttons : [
                    {'name' : '选择' , 'activeClass' : 'btn-primary' },
                    {'name' : '取消' , 'activeClass' : 'btn-default' },
                ],
                onConfirm: () => {

                    let list = window.deparTreeInstance.getCheckedNodes(true);
                    let keys = [];
                    let values = [];
                    list.forEach((item) => {
                        if (!item.isParent) {
                            keys.push(item.id);
                            values.push(item.name);
                        }
                    });

                    let inputEle = $(this).prev();
                    inputEle.val(values.join(','));
                    inputEle.attr('data-values', values.join(','));
                }
            }
            dialog.show(setting);
        });
        $('.form-wrapper').on('click', '.filters-item .option-item', function () {

            let filter  = {};
            let key     =  $(this).parents('.options').attr("data-key");
            let value   =  $(this).attr("data-value");
            filter[key] =  value;
            let url     =  me.data.url;

            let inputFilters = me.getInputFilters();
            let filters =  inputFilters && $.extend(inputFilters,filter);
            me._filters_ = Object.assign(me._filters_, filters);
            data = $.extend({param: me._filters_},{url : url});
            me.updateTable(data);

        });
        $('.panel-body').on('click', '[data-role=submit]', function () {
            console.log('??');
            let alwaysParam   =  me.data.alwaysParam;
            let inputFilters = me.getInputFilters();
            if (inputFilters === false) {
                return;
            }
            me._filters_ = Object.assign(me._filters_,$.extend(me.getInputFilters(),alwaysParam) );
            let url = me.data.url ||  me.data.submitUrl; 
            me._filters_.pageSize = 10;
            data = $.extend({param: me._filters_},{url : url});
            me.updateTable(data);

        });

        $('.panel-body').on('click', '[data-role=clearInput]', function () {
            var inputCollections = $('.panel-body').find('[data-key]');
            for (var i = 0, len = inputCollections.length; i < len; i++) {
                var ele = $(inputCollections[i]);
                var key = ele.val('');
            }
        });

        // $('input:text').keyup( function () {

        //     if($(this).val() === '' || $(this).val() === undefined){
        //             me._filters_ = {};
        //             me.updateTable(me.data);
        //     } 
        // });

    },
    updateTable : function(data){
        listener.trigger('page', 'tableUpdate', data);
    }
})

export default form;