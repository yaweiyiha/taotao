import AlertDialog from 'widget/classComponent/dialog/alert'

var util = {
    
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
        
        data.commissionTypeFk = +el.find('.commissionTypeFk').val();
        data.baseCommission = null;
        data.productCommissionList = null;
        if (data.commissionTypeFk === 10) {
            data.baseCommission = +el.find('.baseCommission').val();
        } else if (data.commissionTypeFk === 20) {
            data.productCommissionList = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
        }
        return data;
    },
    getYearRateData: (el)=> {
        // param `el` is the commType wrapper jQuery element
        let data = {};
        
        data.arrTypeFk = +el.find('.YearRateType').val();
        data.expectedArr = null;
        data.fixMin = null;
        data.minArr = null;
        data.floatMax = null;
        data.maxArr = null;
        data.productLadderRates = null;
        if (data.arrTypeFk === 10) {
            data.expectedArr = el.find('.fixedRate').val();
        } else if (data.arrTypeFk === 20) {
            if (el.find('.fixMin').val()) {
                data.fixMin = 1;
                data.minArr = +el.find('.minArr').val();
            } else {
                data.fixMin = 0;
            }
            if (el.find('.floatMax').val()) {
                data.floatMax = 1;
                data.maxArr = +el.find('.maxArr').val();
            } else {
                data.floatMax = 0;
            }
        } else if (data.arrTypeFk === 30 || data.arrTypeFk === 40) {
            data.productLadderRates = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
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

            if(isNum){
                val = parseInt(ele.attr('data-values')) || parseInt(ele.val());
            }else{
                val = ele.attr('data-values') || ele.val();
            }
            
            if (key && val) {
                data[key] = val;
            }
        }
        return data;
    },
    validate: (layer) => {
        let valid = true;

        let eles = layer.find('[data-valide]');
        eles.toArray().forEach((item) => {
            item = $(item);
            let validter = item.attr('data-valide');
            validter = String.prototype.split.call(validter, ',');
            validter = validter.map((item) => {
                return item.trim();
            })
            let parentNode = item.parents('.input-wrapper');
            if ($.inArray('required', validter) > -1) {
                parentNode.find('.tips').remove();
                if (item.val() === '') {
                    valid = false;
                    parentNode.append(`<p class="tips">${item.attr('data-des')}必填</p>`);
                }
            }
        });

        if (valid === false) {
            AlertDialog.show('填写不完整，请检查必填字段');
        }

        return valid;
    },
    getCustomElement: (el) => {
        let list = [];
        el.each(function (index, item) {
            let title = $(item).find('[data-key=title]').val();
            let content = $(item).find('[data-key=content]').val();
            if (title || content) {
                list.push({ title, content });
            }
        });

        list.forEach(function (item, index) {
            item.sorter = (index + 1);
        });

        return list;

    },
    processData: (data) => {
        return {
            name               :  data.product.name,
            fundGenreAFk       :  ''+data.product.fundGenreAFk, 
            fundGenreBFk       :  ''+data.product.fundGenreBFk, 
            fundTypeFk         :  ''+data.product.fundTypeFk, 
            fundSubTypeFk      :  ''+data.product.fundSubTypeFk,
            publisherFk        :  ''+data.product.publisherFk,
            custodianParty     :  ''+data.product.custodianParty,
            fundManager        :  data.product.fundManager,
            fundManagerCompany :  data.product.fundManagerCompany,
            fundCustodianCharges: data.product.fundCustodianCharges,
            serviceTel         :  data.product.serviceTel,
            maturities         :  data.product.maturities,
            unitFkMaturities   :  ''+data.product.unitFkMaturities,
            startingPrice      :  data.product.startingPrice,
            unitFkStartingPrice:  ''+data.product.unitFkStartingPrice,
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

            issureScale        :  ''+data.product.issureScale,
            arrTypeFk          :  ''+data.product.arrTypeFk,
            offeringSize       :  ''+data.product.offeringSize,
            expectedArr        : ''+data.product.expectedArr,
            selfDefinedProcess : ''+data.product.selfDefinedProcess,
            establishStatus    : ''+data.product.establishStatus,
            riskRating         : ''+data.product.riskRating,
            salesStatusFk      : ''+data.product.salesStatusFk,
            unitFkIssureScale  : ''+data.product.unitFkIssureScale, 
            unitFkOfferingSize : ''+data.product.unitFkOfferingSize,
            unitFkOfferingSize : ''+data.product.unitFkOfferingSize,
        }
    }
};

module.exports = util;