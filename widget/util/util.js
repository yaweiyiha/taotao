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
};

module.exports = util;