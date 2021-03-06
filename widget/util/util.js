import AlertDialog from 'widget/classComponent/dialog/alert'

var util = {
    cameCase: (str) => {
        return str.replace(/(\w)/,function(v){return v.toUpperCase()});
    },
    flatData: function (data, prefixKey = '') {
        let res = {};
        for(let i in data) {
            if (data.hasOwnProperty(i)) {
                let _prefixKey = prefixKey;
                if (_prefixKey === '') {
                    _prefixKey = i;
                } else {
                    _prefixKey += this.cameCase(i);
                }
                if (typeof data[i] === 'object') {
                    let tmp = $.extend(true, {}, data[i]);
                    res = $.extend(true, res, this.flatData(tmp, _prefixKey));
                } else if (typeof data[i] !== 'function') {
                    res[_prefixKey] = data[i];
                }
            }
        }

        return res;
    },
    getData :(url,param,methods) => {
 
        return new Promise(function(resolve, reject){
            var xhr = $.ajax({
                type: methods,
                url:  url ,
                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                data: JSON.stringify(param),
                timeout : 10000,
                cache: false,
                success: function (ret) {
                    if(ret.msg === 'success'){
                        resolve(ret);
                    }

                    if(ret){
                        resolve(ret);
                    }  
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    },
    getCommTypeData: (el)=> {
        // param `el` is the commType wrapper jQuery element
        let data = {};
        let validator = el.attr('data-validate');
        data.commissionTypeFk = +el.find('.commissionTypeFk').val();
        if (validator === 'required' && data.commissionTypeFk === -1) {
            return false;
        }
        data.baseCommission = null;
        data.productCommissionList = null;
        if (data.commissionTypeFk === 10) {
            data.baseCommission = +el.find('.baseCommission').val();
        } else if (data.commissionTypeFk === 20) {
            data.productCommissionList = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
            data.productCommissionList.forEach(function (item) {
                delete item.extraRate;
            });
        }
        return data;
    },
    getYearRateData: (el)=> {
        // param `el` is the commType wrapper jQuery element
        let data = {};
        
        data.arrTypeFk = +el.find('.arrTypeFk').val();
        data.expectedArr = null;
        data.fixMin = null;
        data.minArr = null;
        data.floatMax = null;
        data.maxArr = null;
        data.productLadderRates = null;
        if (data.arrTypeFk === 10) {
            data.expectedArr = el.find('.expectedArr').val();
        } else if (data.arrTypeFk === 20) {
            if (el.find('.fixMin').is(':checked')) {
                data.fixMin = 1;
                data.minArr = +el.find('.minArr').val();
            } else {
                data.fixMin = 0;
            }
            if (el.find('.floatMax').is(':checked')) {
                data.floatMax = 1;
                data.maxArr = +el.find('.maxArr').val();
            } else {
                data.floatMax = 0;
            }
        } else if (data.arrTypeFk === 30 || data.arrTypeFk === 40) {
            data.productLadderRates = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());

            data.productLadderRates.forEach(function (item) {
                delete item.extraCommission;
            });
        }

        return data;
    },
    getInputFilters: () => {

        let inputCollections = $('.panel-body').find('[data-key]');
        let data = {};
        for (let i = 0, len = inputCollections.length; i < len; i++) {
            let val = '';
            let ele = $(inputCollections[i]);
            let key = ele.attr('data-key');
            let isNum = ele.attr('is-num');

            // if(isNum){
            //     val = parseInt(ele.attr('data-values')) || parseInt(ele.val());
            // }else{
            //     val = ele.attr('data-values') || ele.val();
            // }
            let inputType = ele.attr('type');
            if(inputType === 'radio'){
                val = $('input[data-key=' +key + ']:checked').val();
                if (val !== '') {
                    val = +val;
                }
            }else if(isNum){
                val = ele.attr('data-values') || ele.val();
                if (val) {
                    val = val.trim();
                    val = +val;
                }
            }else {
                 val = ele.attr('data-values') || ele.val();
                 if (val) {
                     val = val.trim();
                 }
            }
            
            if (key && val !== '') {
                data[key] = val;
            }
        }
        return data;
    },
    startPriceValidate: (layer) => {
        let Dict = {
            '1100': 1,
            '1200': 10000,
            '1300': 100000000
        };
        let startingPrice = +$('[data-key=startingPrice]', layer).val();
        let offeringSize = +$('[data-key=offeringSize]', layer).val();
        let maxInvestmentPrice = +$('[data-key=maxInvestmentPrice]' ,layer).val();

        let startingPriceUint = $('[data-key=unitFkStartingPrice]', layer).val();
        let offeringSizeUint = $('[data-key=unitFkOfferingSize]', layer).val();
        let MaxInvestmentPriceUnit = $('[data-key=unitFkOfMaxInvestmentPrice]',layer).val();

        if (offeringSize * Dict[offeringSizeUint] <= startingPrice * Dict[startingPriceUint]) {
            let obj = {
                state : 0,
                mgs :  '可销售份额应大于起购金额'
            }
            return obj;
        } else if(maxInvestmentPrice * Dict[MaxInvestmentPriceUnit] <=  startingPrice * Dict[startingPriceUint]){
            let obj = {
                state : 0,
                mgs :  '最大投资金额应大于起购金额'
            }
            return obj; 
        }else{
            let obj = {
                state : 1
            }
            return obj; 
        }
    },
    validate: (layer) => {
        let valid = true;
        layer.find('.tips').remove();
        let eles = layer.find('input:text');

        eles.toArray().forEach((item) => {
            item = $(item);
            let validter = '';
            if(!($(item).parents('.input-wrapper').hasClass('hidden'))){
               validter = item.attr('data-valide'); 
            }
            
            if(validter){
                validter = String.prototype.split.call(validter, ',');
                validter = validter.map((item) => {
                    return item.trim();
                });
            }
            let val = item.attr('data-values') || item.val();

            if (val) {
                val = val.trim();
            }
            let des = item.attr('data-des') || '';

            let parentNode = '';
            if(item.parents('.own-input').length !== 0){
                parentNode = item.parents('.own-input');
            }else{
                parentNode = item.parents('.input-wrapper');
            }
            let offsetLeft = parentNode.find('.input-title').outerWidth() || 105;
            offsetLeft = Math.max(offsetLeft, 105);

            let errorTip = '';
            if ($.inArray('required', validter) > -1) {
                if (!val) {    
                    valid = false;
                    errorTip = `${des}必填`;

                    parentNode.append(`<p class="tips" style="margin-left:${offsetLeft}px">${des}必填</p>`);
                } else if (item.attr('data-number') === 'number') {
                    if (isNaN(val)) {
                        valid = false;
                        errorTip = `${des}必须为数字`;
                        parentNode.append(`<p class="tips" style="margin-left:${offsetLeft}px">${des}必须为数字</p>`);
                    }
                } else if(val !== '' &&  !/^[-'a-zA-Z0-9\u4e00-\u9eff\.-]+$/i.test(val)){
                    valid = false;
                    errorTip = `${des}输入有误`;
                    parentNode.append(`<p class="tips" style="margin-left:${offsetLeft}px">${des}输入有误</p>`);
                }
            }
        });

        if ($('select[data-key="paymentTransferBankId"]').attr('data-valide')) {
            if($('select[data-key="paymentTransferBankId"]').val() == '' || $('select[data-key="paymentTransferBankId"]').val() == null){
                valid = false;
                let des = $('select[data-key="paymentTransferBankId"]').attr('data-des') || '';
                let offsetLeft = $('select[data-key="paymentTransferBankId"]').parents('.input-wrapper').find('.input-title').outerWidth() || 105;
                offsetLeft = Math.max(offsetLeft, 105);
                $('select[data-key="paymentTransferBankId"]').parents('.input-wrapper').append('<p class="tips" style="margin-left:'+offsetLeft+'px">'+des+'必填</p>');
            }
        }
        
        if (valid === false) {
            AlertDialog.show('填写不完整或填写有误，请检查');
            return false;
        }

        // 起始日不能大于截止日
        if ($('[data-key=startDatePurchase]').val() && $('[data-key=endDatePurchase]').val()) {
            let startDatePurchase = new Date($('[data-key=startDatePurchase]').val());
            startDatePurchase = startDatePurchase.getTime();
            let endDatePurchase = new Date($('[data-key=endDatePurchase]').val());
            endDatePurchase = endDatePurchase.getTime();

            if (startDatePurchase > endDatePurchase) {
                AlertDialog.show('起始日不能大于截止日');
                return false;
            }
        }

        if( _APP_HASH._uri_ === 'asset/add'  || 
            _APP_HASH._uri_ === 'trust/add'  ||
            _APP_HASH._uri_ === 'debtassgin/add'  || 
            _APP_HASH._uri_ === 'trust/draftedit' ||
            _APP_HASH._uri_ === 'asset/draftedit' ||
            _APP_HASH._uri_ === 'debtassgin/draftedit'
            ){
            if($('.arrTypeFk').val() == '0'){
                AlertDialog.show('此产品历史实际年化收益率必须设置');
                return false;
            }
        }

        return true;

    },

    getCustomElement: (el) => {
        let output = el.find('.output').val();
        return JSON.parse(output);
    },
    processData: (data) => {
        let toString = (val) => {
            return val === null ? undefined : '' + val;
        }
        let toNumber = (val) => {
            return val === null ? undefined : +val;
        }
        data.area = data.area || {};
        return {
            name               :  data.product.name,
            fundGenreAFk       :  toString(data.product.fundGenreAFk), 
            fundGenreBFk       :  toString(data.product.fundGenreBFk), 
            fundTypeFk         :  toString(data.product.fundTypeFk), 
            fundSubTypeFk      :  toString(data.product.fundSubTypeFk),
            publisherFk        :  toString(data.product.publisherFk),
            custodianParty     :  toString(data.product.custodianParty) || '',
            fundManager        :  data.product.fundManager,
            fundManagerCompany :  data.product.fundManagerCompany,
            fundCustodianCharges: data.product.fundCustodianCharges,
            serviceTel         :  data.product.serviceTel,
            maturities         :  data.product.maturities,
            unitFkMaturities   :  toString(data.product.unitFkMaturities),
            startingPrice      :  data.product.startingPrice,
            unitFkStartingPrice:  toString(data.product.unitFkStartingPrice),
            increasement       :  data.product.increasement,
            unitFkIncreasement :  data.product.unitFkIncreasement,
            subscribeFee       :  data.product.subscribeFee,
            managementCost     :  data.product.managementCost,
            redeemFee          :  data.product.redeemFee,
            reward             :  data.product.reward,
            closeTime          :  data.product.closeTime,
            openDayDesc        :  data.product.openDayDesc,
            //币种
            currencies         :  data.product.currencies,

            //基金净值累计分红
            yesterdayNet       :  data.product.yesterdayNet,
            sumNet             :  data.product.sumNet,

            issureScale        :  toString(data.product.issureScale),
            arrTypeFk          :  toString(data.product.arrTypeFk),
            offeringSize       :  toString(data.product.offeringSize),
            maxInvestmentPrice :  toString(data.product.maxInvestmentPrice),

            expectedArr        : toString(data.product.expectedArr),
            selfDefinedProcess : toNumber(data.product.selfDefinedProcess),
            establishStatus    : toString(data.product.establishStatus),
            riskRating         : toString(data.product.riskRating),
            salesStatusFk      : toString(data.product.salesStatusFk),
            unitFkIssureScale  : toString(data.product.unitFkIssureScale), 
            unitFkOfferingSize : toString(data.product.unitFkOfferingSize),
            unitFkOfferingSize : toString(data.product.unitFkOfferingSize),
            unitFkOfMaxInvestmentPrice : toString(data.product.unitFkOfMaxInvestmentPrice),

            commissionTypeFk   : toString(data.product.commissionTypeFk),
            baseCommission     : toString(data.product.baseCommission),
            industryTypeFk     : toString(data.product.industryTypeFk),
            custodianType      : toString(data.product.custodianType) || '10',
            distributionWayFk  : toString(data.product.distributionWayFk),
            currencies         : toString(data.product.currencies),
            arrRank            : toNumber(data.product.arrRank),
            collarCast         : data.product.collarCast,
            collarCastNumber   : data.product.collarCastNumber,
            equity : data.product.equity,
            investModeFk  : data.product.investModeFk,
            investManager : data.product.investManager,
            startDatePurchase : data.product.startDatePurchase,
            fullName: data.publisher.fullName,
            telephone: data.publisher.telephone,
            address: data.publisher.address,
            foundStatusFK : data.product.foundStatusFK,
            startDateInterest : data.product.startDateInterest,
            executeState     : data.product.executeState,
            startingInvest  : data.product.startingInvest,
            baseDays   : data.product.baseDays,
            customBaseDays  :data.product.customBaseDays,
            unitFkStartingMaturities : data.product.unitFkStartingMaturities,
            incomeCalculationTypeFk : data.product.incomeCalculationTypeFk,
            distributeInterval   : data.product.distributeInterval,
            incomeCompletionDateNumber : data.product.incomeCompletionDateNumber,
            available: toString(data.product.available) || '10',
            //购买截止日
            endDatePurchase  : data.product.endDatePurchase,
            //开放日       
            openDayDesc      : data.product.openDayDesc,
            //购买起始日
            startDatePurchase : data.product.startDatePurchase,
            areaFullName: data.area.fullName,
            areaCode: data.area.cityCode,
            dateEstablished  : data.product.dateEstablished,
            publisherName  : data.publisher.name,
            isRiskRating: toString(data.product.isRiskRating),
            dateRelease  : data.product.dateRelease,
            vipChoicenessDistributionWayFk :  data.product.vipChoicenessDistributionWayFk,
            paymentTransferCardOwner : data.publisher.paymentTransferCardOwner,
            paymentTransferBankId  : data.publisher.paymentTransferBankId,
            paymentTransferBranch : data.publisher.paymentTransferBranch,
            paymentTransferCardNumber : data.publisher.paymentTransferCardNumber,
            notContainsFloatRateMax: toString(data.product.notContainsFloatRateMax),
            containsLeftValue: toString(data.product.containsLeftValue),

        }
    }
};

module.exports = util;