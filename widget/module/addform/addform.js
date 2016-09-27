import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol';
import Star from   'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';
import editor from 'widget/component/editor/editor';
import formModel from 'model/formModel';
import CommType from 'widget/component/commtype/commtype';
import YearRate from 'widget/component/yearrate/yearrate';
import VerifyConfirm from 'widget/component/verifyconfirm/verifyconfirm';
import fundStrategy from 'widget/component/fundStrategy/fundStrategy';
import Util from 'widget/util/util';
import AlertDialog from "widget/classComponent/dialog/alert"
import citySelectDialog from "widget/classComponent/dialog/citySelectDialog"
import distributionWay from 'widget/component/distributionWay/distributionWay';
import CustomEle from "widget/component/customele/customele"
import foundStatus from "widget/component/foundStatus/foundStatus";
import proTerm from "widget/component/proTerm/proTerm"
import Hoster from "widget/component/hoster/hoster"
import presentType from "widget/component/presentType/presentType"
import relatedDoc from "widget/component/relatedDoc/relatedDoc"
import vipChoicenessDistributionWay from "widget/component/vipChoicenessDistributionWay/vipChoicenessDistributionWay";

let style = __inline('./addform.inline.less');
let tpl = __inline('./addform.tpl');

require.loadCss({
    name: 'admin-widget-addform-style',
    content: style
});

