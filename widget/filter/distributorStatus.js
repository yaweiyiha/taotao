Vue.filter('distributorStatus', function (status) {
	
    let distributorStatusArr = {
    	0 : '停用',
    	1 : '启用',
    }

    return distributorStatusArr[status];

})

Vue.filter('money', function (status) {
	status = '' + status;
    let Dict = {
    	'1100' : '元',
    	'1200' : '万元',
    	'1300' : '亿元'
    }

    return Dict[status];

})