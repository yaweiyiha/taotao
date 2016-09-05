import cityselect from 'widget/component/cityselect/cityselect.js';

var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class  citySelectDialog{
	
	show(opts){

        let data = {
            type  : 'citySelect',
            title : '选择地区',
            buttons : [
                {'name' : '确认' , 'type' : 'comfirm' },
                {'name' : '取消' , 'type' : 'cancel' }
            ],
        }

		vm = new Vue({
            el :'.dialog-wrapper',
            data: data,
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
                },
                confirm: () => {
                    let output = {};

                    if ($('.admin-widget-cityselect', this.$el).size()) {
                        output.city = $('.admin-widget-cityselect textarea.output', this.$el).val();
                    }

                    opts.onConfirm && opts.onConfirm(output);
                    vm.hide();
                },
            }
        });

        if(vm && vm.$el.hidden == true){
            vm.show();
        }
	}
}

export default new citySelectDialog();