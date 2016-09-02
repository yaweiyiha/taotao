let style = __inline('./fundStrategy.inline.less');
let tpl = __inline('./fundStrategy.tpl');

require.loadCss({
    name: 'admin-widget-fundStrategy-style',
    content: style
});

export default Vue.component('fundStrategy', {
 	template: tpl
});