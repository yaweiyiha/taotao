var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class  comfirmDialog{
	
	show(info){

        let opts = {
            type  : 'confirm',
            title : '提示信息',
            buttons : [ {'name' : '确认' , 'type' : 'confirm' },
                        {'name' : '取消' , 'type' : 'cancel' }],
            info    : info 
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

export default new comfirmDialog();