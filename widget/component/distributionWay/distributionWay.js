import singledate from  'widget/component/singledate/singledate';

let style = __inline('./distributionWay.inline.less');
let tpl = __inline('./distributionWay.tpl');

require.loadCss({
    name: 'admin-widget-distributionWay-style',
    content: style
});

export default Vue.component('distribution-way', {
 	template: tpl,
 	data: () => ({
 		distributionWayFk    : '',
 		distriCircleShow     : false,
 		fixDayShow           : true,
 		completionDateShow   : false,
 		foundDateShow        : false ,
 		picked               : '',
 		circleArr            :{
 			'10'  : '月' ,
 			'40'  : '季度',
 			'30'  : '年',
 			'100' : '周',
 			'20'  : '天',
 			'80'  : '半年'
 		}
 	}),
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