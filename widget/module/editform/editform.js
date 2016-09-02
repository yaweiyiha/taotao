import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol';
import Star from 'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';
import formModel from 'model/formModel';
import CommType from 'widget/component/commtype/commtype';
import fundStrategy from 'widget/component/fundStrategy/fundStrategy';
import Util from 'widget/util/util';

let style = __inline('./editform.inline.less');
let tpl = __inline('./editform.tpl');

require.loadCss({
    name: 'admin-widget-editform-style',
    content: style
});

var editform = Widget.extend({ 

    init : function(data){

        this.data = data;
        this.vm = this.display(data ,tpl ,'vue');
        this.render();
        this.bind();
        Waves.attach('button', ['waves-light']);
    },
    processData :function(){
        this.saveUrl   = data.saveUrl;
        this.publicUrl = data.publicUrl;
    },
    render : function(){
        if($('select[data-key="publisherFk"]')){
            let publisherList  = enums.publisherFk;
            let publisherArr   =  [];

            for(key in publisherList){
                let option = `<option value="${key}">${publisherList[key]}</option>`;
                publisherArr.push(option);
            }
            $('select[data-key="publisherFk"]').append(publisherArr);
        }
    },
    bind: function () {
        
        let me = this;
    
        $('button[data-role="submit"]').on('click', function () {
            
        	let filters = Util.getInputFilters();
        	filters =  me.toNum(filters);
        	filters.productId = parseInt(_APP_HASH.id);
        	
        	Util.getData(me.data.submitUrl,filters,"POST").then((res) => {
                if(res.msg === "success"){
                    window.location.href = '#main/product/maintenance';
                }
        		
        	});
        	
        });

        $('button[data-role="save"]').on('click',function(){

            let dataRole = $(this).attr('data-role');
            if(dataRole == 'save' || dataRole == 'republic') {

                let filters = {};
                let url  =  '';
                filters = Object.assign(filters, Util.getInputFilters());
                if(filters.name == "" || filters.name == undefined){
                    //todo 保存的时候产品名字不能为空
                    //return;
                }
                filters.categoryFk    = parseInt($(this).attr("pro"));
                filters.fundTypeFk    = parseInt(filters.fundTypeFk);
                filters.fundSubTypeFk = parseInt(filters.fundSubTypeFk);

                if($("input[data-key='maturities']").val() === '' 
                    || $("input[data-key='maturities']").val() === undefined){
                    filters.unitFkMaturities= '';
                }
                if($("input[data-key='offeringSize']").val() === '' 
                    || $("input[data-key='offeringSize']").val() === undefined){
                    filters.unitFkOfferingSize = '';
                }
                if($("input[data-key='startingPrice']").val() === '' 
                    || $("input[data-key='startingPrice']").val() === undefined){
                    filters.unitFkStartingPrice = '';
                }
                if($("input[data-key='increasement']").val() === '' 
                    || $("input[data-key='increasement']").val() === undefined ){
                    filters.unitFkIncreasement = '';
                }
                if($("input[data-key='issureScale']").val() === '' 
                    || $("input[data-key='issureScale']").val() === undefined){
                    filters.unitFkIssureScale = '';
                }
                let obj  = {
                    'product' : filters,
                }
                Util.getData(me.data.saveUrl,obj,'POST').then((res)=>{
                    console.log(res);
                });
            }
           
        })

        $('button[data-role="cancel"]').on('click',function(){
        	window.location.href = '#main/product/maintenance';
        })

    },
    toNum : function (filters){
    	
    	var  isNumArr =['expectedArr','issureScale','offeringSize','selfDefinedProcess'];

    	for (item in filters){
    		if($.inArray(item ,isNumArr) !== -1 ){
    			filters[item] = parseInt(filters[item]);
    		}
    	} 
    	
    	return filters;
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default editform;