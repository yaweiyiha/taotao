Vue.filter('productCategory', function (product) {
	
    let categoryArr = {
    	10 : '基金',
    	20 : '资管',
    	40 : '信托',
    	60 : '债权转让',
    	70 : '股权投资'
    }

    return categoryArr[product];

})