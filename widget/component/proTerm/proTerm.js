let style = __inline('./proTerm.inline.less');
let tpl = __inline('./proTerm.tpl');

require.loadCss({
    name: 'admin-widget-proTerm-style',
    content: style
});

export default Vue.component('pro-term', {
 	template: tpl,
 	data: () => ({
 		unitMaturities    : '',
 		dayShow   : false ,
 		nonFixTerm : false ,

 	}),

 	watch : {
 		unitMaturities :function() {
 			let unitMaturities = parseInt(this.unitMaturities);
 			if(unitMaturities == 2100){
 				this.dayShow = true;
 				this.nonFixTerm = false;
 			}else if (unitMaturities == -3){
 				this.dayShow = false;
 				this.nonFixTerm = true;
 			}
 		}
 		
 	}
});