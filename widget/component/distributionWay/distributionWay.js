import singledate from  'widget/component/singledate/singledate';

let style = __inline('./distributionWay.inline.less');
let tpl = __inline('./distributionWay.tpl');

require.loadCss({
    name: 'admin-widget-distributionWay-style',
    content: style
});

export default Vue.component('distribution-way', {
 	template: tpl,
 	props: {
 		list: {default: []},
 		disable: {default: false},
 		distribution : {default: '130'},
 		incomecalcutype : {default: '10'},
 		distributeinterval   : {default: ''}, 	
 		incomecompletion   : {default: ''}, 
 		startdateinterest  : {default:''}		
 	},
 	data: () => ({
 		distributionWayFk    : '',
 		distriCircleShow     : false,
 		fixDayShow           : true,
 		completionDateShow   : false,
 		foundDateShow        : false ,
 		picked               : '',
 		distributionway      : '10',
 		distributionAnother  : '10',
 	}),
 	ready: function () {

		if (this.distribution !== '130') {
			this.distributionWayFk = '90';
			this.distributionAnother = this.distribution;
		} else {
			this.distributionWayFk = '130';
		}
 	},
 	computed : {
 		circleUnit : function(){
 			if(this.distributionAnother == '10'){
 				return '月';
 			}else if(this.distributionAnother == '40'){
 				return '季度';
 			}else if(this.distributionAnother == '30'){
 				return '年';
 			}else if(this.distributionAnother == '100'){
 				return '周';
 			}else if(this.distributionAnother == '20'){
 				return '天';
 			}else if(this.distributionAnother == '80'){
 				return '半年';
 			}else {
 				return '月'
 			}
 		}
 	},
 	watch : {
 	}

});