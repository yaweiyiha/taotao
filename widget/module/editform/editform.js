import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol';
import Star from   'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';
import formModel from 'model/formModel';
import CommType from 'widget/component/commtype/commtype';
import YearRate from 'widget/component/yearrate/yearrate';
import VerifyConfirm from 'widget/component/verifyconfirm/verifyconfirm';
import fundStrategy from 'widget/component/fundStrategy/fundStrategy';
import Util from 'widget/util/util';
import editor from 'widget/component/editor/editor';
import AlertDialog from "widget/classComponent/dialog/alert"
import citySelectDialog from "widget/classComponent/dialog/citySelectDialog"
import distributionWay from 'widget/component/distributionWay/distributionWay';
import CustomEle from "widget/component/customele/customele"
import foundStatus from "widget/component/foundStatus/foundStatus";
import proTerm from "widget/component/proTerm/proTerm"
import Soled from "widget/component/soled/soled"
import Hoster from "widget/component/hoster/hoster"
import Filter from 'widget/filter/distributorStatus'

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
        let me = this;
        if($('select[data-key="publisherFk"]')){
            let publisherList  = enums.publisherFk;
            let publisherArr   =  [];

            for(key in publisherList){
                let option = `<option value="${key}">${publisherList[key]}</option>`;
                publisherArr.push(option);
            }
            $('select[data-key="publisherFk"]').append(publisherArr);
        }

        /*基金净值&累计分红&固定利率*/
        if (me.data.item.establishStatus == 1 && me.data.item.fundGenreAFk == 500) {
            $(".yesterdayNet").removeClass('hidden');
            $(".sumNet").removeClass('hidden');
            $(".arr-expected").removeClass('hidden');
            $(".admin-widget-yearrate").css('display','none');
            $(".date-established").css('display','block');
        }else{
            $(".yesterdayNet").addClass('hidden');
            $(".sumNet").addClass('hidden');
            $(".arr-expected").addClass('hidden');
            $(".admin-widget-yearrate").css('display','block');
            $(".date-established").css('display','none');
        }

        //固定利率计算
        me.calculateSumARR();

    },
    bind: function () {
        
        let me = this;
        let container = $(this.vm.$el);

        $('button[data-role="submit"]').on('click', function () {

            //成立状态-已成立
            let date = new Date();
            let seperator1 = "-";
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            let currentdate = year + seperator1 + month + seperator1 + strDate;
            let currentTimestamp = Date.parse(currentdate);
            //输入时间
            let iptTimestamp = Date.parse($('input[data-key="dateEstablished"]').val());
            if(iptTimestamp >= currentTimestamp){
                AlertDialog.show("成立日期必须小于今天！");
                return;
            }
            
            //alert(container.find("input.expectedArr").val());

        	let filters = Util.getInputFilters();

        	filters =  me.toNum(filters);
        	filters.productId = parseInt(_APP_HASH.id);
            
            // get star info
            if ($('.admin-widget-star').size()) {
                filters.arrRank = +$('.admin-widget-star').attr('data-value');
            }

            // get year rate info
            let yearRateContainer = container.find('.admin-widget-yearrate');
            if (yearRateContainer.size()) {
                let yearRateData     = Util.getYearRateData(yearRateContainer);
                filters.arrTypeFk    = yearRateData.arrTypeFk;
                filters.expectedArr  = yearRateData.expectedArr;
                filters.fixMin       = yearRateData.fixMin;
                filters.minArr       = yearRateData.minArr;
                filters.floatMax     = yearRateData.floatMax;
                filters.maxArr       = yearRateData.maxArr;
                filters.productLadderRates = yearRateData.productLadderRates
            }

            if(filters.isRiskRating === 2){
                filters.riskRating = '';
            }

            if(me.data.item.fundGenreAFk == 500){
                if(container.find("select[data-key='establishStatus']").val() == 1){
                    filters.expectedArr  = container.find('input[data-key="expectedArr"]').val();
                    filters.arrTypeFk = 10;
                    filters.fixMin = '';
                    filters.minArr = '';
                    filters.floatMax = '';
                    filters.maxArr = '';
                }else{
                    filters.yesterdayNet  = '';
                    filters.sumNet  = '';
                    filters.dateEstablished = '';
                }
            }else{
                if(container.find("select[data-key='establishStatus']").val() == 1){

                }else{
                    
                }
            }
            //alert(JSON.stringify(filters));

        	Util.getData(me.data.submitUrl,filters,"POST").then((res) => {
                if(res.msg === "success"){
                    window.location.href = '#main/product/maintenance';
                }
        	});
        	
        });

        $('button[data-role="save"]').on('click',function(){

            let dataRole = $(this).attr('data-role');
            if(dataRole == 'save' || dataRole == 'release') {

                let filters = {};
                let url  =  '';
                filters = Object.assign(filters, Util.getInputFilters());
                if(filters.name == "" || filters.name == undefined){
                    //todo 保存的时候产品名字不能为空
                    //return;
                }
                // get star info
                if ($('.admin-widget-star').size()) {
                    filters.arrRank = +$('.admin-widget-star').attr('data-value');
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
                    //console.log(res);
                });
            }
           
        })

        $('button[data-role="cancel"]').on('click',function(){
        	window.location.href = '#main/product/maintenance';
        })

        // enable risk rating 
        container.on('click', '[data-key=isRiskRating]', function () {
            let on = container.find('[data-key=isRiskRating]:checked').val();
            let target = container.find('[data-key=riskRating]').parents('.input-wrapper');
            if (on === '2') {
                target.hide();
            } else {
                target.show();
            }
        });

        //init risk level
        setTimeout(() => {
            if (container.find('[data-key=isRiskRating]:checked').val() === '2') {
                container.find('[data-key=riskRating]').parents('.input-wrapper').hide();
            }
        });
        
        //成立状态-已成立
        
        $("select[data-key='establishStatus']").on('change',function(){

            if(me.data.item.fundGenreAFk == 500){
                if($(this).val() == 1){
                    $('input[data-key="expectedArr"]');
                    $(".yesterdayNet").removeClass('hidden');
                    $(".sumNet").removeClass('hidden');
                    $(".arr-expected").removeClass('hidden');
                    $(".admin-widget-yearrate").css('display','none');
                    $(".date-established").css('display','block');
                    $('input[data-key="dateEstablished"]').attr('data-valide','required');

                    container.find('input[data-key="yesterdayNet"]').val('');
                    container.find('input[data-key="sumNet"]').val('');
                    container.find('input[data-key="expectedArr"]').val(0);
                    container.find('input[data-key="dateEstablished"]').val('');

                    if(''!= container.find('input[data-key="yesterdayNet"]') && ''!= container.find('input[data-key="sumNet"]').val()){
                        me.calculateSumARR();
                    }
                }else{
                    $(".yesterdayNet").addClass('hidden');
                    $(".sumNet").addClass('hidden');
                    $(".arr-expected").addClass('hidden');
                    $(".admin-widget-yearrate").css('display','block');

                    container.find("input.expectedArr").val(0);

                    $(".date-established").css('display','none');

                    $('input[data-key="dateEstablished"]').attr('data-valide','');
                    $(this).parents('.admin-widget-foundStatus').parent().find('.tips').remove();
                }
            }else{
                if($(this).val() == 1){
                    $(".date-established").css('display','block');
                    $('input[data-key="dateEstablished"]').attr('data-valide','required');
                }else{
                    $(".date-established").css('display','none');
                    $('input[data-key="dateEstablished"]').attr('data-valide','');
                    $(this).parents('.admin-widget-foundStatus').parent().find('.tips').remove();
                }
            }
        });



        container.on('change', 'input[data-key="dateEstablished"]', function () {
            var fundGenre = me.data.item.fundGenreAFk;
            var establishStatus = $("select[data-key='establishStatus']").val();
            
            if(''!= container.find('input[data-key="yesterdayNet"]') && ''!= container.find('input[data-key="sumNet"]').val() && fundGenre == '500'  && establishStatus == '1'){
                me.calculateSumARR();
            }
        });

        container.on('input propertychange', 'input[data-key="yesterdayNet"]', function () {
            if(''!= $(this).val() && ''!= container.find('input[data-key="sumNet"]').val()){
                me.calculateSumARR();
            }
        })

        container.on('input propertychange', 'input[data-key="sumNet"]', function () {
            if(''!= container.find('input[data-key="yesterdayNet"]').val() && ''!= $(this).val()){
                me.calculateSumARR();
            }
        });
    },
    toNum : function (filters){
    	
    	var  isNumArr =['expectedArr','issureScale','offeringSize','selfDefinedProcess','startingPrice','unitFkStartingPrice'];

    	for (item in filters){
    		if($.inArray(item ,isNumArr) !== -1 ){
    			filters[item] = parseInt(filters[item]);
    		}
    	} 
    	
    	return filters;
    },
    calculateSumARR : function(){
        let me = this;
        let container = $('.cnt-box');
        let num1 = container.find('input[data-key="yesterdayNet"]').val()*1;
        let num2 = container.find('input[data-key="sumNet"]').val()*1;
        let startDate = (new Date(container.find('input[data-key="dateEstablished"]').val())).setHours(0, 0, 0, 0);
        //console.log(startDate)

        let endDate =(new Date()).setHours(0, 0, 0, 0);
        let num3=(endDate-startDate)/1000/3600/24;

        if(num1 >=0 && num2 >=0 && num3>0){
            let num4=(num1-1+num2)*365/num3;
            num4=num4.toFixed(2);

            container.find('.arr-expected input[data-key="expectedArr"]').val(num4);
            
            return true;
        }
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default editform;