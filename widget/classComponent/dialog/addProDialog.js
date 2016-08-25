var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class  addProDialog{
	
	show(){

        let opts = {
            type  : 'addPro',
            title : '新增产品',
            pros : [
                {'name' : '基金' , 'url' : '#addPro/fund/add' },
                {'name' : '资管' , 'url' : '#addPro/asset/add' },
                {'name' : '信托' , 'url' : '#addPro/trust/add' },
                {'name' : '债权转让' , 'url' : '#addPro/debtassgin/add' },
                {'name' : '股权投资' , 'url' : '#addPro/equityInvestment/add' },
            ],
            buttons : [],
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

export default new addProDialog();