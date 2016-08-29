let style = __inline('./productcommset.inline.less');
let tpl = __inline('./productcommset.tpl');

require.loadCss({
    name: 'asset-widget-productcommset-style',
    content: style
});

export default Vue.component('product-commset', {
 	template: tpl,
 	data: () => ({
 		strategyStaff: false,
 		strategySalespeople: true,
 		StaffCommType: '1',
 		salespeopleCommType: '1',
 		salespeopleCommRule: '1'
 	}),
});