var addform = Widget.extend({ 

    init : function(data){
        // set default
        let defaultData = {
            fundGenreAFk        : '500',
            fundGenreBFk        : '700',
            fundTypeFk          : '60',
            fundSubTypeFk       : '100',
            publisherFk         : '',
            custodianParty      : '',
            establishStatus     : '0',
            unitFkIssureScale   : '1100',
            unitFkOfferingSize  : '1100',
            unitFkStartingPrice : '1100',
            unitFkIncreasement  : '1100',
            unitFkOfMaxInvestmentPrice: '1100',
            currencies          : '10',
            riskRating          : '30',
            arrTypeFk           : '0',
            industryTypeFk      : '10',
            custodianType       : '10',
            distributionWayFk   : '130',
            vipChoicenessDistributionWayFk: '10',
            currencies          : '10',
            arrRank             : 0,
            customElementsList  : [],
            isRiskRating        : '1',
            notContainsFloatRateMax: '1',
            containsLeftValue   : '0',
            investModeFk        : '10',
        }

        data.item = Object.assign({}, defaultData, data.item);
 
        this.data = data;
        this.data.tabs = data.tabs;

        this.vm = this.display(this.data ,tpl ,'vue');
        this.render(data);
        this.bind();
        Waves.attach('button', ['waves-light']);
    },
    processData :function(){
        this.saveUrl   = data.saveUrl;
        this.publicUrl = data.publicUrl;
    },
    render : function(data){
        let container = $(this.vm.$el);
        let res = data;
        let me = this;
        me.banksArr = [];
        if($('select[data-key="publisherFk"]')){

            let publisherKey  = res.item.publisherFk;
            let publisherList  = enums.publisherFk;
            let publisherArr   =  [];
            let option  = '';
            let index = 0;
            for(key in publisherList){

                if (index === 0 && publisherKey == '') {
                    me.vm.$set('item.publisherFk', key);
                }else if(key == publisherKey){
                    me.vm.$set('item.publisherFk', publisherKey);
                }
                index++;
                option = `<option value="${key}">${publisherList[key]}</option>`;
                publisherArr.push(option);

            }
            $('select[data-key="publisherFk"]').append(publisherArr);
        }

        if($('select[data-key="paymentTransferBankId"]').size()){
            
            let banksEle = $('select[data-key="paymentTransferBankId"]');
            if(banksEle.find('option').length !== 0){
                return;
            }
            if(banks){
                let banksArr   =  [];
                // let banks = data.item.banks;
                let index = 0;

                let bankId  = ""+res.item.paymentTransferBankId;
                
                for(key in banks){

                    if (index === 0 && bankId == '') {
                        me.vm.$set('item.paymentTransferBankId', key);
                    }else if(key == bankId){
                        me.vm.$set('item.paymentTransferBankId', bankId);
                    }
                    index++;
                    option = `<option value="${key}">${banks[key]}</option>`;
                
                    
                    banksArr.push(option);
                    
                }
                banksEle.append(banksArr);
            }

        }

        if(_APP_HASH._uri_ == 'fund/detail' || 
            _APP_HASH._uri_ == 'fund/validate' ){

            let fundGenre = $('select[data-key="fundGenreAFk"]');
            if(fundGenre.val() !== "500" ){
                $('.admin-widget-fundStrategy').css('display','none');
            }
        }

        // init risk level
        setTimeout(() => {
            if (container.find('[data-key=isRiskRating]:checked').val() === '2') {
                container.find('[data-key=riskRating]').parents('.input-wrapper').hide();
            }
        });

        if($("select[data-key='fundGenreAFk']").val() != 500){
            $('.admin-widget-fundStrategy').css('display','none');
        }

        /*基金净值&累计分红*/
        if ($("select[data-key='establishStatus']").val()==1 && $("select[data-key='fundGenreAFk']").val() == 500) {
            $(".yesterdayNet").removeClass('hidden');
            $(".sumNet").removeClass('hidden');
            $(".admin-widget-yearrate").css('display','none');
        }else{
            $(".yesterdayNet").addClass('hidden');
            $(".sumNet").addClass('hidden');
            $(".admin-widget-yearrate").css('display','block');
        }
    },
    bind: function () {
        let me = this;
        let container = $(this.vm.$el);
    	$(this.vm.$el).on('click' ,'.my-tabs > li', function () {
    		$(this).siblings().removeClass('active');
    		$(this).addClass('active');
            let curIndex = $(this).attr("tab-index");

            $('.panel-body[form-index]', me.vm.$el).addClass("none");
            $('.panel-body[form-index='+ curIndex +']', me.vm.$el).removeClass('none');            
    	});

        // 是否启用风险等级联动
        container.on('click', '[data-key=isRiskRating]', function () {
            let on = container.find('[data-key=isRiskRating]:checked').val();
            let target = container.find('[data-key=riskRating]').parents('.input-wrapper');
            if (on === '2') {
                target.hide();
            } else {
                target.show();
            }
        });
        $('input[type=radio]').on('click' , function(){
            var key = $(this).attr('data-key');
            var arr = $('.incomeComputeDay').toArray();

            arr.forEach(function(item){
                $(item).addClass('none');
            });
            $('.' + key).removeClass('none');
        })

        container.on('click', '[data-role=submit]', function () {
            let data = {};
            let url  = '';
            let param = '';
            let inputCollections = $('.panel-body').find('[data-key]');

            if (!Util.validate(container)) {
                return;
            }
            if(!me.validateSubmitData()){
                AlertDialog.show('两次卡号不一致，请重新输入');
                return;
            }

            for (let i = 0, len = inputCollections.length; i < len; i++) {
                let ele = $(inputCollections[i]);
                let key = ele.attr('data-key');
                let val = ele.attr('data-values') || ele.val();
                if (key) {
                    data[key] = val;
                }
            }
            url = me.data.submiturl || me.data.url;
            param = me.data.param;
            if(param){
                let params = location.href.split('?')[1].split("=");
                let key = params[0];
                let val = params[1];
                data[key] = val;
            }

            let model = new formModel();
            model.getData(url,data,'POST').then((res) => {
                if(me.data.successMgs){
                    AlertDialog.show(me.data.successMgs);
                }
                window.location.href = me.data.backPage;
                if(_APP_HASH._uri_ == "addPro/distributor"){
                    
                }else{
                    
                }
            });
        });

        container.on('click', 'button', function(){
            let dataRole = $(this).attr('data-role');
            if(dataRole == 'save' ) {
                if($(me.vm.$el).find('[data-key=name]').val() === '') {
                    AlertDialog.show('请输入产品名称');
                    return;
                }
                let data = me.processAddProData('save');
                data.product.categoryFk = parseInt($(this).attr("pro"));
                let saveUrl = Config.host + me.data.saveUrl;
                Util.getData(saveUrl,data,'POST').then((res)=>{
                    if(res){
                        if (res.status === 1) {
                            AlertDialog.show('保存成功');
                            window.location.href = '#main/product/maintenance';
                        }else if(res.status === 0){
                            AlertDialog.show('保存失败，请检查是否有非法输入');
                        }
                    }else{
                        AlertDialog.show('网络请求失败');
                    }
  
                });
            }else if(dataRole == 'release'){

                if (!Util.validate(container)) {
                    return;
                }
                //max-Investment Price must 
                if ($('[data-key=startingPrice]', me.vm.$el).size() && $('[data-key=offeringSize]', me.vm.$el).size()) {
                    let res = Util.startPriceValidate(container);
                    if (res && res.state == 0) {
                        AlertDialog.show(res.mgs);
                        return;
                    }
                }
                let data = me.processAddProData();

                data.product.categoryFk = parseInt($(this).attr("pro"));
                let publishUrl = Config.host + me.data.publishUrl;

                Util.getData(publishUrl,data,'POST').then((res)=>{
                    if(res){
                        if (res.status === 1) {
                            AlertDialog.show('发布成功');
                            window.location.href = '#main/product/maintenance';
                        }else if(res.status === 0){
                            res.msg &&  AlertDialog.show(res.msg);
                        }
                    }else{
                        AlertDialog.show('网络请求失败');
                    }

                });
            }
           
        })
        $(".city-select").on('click',function(){
            citySelectDialog.show({

                onConfirm: (data) => {
                    $(this).val(data.name)
                    $(this).attr('data-values', data.value);
                }
            });
        })
        $("select[data-key='fundGenreAFk']").on('click',function(){
            let  value = $(this).val();
            if(value !== "500"){
                $(".admin-widget-fundStrategy").css('display','none');
                
                if($('select[data-key="establishStatus"]').val() == 1){
                    $(".yesterdayNet").addClass('hidden');
                    $(".sumNet").addClass('hidden');
                    $(".admin-widget-yearrate").css('display','block');
                }
            }else {
                $(".admin-widget-fundStrategy").css('display','block');
                
                if($('select[data-key="establishStatus"]').val() == 1){
                    $(".yesterdayNet").removeClass('hidden');
                    $(".sumNet").removeClass('hidden');
                    $(".admin-widget-yearrate").css('display','none');
                }
            }
        });

        $("select[data-key='establishStatus']").on('click',function(){
            if($(this).val() == 1){
                if($("select[data-key='fundGenreAFk']").val() == 500){
                    $(".yesterdayNet").removeClass('hidden');
                    $(".sumNet").removeClass('hidden');
                    $(".admin-widget-yearrate").css('display','none');
                }
            }else{
                if($("select[data-key='fundGenreAFk']").val() == 500){
                    $(".yesterdayNet").addClass('hidden');
                    $(".sumNet").addClass('hidden');
                    $(".admin-widget-yearrate").css('display','block');
                }
            }
        });
        $('input').on('blur' ,function(){
            let ele = $(this);
            let isNumTag = ele.attr('data-number');
            let isPhoneTag = ele.attr('data-phone');
            let require = ele.attr('data-valide');
            let val = ele.val();
            let parentNode = ele.parents('.input-wrapper');
     
            if(isNumTag){
                if(val !== '' && isNaN(val)){
                    parentNode.find('.tips').remove();
                    parentNode.append(`<p class="tips">${ele.attr('data-des')}必须为数字</p>`);
                }else{
                    parentNode.find('.tips').remove();
                }
            }

            if (isPhoneTag === 'phone') {
                if(val !== '' && !/^1\d{10}$/.test(val)){
                    parentNode.find('.tips').remove();
                    parentNode.append(`<p class="tips">${ele.attr('data-des')}无效</p>`);
                }else{
                    parentNode.find('.tips').remove();
                }
            }
        })

        //文件上传功能
        container.on('click', '.uploadFile', function () {
             var formData = new FormData($(this).parents(".uploadForm")[0]);  
             $.ajax({  
                url: 'filesUpload/singleProductFileUpload' ,  
                type: 'POST',  
                data: formData,  
                async: false,
                cache: false, 
                contentType: false,  
                processData: false,  
                success: function (response) {  
                    if(response.msg == 'success'){
                        uploadFileData = response.item;
                    }
                },  
                error: function (response) {  
                    alert(response.msg);  
                }  
             });
        })
    },
    processAddProData : function(role=''){
        let me = this;
        let container = $('.cnt-box');

        let url  =  '';
        let filters = {};

        filters = Object.assign(filters, Util.getInputFilters());

        filters.fundTypeFk    = parseInt(filters.fundTypeFk);
        filters.fundSubTypeFk = parseInt(filters.fundSubTypeFk);

        //deal with units has no value
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
        if ($('.admin-widget-star').size()) {
            filters.arrRank = +$('.admin-widget-star').attr('data-value');
        }

        let data  = {
            'product' : filters,
        }
        
        // get custom element list info
        if (container.find('.admin-widget-customele').size()) {
            data.customElementsList = Util.getCustomElement(container.find('.admin-widget-customele'));
        }
        
        // get commission type info
        let commTypeContainer = container.find('.admin-widget-commtype');
        if (commTypeContainer.size()) {
            let commTypeData = Util.getCommTypeData(commTypeContainer);
            if (commTypeData === false && role !== 'save') {
                AlertDialog.show('请填写佣金设置内容');
                return;
            }
            data.product.commissionTypeFk = commTypeData.commissionTypeFk;
            data.product.baseCommission = commTypeData.baseCommission;
            data.productCommissionList = commTypeData.productCommissionList
        }

        let publisherEle  = $('select[data-key="publisherFk"]');
        if (publisherEle.val() === '' || publisherEle.val() === undefined) {
            AlertDialog.show('发行商为空,请选择');
            return;
        }

        // get year rate info
        let yearRateContainer = container.find('.admin-widget-yearrate');
        
        if (yearRateContainer.size()) {
            let yearRateData = Util.getYearRateData(yearRateContainer);

            data.product.arrTypeFk = yearRateData.arrTypeFk;
            data.product.expectedArr = yearRateData.expectedArr;
            data.product.fixMin = yearRateData.fixMin;
            data.product.minArr = yearRateData.minArr;
            data.product.floatMax = yearRateData.floatMax;
            data.product.maxArr = yearRateData.maxArr;
            data.productLadderRates = yearRateData.productLadderRates
        }

        if (/\/draftedit$/.test(_APP_HASH._uri_)) {
            data.product.id = _APP_HASH.id
        }

        return  data;
    },
    validateSubmitData : function(){

        let page = _APP_HASH._uri_ ;
        if(page == "distributor/edit"){
            return true;
        }
        if($('input[data-key="paymentTransferCardNumber"]') &&
            $('input[data-key="paymentTransferCardNumberAgain"]')){
            let payTanscardEle = $('input[data-key="paymentTransferCardNumber"]');
            let payTanscardAgainEle = $('input[data-key="paymentTransferCardNumberAgain"]');
            if(payTanscardEle.val() !== payTanscardAgainEle.val()){
                return  false;
            }else{
                return true
            }
        }
    },
    computed:{
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default addform;