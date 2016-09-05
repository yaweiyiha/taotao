Vue.filter('applyStates', function (apply) {
	
    let applyStatesArr = {
      	10 : "代销方发起签约",
      	20 : "代销方取消",
      	30 : "委托方取消",
      	40 : "申请完成",
      	50 : "完成产品发布",
    }

    return applyStatesArr[apply];

})