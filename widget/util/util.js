'use strict';

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
        
        data.commissionTypeFk = +el.find('.StaffCommType').val();
        data.fixedCommission = null;
        data.StaffCommUnit = null;
        data.ladder = null;
        if (data.commissionTypeFk === 10) {
            data.fixedCommission = +el.find('.fixedCommission').val();
        } else if (data.commissionTypeFk === 20) {
            data.StaffCommUnit = el.find('.StaffCommUnit').val();
            data.ladder = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
        }
        return data;
    },
    getYearRateData: (el)=> {
        // param `el` is the commType wrapper jQuery element
        let data = {};
        
        data.arrTypeFk = el.find('.YearRateType').val();
        data.expectedArr = null;
        data.fixMin = null;
        data.minArr = null;
        data.floatMax = null;
        data.maxArr = null;
        data.ladder = null;
        if (data.arrTypeFk === '10') {
            data.expectedArr = el.find('.fixedRate').val();
        } else if (data.arrTypeFk === '20') {
            if (el.find('.fixMin').val()) {
                data.fixMin = '1';
                data.minArr = el.find('.minArr').val();
            } else {
                data.fixMin = '0';
            }
            if (el.find('.floatMax').val()) {
                data.floatMax = '1';
                data.maxArr = el.find('.maxArr').val();
            } else {
                data.floatMax = '0';
            }
        } else if (data.arrTypeFk === '30' || data.arrTypeFk === '40') {
            data.ladder = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
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
                val = parseInt(ele.attr('data-values')) || parseInt(ele.val()) 
                      || parseInt(ele.find("option:selected").text())
            }else{
                val = ele.attr('data-values') || ele.val() || ele.find("option:selected").text();
            }
            
            if (key && val) {
                data[key] = val;
            }
        }
        return data;
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