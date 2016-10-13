/**
 * component found-status 
 */
import singledate from  'widget/component/singledate/singledate';

let style = __inline('./foundStatus.inline.less');
let tpl   = __inline('./foundStatus.tpl');

require.loadCss({
    name: 'admin-widget-foundStatus-style',
    content: style
});

export default Vue.component('found-status', {
 	template: tpl,
 	props: {
 		disable         : {default : false },
 		establish       : {default : ''    },
 		sales           : {default : '10'  },
 		executestate    : {default : '10'  },
 		dateestablished : {default : ''    },
 	},
 	data: () => ({
		salesother      : '70',
 	}),
 	ready: function () {
 		
 		this.executestate = (this.executestate == null || this.executestate == '')?'10':this.executestate;
 		
		if( this.sales == '10' || this.sales == '20' || this.sales == '30' || this.sales == '80' ){
			this.salesother = '70'
		}else{
			this.salesother = this.sales;
			this.sales = '10';
		}
 	}
});