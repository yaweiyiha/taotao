let style = __inline('./proTerm.inline.less');
let tpl = __inline('./proTerm.tpl');

require.loadCss({
    name: 'admin-widget-proTerm-style',
    content: style
});

export default Vue.component('pro-term', {
 	template: tpl,
 	props: {
 		disable        : {default: false},
 		unitmaturities : {default : ''},
 		maturities     :  {default : ''},
 		startinginvest : {default : ''},
 		basedays       : {default : '365'},
 		custombasedays : {default : ''},
 		unitstartingmaturities : {default : ''}
 	},
 	data: () => ({
 		unitMaturities: '2400',
 		nonFixTerm : false,
 		baseDays: '365'
 	}),
});