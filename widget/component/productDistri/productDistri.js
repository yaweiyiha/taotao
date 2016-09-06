import Util from 'widget/util/util';

let style = __inline('./productDistri.inline.less');
let tpl = __inline('./productDistri.tpl');

require.loadCss({
    name: 'admin-widget-productDistri-style',
    content: style
});

export default Vue.component('product-distri', {
 	template: tpl,
  	data: function () {
    	return {
            productselect : '',
            products      : [],
            distributors  : [],
            productRes  : [],
        }
    },
    ready: function(){
        this.getProductors();
    },
    methods:{
        getProductors :function(){
        	let me = this;
            let url = `${Config.host}report/agentsales/constants`
            Util.getData(url, '' ,'GET').then((res)=> {
                res = res.items;
                me.productRes = res;
                res.forEach(function(item){
                	let obj = {
                		productId : item.productId,
                		productName : item.productName,
                	}
                	me.products.push(obj);
                })
                res[0].agentSalesList.forEach(function(item){
                    me.distributors.push(item);
                });
            })
        },
        getDistributors : function(productselect = -1){
            let me = this;
            // debugger
            me.distributors.length = 0;
            me.productRes.forEach(function(pro){
                if(pro.productId == productselect){
                    pro.agentSalesList.forEach(function(agentSale){

                        me.distributors.push(agentSale);
                    });
                }
            })
        },
      
    },
    watch: {
        productselect : function(){
            this.getDistributors(this.productselect);
        }

    }
});