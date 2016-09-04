/**
 * component city-select , 
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 *
**/
import areaModel from 'model/areamodel.js';

var style = __inline('./cityselect.inline.less');
var tpl = __inline('./cityselect.tpl');

require.loadCss({
    name: 'usersys-widget-cityselect-style',
    content: style
});

export default Vue.component('city-select', {
  template: tpl,
  data: function () {
    return {
            provinceSelected : '省',
            citySelected : '',
            areaSelected : '',
            province : [],
            city     : [],
            subarea  : [],
            area : new areaModel()
        }
    },
    ready: function(){
        this.getProvince();
    },
    computed: {
        output: function () {
            // return [this.provinceSelected, this.citySelected, this.areaSelected].join(' - ');
            let result = '';
            this.subarea.forEach((item) => {
                if (item.code === this.areaSelected) {
                    result = item.fullName;
                }
            });

            return result;
        }
    },
    methods:{
        getProvince :function(){
            var me = this;
            let param = [key,code,arr,name,code] 
                      = ['province','',me.province ,'provinceName','provinceCode'];
            me.getData(...param);
        },
        getCity : function(provinceCode = -1){
            var me = this;
            let urlparam = `?provinceCode=${provinceCode}`;
            let param = [key ,urlparam,arr,name ,code] 
                      = ['city',urlparam,me.city ,'cityName','id'];
            me.getData(...param);
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
                        code : li[id],
                        fullName: li.fullName
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