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
 		rid: 'introductionContent'
 	}),
 	ready: function () {
 		/*this.rid += '-' + (+new Date());*/
 		_editable=true;
 		var isReadonly = !_editable;
 		var introductionEditor = new baidu.editor.ui.Editor({
			toolbars:[[ 'undo', 'redo', '|','bold', 'italic', 'underline', 'fontborder', 
			'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 
			'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 
			'selectall', 'cleardoc', '|','customstyle', 'paragraph', 'fontfamily', 'fontsize',
			'|','justifyleft', 'justifycenter', 'justifyright', 'justifyjustify','insertimage', 'emotion']],
			autoFloatEnabled: false,
			readonly:isReadonly,
			autoHeightEnabled: false,
			zIndex:899,
			initialFrameHeight:300, //初始化高度
			initialFrameWidth: '100%',
			maximumWords:50000
		});
		introductionEditor.render('introductionContent');  //editor为编辑器容器的id
 		/*editor = UE.getEditor(this.rid);*/
 	},
 	methods: {
 		submit: () => {
 			let content = editor.getContent();
 			alert(content);
 		}
 	}
});