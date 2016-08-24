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
                {'name' : '资管' , 'url' : '#addPro/zg/add' },
                {'name' : '信托' , 'url' : '#addPro/xintuo/add' },
                {'name' : '会员精选' , 'url' : '/vipChoiceness/add' },
                {'name' : '股权投资' , 'url' : '/equityInvestment/add' },
                {'name' : '海外保险' , 'url' : '/insurance/add' },
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