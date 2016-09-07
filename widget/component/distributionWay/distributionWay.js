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
 		distribution : {default: ''},
 		incomecalcutype : {default: ''},
 	},
 	data: () => ({
 		distributionWayFk    : '',
 		distriCircleShow     : false,
 		fixDayShow           : true,
 		completionDateShow   : false,
 		foundDateShow        : false ,
 		picked               : '',
 		distributionway      : '10',
 		circleUnit           : '月',
 	}),
 	computed : {
 		circleUnit : function(){
 			if(this.distributionway == '10'){
 				return '月';
 			}else if(this.distributionway == '40'){
 				return '季度';
 			}else if(this.distributionway == '30'){
 				return '年';
 			}else if(this.distributionway == '100'){
 				return '周';
 			}else if(this.distributionway == '20'){
 				return '天';
 			}else if(this.distributionway == '80'){
 				return '半年';
 			}
 		}
 	},
 	watch : {
 		distributionWayFk :function() {
 			let distributionWay = parseInt(this.distributionWayFk);
 			if(distributionWay == 130){
 				this.distriCircleShow = true
 			}else if (distributionWay == 90){
 				this.distriCircleShow = false
 			}
 		},
 		picked : function (){
 	
 			let picked = parseInt(this.picked);
 			if(picked == 10){

 				this.fixDayShow = true;
 				this.completionDateShow  =false;
 				this.foundDateShow =false;

 			}else if(picked == 20){

 				this.fixDayShow = false;
 				this.completionDateShow  =true;
 				this.foundDateShow =false;

 			}else if(picked == 30){

 				this.fixDayShow = false;
 				this.completionDateShow  =false;
 				this.foundDateShow =true;

 			}
 		}
 	}

});