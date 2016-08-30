import CommType from 'widget/component/commtype/commtype'

let style = __inline('./productcommset.inline.less');
let tpl = __inline('./productcommset.tpl');

require.loadCss({
    name: 'asset-widget-productcommset-style',
    content: style
});

export default Vue.component('product-commset', {
 	template: tpl,
 	data: () => ({
 		strategyStaff: true,
 		strategySalespeople: true,
 		StaffCommType: '1',
 		salespeopleCommType: '1',
 		salespeopleCommRule: '1',
 		StaffCommUnit: '元',
 		salespeopleCommUnit: '元',
 		monthlyPerformance: [
 			{start: '', end: '5000', proportion: '1'},
 			{start: '5000', end: '50000', proportion: '2'},
 			{start: '', end: '50000', proportion: '3'},
 		]
 	}),
});