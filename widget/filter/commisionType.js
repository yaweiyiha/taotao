Vue.filter('commisionType', function (commision) {
	
    let commisionTypeArr = {
    	10 : '固定佣金',
    	20 : '阶梯佣金',
    }

    return commisionTypeArr[commision];

})