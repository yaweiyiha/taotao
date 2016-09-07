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
 		establish : {default: '1'},
 		sales : {default : ''},
 	},
 	data: () => ({
 		foundStatusFK    : '',
 		proCollect        : true,
 		collectStatus     : false,
 		failStatus   : 	  false,
 		salesStatusFk : '',
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

 		let ss= this.establish;
 	},
 	watch : {
 		foundStatusFK :function() {
 			let establish = parseInt(this.establish);
 			if(establish == 0){
 				this.proCollect = true;
 				this.collectStatus = false;
 				this.failStatus  = false;
 			}else if (establish == 1){
 				this.proCollect = false;
 				this.collectStatus = true;
 				this.failStatus  = false;
 			}else if(establish == 2){
 				this.proCollect = false;
 				this.collectStatus = false;
 				this.failStatus  = true;
 			}
 		}
 		
 	}
});