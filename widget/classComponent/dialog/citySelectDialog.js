import cityselect from 'widget/component/cityselect/cityselect.js';

var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class  citySelectDialog{
	
	show(){

        let opts = {
            type  : 'citySelect',
            title : '选择地区',
            buttons : [ {'name' : '确认' , 'type' : '关闭' },
                        {'name' : '取消' , 'type' : '保存' }],
        }

		vm = new Vue({
            el :'.dialog-wrapper',
            data: opts,
            template: tpl,
            replace : false,
            methods: {
                show: () => {
                    vm.$el.hidden = false;
                },
                hide: () =>{
                    vm.$el.hidden = true
                },
                cancel: () => {
                    vm.hide();
                }
            }
        });

        if(vm && vm.$el.hidden == true){
            vm.show();
        }
	}
}

export default new citySelectDialog();