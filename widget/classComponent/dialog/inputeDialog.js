var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class  comfirmDialog{
	
	show(opts){

        opts = $.extend({
            type  : 'inputConfirm',
            title : '提示信息',
            buttons : [ {'name' : '确认' , 'type' : 'comfirm' },
                        {'name' : '取消' , 'type' : 'cancel' }],
            require : false
        }, opts);

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
                },
                confirm: () => {
                    let output = '';
                    let textarea = $('.input-confirm-box textarea.input-confirm', this.$el);
                    if ($('.input-confirm-box', this.$el).size()) {
                        output = textarea.val();
                    }

                    if (opts.require && output === '') {
                        textarea.addClass('warning');
                    } else {
                        opts.onConfirm && opts.onConfirm(output);
                        vm.hide();
                    }
                }
            }
        });

        if(vm && vm.$el.hidden == true){
            vm.show();
        }
	}
}

export default new comfirmDialog();