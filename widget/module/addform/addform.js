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
        prointrimgData = '',
        prointrvideoData='',
        cmpcofmimgData='',
        cmpcofmvideoData='',
        knowmoreimgData='',
        knowmorevideoData='';

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

        let proIntrData = '',comCofmData = '',knowMoreData = '',relateDocData = '';
        //console.log(JSON.stringify(data.item.introductionExtendList));
        if(data.item.introductionExtendList){
            let introductionExtendListData = data.item.introductionExtendList;
            for(var i=0;i<introductionExtendListData.length;i++){
                let intrTypeVal = introductionExtendListData[i].intrType;
                if(intrTypeVal == 10){
                    proIntrData = introductionExtendListData[i];
                }
                if(intrTypeVal == 40){
                    comCofmData = introductionExtendListData[i];
                }
                if(intrTypeVal == 70){
                    knowMoreData = introductionExtendListData[i];
                }
                if(intrTypeVal == 100){
                    relateDocData = introductionExtendListData[i];
                }
            }
        }
        
        container.find('.intrType').each(function(idx,ele){
            let intrTypeVal = $(ele).attr('data-intrType');
            if(intrTypeVal == 10){
                if(proIntrData){
                    $(ele).find('.padShowName').val(proIntrData.padName);
                    if(!proIntrData.isShow){
                        $(ele).find('.receptionShow').prop('checked',true);
                        $(ele).find('.prointrCont').hide();
                    }else{
                        $(ele).find('.receptionShow').prop('checked',false);
                        $(ele).find('.prointrCont').show();
                    }

                    $(ele).find('.introductionType option[value="'+proIntrData.introductionType+'"]')
                    .prop('selected',true).siblings().attr('selected',false);

                    $(ele).find('.admin-widget-presentType .tab-content .tab-pane:eq("'+proIntrData.introductionType+'")')
                    .addClass('active').siblings().removeClass('active');

                    

                    //富媒体内容
                    /*let introductionId = $(ele).find('.introduction').prop('id');

                    UE.getEditor(introductionId).setContent(proIntrData.introduction, false);*/

                    //富媒体不可编辑
                    /*UE.getEditor(introductionId).setDisabled('fullscreen');
                    UE.getEditor(introductionId).setEnabled();*/
                    

                    $(ele).find('input.webUrl').val(proIntrData.webUrl);

                    $(ele).find('input.attachTitle').val(proIntrData.attachTitle);

                    if(proIntrData.attachmentList){
                        for(var j=0;j<proIntrData.attachmentList.length;j++){
                            if(proIntrData.attachmentList[j].attType == 10){
                                $(ele).find('input.imgShowName').val(proIntrData.attachmentList[j].showName);
                            }
                            if(proIntrData.attachmentList[j].attType == 20){
                                $(ele).find('input.videoShowName').val(proIntrData.attachmentList[j].showName);
                            }
                        }
                    }

                }
                
            }
            if(intrTypeVal == 40){
                if(comCofmData){
                    $(ele).find('.padShowName').val(comCofmData.padName);

                    if(!comCofmData.isShow){
                        $(ele).find('.receptionShow').prop('checked',true);
                        $(ele).find('.prointrCont').hide();
                    }else{
                        $(ele).find('.receptionShow').prop('checked',false);
                        $(ele).find('.prointrCont').show();
                    }

                    $(ele).find('.introductionType option[value="'+comCofmData.introductionType+'"]')
                    .prop('selected',true).siblings().attr('selected',false);

                    $(ele).find('.admin-widget-presentType .tab-content .tab-pane:eq("'+comCofmData.introductionType+'")')
                    .addClass('active').siblings().removeClass('active');

                    $(ele).find('input.webUrl').val(comCofmData.webUrl);

                    $(ele).find('input.attachTitle').val(comCofmData.attachTitle);

                    if(comCofmData.attachmentList){
                        for(var j=0;j<comCofmData.attachmentList.length;j++){
                            if(comCofmData.attachmentList[j].attType == 40){
                                $(ele).find('input.imgShowName').val(comCofmData.attachmentList[j].showName);
                            }
                            if(comCofmData.attachmentList[j].attType == 50){
                                $(ele).find('input.videoShowName').val(comCofmData.attachmentList[j].showName);
                            }
                        }
                    }

                }
                

            }
            if(intrTypeVal == 70){
                if(knowMoreData){
                    $(ele).find('.padShowName').val(knowMoreData.padName);

                    if(!knowMoreData.isShow){
                        $(ele).find('.receptionShow').prop('checked',true);
                        $(ele).find('.prointrCont').hide();
                    }else{
                        $(ele).find('.receptionShow').prop('checked',false);
                        $(ele).find('.prointrCont').show();
                    }

                    $(ele).find('.introductionType option[value="'+knowMoreData.introductionType+'"]')
                    .prop('selected',true).siblings().prop('selected',false);

                    $(ele).find('.admin-widget-presentType .tab-content .tab-pane:eq("'+knowMoreData.introductionType+'")')
                    .addClass('active').siblings().removeClass('active');

                    $(ele).find('input.webUrl').val(knowMoreData.webUrl);

                    $(ele).find('input.attachTitle').val(knowMoreData.attachTitle);
                    if(knowMoreData.attachmentList){
                        for(var j=0;j<knowMoreData.attachmentList.length;j++){
                            if(knowMoreData.attachmentList[j].attType == 70){
                                $(ele).find('input.imgShowName').val(knowMoreData.attachmentList[j].showName);
                            }
                            if(knowMoreData.attachmentList[j].attType == 80){
                                $(ele).find('input.videoShowName').val(knowMoreData.attachmentList[j].showName);
                            }
                        }
                    }
                }
            }
            if(intrTypeVal == 100){
                if(relateDocData){
                    $(ele).find('.padShowName').val(relateDocData.padName);

                    if(!relateDocData.isShow){
                        $(ele).find('.receptionShow').prop('checked',true);
                        $(ele).find('.prointrCont').hide();
                    }else{
                        $(ele).find('.receptionShow').prop('checked',false);
                        $(ele).find('.prointrCont').show();
                    }

                    if(relateDocData.attachmentList){
                        for(var j=0;j<relateDocData.attachmentList.length;j++){
                            let relatedocTpl = document.getElementById("relatedocTpl").innerHTML;
                            let eleDiv = document.createElement("div");
                            eleDiv.className = 'relatedocItem';
                            $(eleDiv).attr('data-shownameval',relateDocData.attachmentList[j].showName);
                            
                            eleDiv.innerHTML = relatedocTpl;
                            document.getElementById("relatedocList").appendChild(eleDiv);
                        }

                        $(ele).find('#relatedocList input.relateShowName').each(function(index,element){
                            let shownameVal = $(this).parents('.relatedocItem').attr('data-shownameval');
                            $(this).val(shownameVal);
                        })
                    }
                }
                
            }
        })

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

        //基金类型-证券
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

        //成立状态-已成立
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
            let ele = $(this);
            
            if(!(ele.parents('.uploadForm').find('input[name="multipartFile"]').val())){
                ele.parents('.uploadForm').find('.uploadSuccessTips').html('');
                return false;
            }
            
            let intrtypeVal = $('.admin-widget-presentType').attr('data-intrtype');
            let imgatttypeVal = ele.parents('.uploadForm').attr('data-imgatttype');
            let videoatttypeVal = ele.parents('.uploadForm').attr('data-videoatttype');
            let relateatttypeVal = ele.parents('.uploadForm').attr('data-relateatttype');
            
            let formData = new FormData(ele.parents(".uploadForm")[0]);
            
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
                        //产品介绍
                        if(intrtypeVal = 10){
                            if(imgatttypeVal == 10){
                                prointrimgData = response.item;
                            }
                            if(videoatttypeVal == 20){
                                prointrvideoData = response.item;
                            }
                        }

                        //公司简介
                        if(intrtypeVal = 40){
                            if(imgatttypeVal == 40){
                                cmpcofmimgData = response.item;
                            }
                            if(videoatttypeVal == 50){
                                cmpcofmvideoData = response.item;
                            }
                        }

                        //了解更多
                        if(intrtypeVal = 70){
                            if(imgatttypeVal == 70){
                                knowmoreimgData = response.item;
                            }
                            if(videoatttypeVal == 80){
                                knowmorevideoData = response.item;
                            }
                        }

                        //相关文件
                        if(intrtypeVal = 100){
                            if(relateatttypeVal==100){
                                ele.parents('.uploadForm').find('input[name="multipartFile"]')
                                .attr('data-result',JSON.stringify(response.item));
                            }
                        }

                        ele.parents('.uploadForm').find('.uploadSuccessTips').html('上传成功');
                    }
                },  
                error: function (response) {  
                    alert(response.msg);  
                }  
            });
        })

        //相关文件-删除
        container.on('click', '.relateDelete', function () {
            $(this).parents('.relatedocItem').remove();
        })

        //相关文件-上移
        container.on('click', '.relateUp', function () {
            let pRow = $(this).parents('.relatedocItem');
            pRow.prev().before(pRow);
        })

        //相关文件-下移
        container.on('click', '.relateDown', function () {
            let pRow = $(this).parents('.relatedocItem');
            pRow.next().after(pRow);
        })


        //前台不展示
        container.on('click', '.receptionShow', function () {
            if($(this).prop('checked')){
                $(this).parents('.intrType').find('.prointrCont').hide();
            }else{
                $(this).parents('.intrType').find('.prointrCont').show();
            }
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

        //公司介绍数据
        //let intrExtentContainer = container.find('.intrType');
        let intrExtentData = [];

        container.find('.intrType').each(function(idx,ele){
            
            let attachmentData = [];

            let intrTypeVal = $(ele).attr('data-intrType');
            let imgatttypeVal = $(ele).attr('data-imgatttype');
            let videoatttypeVal = $(ele).attr('data-videoatttype');
            let richatttypeVal = $(ele).attr('data-richatttype');
            let relateatttypeVal = $(ele).attr('data-relateatttype');

            let padNameVal = $(ele).find('.padShowName').val();
            let isShowVal = $(ele).find('.receptionShow').prop('checked')?0:1;
            
            let introductionTypeVal = $(ele).find('.introductionType option:selected').val();

            //富媒体内容
            let introductionId = $(ele).find('.introduction').attr('id');
            if(intrTypeVal == 10 || intrTypeVal == 40 || intrTypeVal == 70){
                introductionVal = UE.getEditor(introductionId).getContentTxt();
            }

            let webUrlVal = $(ele).find('input.webUrl').val();
            let attachTitleVal = $(ele).find('input.attachTitle').val();

            let imgShowNameVal = $(ele).find('input.imgShowName').val();
            let videoShowNameVal = $(ele).find('input.videoShowName').val();


            if(intrTypeVal == 10){

                if(imgatttypeVal == 10){
                    if(prointrimgData){
                        prointrimgData.attType = 10;
                        prointrimgData.showName = imgShowNameVal;
                        attachmentData.push(prointrimgData);
                    }
                }
                if(videoatttypeVal == 20){
                    if(prointrvideoData){
                        prointrvideoData.attType = 20;
                        prointrvideoData.showName = videoShowNameVal;
                        attachmentData.push(prointrvideoData);
                    }
                }
            }

            if(intrTypeVal == 40){
                if(imgatttypeVal == 40){
                    if(cmpcofmimgData){
                        cmpcofmimgData.attType = 40;
                        cmpcofmimgData.showName = imgShowNameVal;
                        attachmentData.push(cmpcofmimgData);
                    }
                    
                }
                if(videoatttypeVal == 50){
                    if(cmpcofmvideoData){
                        cmpcofmvideoData.attType = 50;
                        cmpcofmvideoData.showName = videoShowNameVal;
                        attachmentData.push(cmpcofmvideoData);
                    }
                }
            }

            if(intrTypeVal == 70){
                if(imgatttypeVal == 70){
                    if(knowmoreimgData){
                        knowmoreimgData.attType = 70;
                        knowmoreimgData.showName = imgShowNameVal;
                        attachmentData.push(knowmoreimgData);
                    }
                }
                if(videoatttypeVal == 80){
                    if(knowmorevideoData){
                        knowmorevideoData.attType = 80;
                        knowmorevideoData.showName = videoShowNameVal;
                        attachmentData.push(knowmorevideoData);
                    }
                }
            }

            if(intrTypeVal == 100){
                if(relateatttypeVal == 100){
                    $('#relatedocList .relatedocitem').each(function(index,element){
                        resultData = JSON.parse($(element).find('input[name="multipartFile"]').attr('data-result'));
                        resultData.sort = index;
                        resultData.attType = 100;
                        resultData.showName = $(element).find('input[name="showName"]').val();
                        attachmentData.push(resultData);
                    })
                }
            }
            

            intrExtentData[idx] = {
                intrType     : intrTypeVal?intrTypeVal:'',
                padName      : padNameVal?padNameVal:'',
                isShow       : isShowVal,
                introductionType : introductionTypeVal?introductionTypeVal:'',
                introduction : introductionVal,
                webUrl       : webUrlVal?webUrlVal:'',
                attachTitle  : attachTitleVal?attachTitleVal:'',
                attachmentList : attachmentData
            }
        })

        //console.log(JSON.stringify(intrExtentData));

        data.introductionExtendList = intrExtentData;

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