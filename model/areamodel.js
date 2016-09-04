import Model from 'static/js/model.js'



class areaModel extends Model{

    getData(dataKey = '',opt) {
    	var Dict = {
    		'province' : 'area/provinces',
            'city' : 'area/cities/',
            'subarea' : 'area/districts/'
    	}
        var opt =  opt || '';
    	var url = Config['host'] + Dict[dataKey] + opt ;
        return new Promise(function(resolve, reject){
            var xhr = $.ajax({
                url: url,
                method: 'GET',
                timeout : 5000,
                dataType: 'json',
                cache: false,
                success: function (ret) {
                    if (ret.status === 1) {
                        resolve(ret.items);
                    } else {
                        reject();
                    }
                },
                error: function () {
                    console.log('fail')
                    reject();
                }
            });
        });
    }
}


module.exports = areaModel;