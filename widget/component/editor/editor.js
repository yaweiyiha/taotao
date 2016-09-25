import UE_config from 'static/js/ueditor/ueditor.config.js';
import UE from 'static/js/ueditor/ueditor.all.js';

let style = __inline('./editor.inline.less');
let tpl = __inline('./editor.tpl');
let editor = null;

require.loadCss({
    name: 'admin-widget-editor-style',
    content: style
});

export default Vue.component('editor', {
 	template: tpl,
 	data: () => ({
 		height: '300px',
 		width: '100%',
 		rid: 'editor-box'
 	}),
 	ready: function () {
 		/*this.rid += '-' + (+new Date());
 		editor = UE.getEditor(this.rid);*/
 	},
 	methods: {
 		submit: () => {
 			let content = editor.getContent();
 			alert(content);
 		}
 	}
});