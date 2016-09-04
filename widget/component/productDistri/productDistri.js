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
        }
    },
    ready: function(){
        this.getProductors();
    },
    methods:{
        getProductors :function(){
        	let me = this;
            Util.getData('report/agentsales/constants', '' ,'GET').then((res)=> {
                res.forEach(function(item){
                	let obj = {
                		productId : item.productId,
                		productName : item.productName,
                	}
                	me.products.push(obj);

                })
                me.distributors.push(res[0].agentSalesList);
            })
        },
        getDistributors : function(provinceCode = -1){

        },
        getArea :function(cityCode = -1){
            var me = this;
            let urlparam = `?cityCode=${cityCode}`;
            let param = [key ,urlparam,arr,name ,code] 
                      = ['subarea',urlparam,me.subarea ,'name','id'];
            me.getData(...param);         
        },
        getData :function( key,code, arr ,name,id ){

            this.area.getData(key,code).then(function(data){

                data.forEach(function(li){
                    
                    let obj = {
                        name : li[name],
                        code : li[id]
                    }
                    arr.push(obj)
                });
            });
        },
        get : function(){
            return this.areaSelected || this.citySelected || this.provinceSelected;
        }
    },
    watch: {
        provinceSelected : function(){

            if(!$.isArray(this.provinceSelected)){
                this.getCity(this.provinceSelected);
            } 
        },
        citySelected :function(){
            if(!$.isArray(this.citySelected)){
                this.getArea(this.citySelected);
            }
        },

    }
});