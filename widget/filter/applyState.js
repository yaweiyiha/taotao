Vue.filter('applyState', function (applyID) {
	
    let applyStateArr = {
    	10 : '代销方发起签约',
    	20 : '代销方取消',
    	30 : '委托方取消',
    	40 : '签约完成',
    }

    return applyStateArr[applyID];

})