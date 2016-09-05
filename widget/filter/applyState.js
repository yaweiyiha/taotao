Vue.filter('applyState', function (applyID) {
	
    let applyStateArr = {
    	10 : '签约审核',
    	20 : '对方取消签约',
    	30 : '决绝签约',
    	40 : '代销已签约',
    }

    return applyStateArr[applyID];

})