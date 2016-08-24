
import tree from 'widget/component/tree/tree.js'

var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class Dialog{

    show(opts){

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
                confirm: () => {
                    this.opts.onConfirm && this.opts.onConfirm();
                    vm.hide();
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

    setStyles(styles){
        var me = this;
        styles.forEach(function( k , v){
            me.el.css(k , v + 'px');
        });
    }
}

export default new Dialog();