var style = __inline('./previewDialog.inline.less');
var tpl = __inline('./previewDialog.tpl');
 
require.loadCss({
    name: 'admin-widget-previewDialog-style',
    content: style
});

class  previewDialog{
	
	show(info){

        let opts = {
            type  : 'preview',
            title : '预览',
            buttons : [{'name' : '关闭预览' , 'type' : 'cancel' }],
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

export default new previewDialog();