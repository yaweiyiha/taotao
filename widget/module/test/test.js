let style = __inline('./test.inline.less');
let tpl = __inline('./test.tpl');

require.loadCss({
    name: 'admin-widget-test-style',
    content: style
});

export default Vue.component('test', {
 	template: tpl,
 	init: function () {
 		//TODO
 	},
});