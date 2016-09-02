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
            issureScale        : ''+data.product.issureScale,
            arrTypeFk          : ''+data.product.arrTypeFk,
            offeringSize       : ''+data.product.offeringSize,
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