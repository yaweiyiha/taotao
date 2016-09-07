import singledate from  'widget/component/singledate/singledate';

let style = __inline('./foundStatus.inline.less');
let tpl = __inline('./foundStatus.tpl');

require.loadCss({
    name: 'admin-widget-foundStatus-style',
    content: style
});

export default Vue.component('found-status', {
 	template: tpl,
 	props: {
 		disable: {default: false},
 		establishStatus : {default: ''}
 	},
 	data: () => ({
 		foundStatusFK    : '',
 		proCollect        : true,
 		collectStatus     : false,
 		failStatus   : 	  false,
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
 	ready : function (){
 		debugger
 		let ss= this.establishStatus;
 	},
 	watch : {
 		foundStatusFK :function() {
 			let establishStatus = parseInt(this.establishStatus);
 			if(establishStatus == 0){
 				this.proCollect = true;
 				this.collectStatus = false;
 				this.failStatus  = false;
 			}else if (establishStatus == 1){
 				this.proCollect = false;
 				this.collectStatus = true;
 				this.failStatus  = false;
 			}else if(establishStatus == 2){
 				this.proCollect = false;
 				this.collectStatus = false;
 				this.failStatus  = true;
 			}
 		}
 		
 	}
});