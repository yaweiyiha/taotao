/**
 * tableModel Model for get Table Datas 
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 *
**/

import Model from 'static/js/model.js'
import TableData from 'test/data/distributManage'
var url = require('asset:widget/util/url.js');

class tableModel extends Model{

    /**
     * @param  {String} url
     * @param  {Object} param
     * @return {void}
     */
    getData(url,param) {
        var me = this;
        return new Promise(function(resolve, reject){
            // test data
            console.log(TableData);
            resolve(TableData);
            return;
            
            var xhr = $.ajax({
                url:  url ,
                type: 'POST',
                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                data: JSON.stringify(param),
                timeout : 10000,
                cache: false,
                success: function (ret) {
                    resolve(ret);
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    }
}

module.exports = tableModel;