Vue.filter('distributorStatus', function (status) {
	
    let distributorStatusArr = {
    	0 : '停用',
    	1 : '启用',
    }

    return distributorStatusArr[status];

})