let style = __inline('./vipChoicenessDistributionWay.inline.less');
let tpl = __inline('./vipChoicenessDistributionWay.tpl');

require.loadCss({
    name: 'admin-widget-vipChoicenessDistributionWay-style',
    content: style
});

export default Vue.component('choiceness-distribution', {
 	template: tpl,
 		props: {
 		list: {default: []},
 		disable: {default: false},
 		distribution : {default: '10'},
 		incomecalcutype : {default: '10'},
 		distributeinterval   : {default: ''}, 	
 		incomecompletion   : {default: ''}, 
 		startdateinterest  : {default:''}		
 	},
 	data: () => ({
 		vipChoicenessDistributionWayFk    : '',
 		distriCircleShow     : false,
 		fixDayShow           : true,
 		completionDateShow   : false,
 		foundDateShow        : false ,
 		picked               : '',
 		distributionway      : '10',
 		distributionAnother  : '20',
 	}),
 	ready: function () {	

		if (this.distribution !== 10) {
			this.distributionAnother = this.distribution;
			this.distribution = '120';

		} else {
			this.distribution = '10';
		}
 	},
 	computed : {
 		circleUnit : function(){
 			if(this.distributionAnother == '20'){
 				return '月';
 			}else if(this.distributionAnother == '30'){
 				return '季度';
 			}else if(this.distributionAnother == '40'){
 				return '年';
 			}else if(this.distributionAnother == '70'){
 				return '半年';
 			}else if(this.distributionAnother == '80'){
 				return '天';
 			}else if(this.distributionAnother == '90'){
 				return '周';
 			}else {
 				return '月'
 			}
 		}
 	},
 	watch : {
 	}
});