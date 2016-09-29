
let style = __inline('./presentType.inline.less');
let tpl = __inline('./presentType.tpl');

require.loadCss({
    name: 'admin-widget-presentType-style',
    content: style
});

export default Vue.component('presenttype', {
 	template: tpl,
 	props: {
 		disable        : {default: false},
 		introductionType : {default : '0'},
 		intrtype: {default: ''},
 		panelname : {default : ''},
 		imgatttype: {default: ''},
 		videoatttype : {default : ''},
 		richatttype : {default : ''},
 		relateatttype: {default : ''},
 	},
 	data: () => ({
 		
 	}),
 	computed : {
 		
 	},
 	methods: {
 		selectChange: (event) => {
 			let idx = $(event.target).val();
 			$(event.target).parents('.admin-widget-presentType')
 			.find('.tab-content .tab-pane:eq("'+idx+'")')
 			.addClass('active').siblings().removeClass('active');
 		}
 	}
});