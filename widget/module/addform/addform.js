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
import Hoster from "widget/component/hoster/hoster"

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
            fundGenreAFk: '500',
            fundGenreBFk: '700',
            fundTypeFk: '60',
            fundSubTypeFk: '100',
            publisherFk: '',
            custodianParty: '10',
            establishStatus: '0',
            salesStatusFk: '10',
            unitFkIssureScale: '1100',
            unitFkOfferingSize: '1100',
            unitFkMaturities: '2100',
            unitFkStartingPrice: '1100',
            unitFkIncreasement: '1100',
            currencies: '10',
            riskRating: '30',
            arrTypeFk: '0',
            industryTypeFk: '10',
            custodianType: '10',
            distributionWayFk: '90',
            currencies: '10',
            arrRank: 0,
            customElementsList: [],
        }

        data.item = Object.assign({}, defaultData, data.item);

        this.data = data;
        this.vm = this.display(this.data ,tpl ,'vue');

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

            let index = 0;

            for(key in publisherList){
                if (index === 0) {
                    me.vm.$set('item.publisherFk', key);
                }
                index++;
                let option = `<option value="${key}">${publisherList[key]}</option>`;
                publisherArr.push(option);
            }
            $('select[data-key="publisherFk"]').append(publisherArr);
        }

        // if (this.data.options && this.data.options.disable === true) {
        //     $('input, select', this.vm.$el).attr("readonly","readonly").attr('disabled', true);
        //     $('.admin-widget-verifyconfirm input, select', this.vm.$el).attr("readonly","").attr('disabled',false);
        // }

        // add pass radios select in validate page
        // (function () {
        //     let html = [];
        //     html.push('<div class="verify-status-box">');
        //     html.push('<label><input type="radio" name="verifyStatus" value="40" checked="true">  通过</label>');
        //     html.push('<label><input type="radio" name="verifyStatus" value="30">  不通过</label>');
        //     html.push('</div>');

        //     if (/\/validate$/.test(_APP_HASH._uri_)) {
        //         $('.buttons-wrapper').prepend($(html.join('')));
        //     }
        // })();
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

        $('input[type=radio]').on('click' , function(){
            var key = $(this).attr('data-key');
            var arr = $('.incomeComputeDay').toArray();

            arr.forEach(function(item){
                $(item).addClass('none');
            });
            $('.' + key).removeClass('none');
        })

        $('.cnt-box').on('click', '[data-role=submit]', function () {
            let data = {};
            let url  = '';
            let param = '';
            let inputCollections = $('.panel-body').find('[data-key]');

            if (!Util.validate(container)) {
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
                    if (res.status === 1) {
                        AlertDialog.show('保存成功');
                        window.location.href = '#main/product/maintenance';
                    }
                });
            }else if(dataRole == 'republic'){
                if (!Util.validate(container)) {
                    return;
                }
                // 可销售份额应大于起购金额
                if ($('[data-key=startingPrice]', me.vm.$el).size() && $('[data-key=offeringSize]', me.vm.$el).size()) {
                    if (!Util.startPriceValidate(container)) {
                        AlertDialog.show('可销售份额应大于起购金额');
                        return;
                    }
                }
                let data = me.processAddProData();
                data.product.categoryFk = parseInt($(this).attr("pro"));
                let publishUrl = Config.host + me.data.publishUrl;
                Util.getData(publishUrl,data,'POST').then((res)=>{
                    if (res.status === 1) {
                        AlertDialog.show('发布成功');
                        window.location.href = '#main/product/maintenance';
                    }
                });
            }
           
        })

        $('button[data-role="republic"]').on('click',function () {
            validate($('body'));
        });

        $(".city-select").on('click',function(){
            citySelectDialog.show({
                onConfirm: (data) => $(this).val(data.city)
            });
        })

        $("select[data-key='fundGenreAFk']").on('click',function(){
            let  value = $(this).val();
            if(value !== "500"){
                $(".admin-widget-fundStrategy").css('display','none');
            }else {
                $(".admin-widget-fundStrategy").css('display','block');
            }
        });

        $('input').on('blur' ,function(){
            let ele = $(this);
            let isNumTag = ele.attr('data-number');
            let require = ele.attr('data-valide');
            let reg = new RegExp("^[0-9]*$");
            let val = ele.val();
            let parentNode = ele.parents('.input-wrapper');
     
            if(isNumTag){
                if(val !== '' && !reg.test(val)){
                    parentNode.find('.tips').remove();
                    parentNode.append(`<p class="tips">${ele.attr('data-des')}必须为数字</p>`);
                }else{
                    parentNode.find('.tips').remove();
                }
            }
            // debugger
            // if(require){
            //     if(val === '' || val === undefined){
            //         parentNode.find('.tips').remove();
            //         parentNode.append(`<p class="tips">${ele.attr('data-des')}必须为必填字段</p>`);
            //     }
            // }
        })

    },
    processAddProData : function(role=''){
        let me = this;
        let container = $('.cnt-box');

        let url  =  '';
        let filters = {};

        filters = Object.assign(filters, Util.getInputFilters());
        if(filters.name == "" || filters.name == undefined){
            //todo 
            //return;
        }

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
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default addform;