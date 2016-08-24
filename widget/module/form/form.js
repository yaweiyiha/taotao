import Widget from 'static/js/widget.js';
import table from 'widget/module/table/table.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dialog from 'widget/classComponent/dialog/dialog.js';

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tmpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({
    
    init : function (data = {}) {

        this.localData = {};
    	let res  = this.processData(data);
        this.eles = this.display(res, tpl, 'native');
        this.render();
        this.bind();
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
        // if($('.text-edit').length !== 0) {
        //     new Vue({
        //         el: $('.text-edit', this._containerDom_).get(0)
        //     });
        // }

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
        
        $('.panel-body').on('click', '[data-role=submit]', function () {
            var inputCollections = $('.panel-body').find('[data-key]');
            var data = {};
            for (var i = 0, len = inputCollections.length; i < len; i++) {
                var ele = $(inputCollections[i]);
                var key = ele.attr('data-key');
                var val = ele.attr('data-values') || ele.val();
                if (key) {
                    data[key] = val;
                }
            }

            //console.log(data);
            var url = me.data.url ; 
            //data = $.extend({param: data},{url : url});
           // me.updateTable(data);
        });

        $('.panel-body').on('click', '[data-role=clearInput]', function () {
            var inputCollections = $('.panel-body').find('[data-key]');
            for (var i = 0, len = inputCollections.length; i < len; i++) {
                var ele = $(inputCollections[i]);
                var key = ele.val('');
            }
        });
    },
    updateTable : function(data){
        listener.trigger('page', 'tableUpdate', data);
    }
})

export default form;