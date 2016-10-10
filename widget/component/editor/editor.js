import UE_config from 'static/js/ueditor/ueditor.config.js';
import UE from 'static/js/ueditor/ueditor.all.js';
import previewDialog from 'widget/classComponent/dialog/previewDialog.js';


let style = __inline('./editor.inline.less');
let tpl = __inline('./editor.tpl');
let editor = null;

require.loadCss({
    name: 'admin-widget-editor-style',
    content: style
});

export default Vue.component('editor', {
 	template: tpl,
 	props: {
 		disable: {default: true},
 		panelname: {default : ''},
 		richatttype: {default : ''},
 	},
 	data: () => ({
 		height: '320px',
 		width: '100%',
 		rid: 'introductionContent' + '-' + (+new Date()),
 		isReadonly: false
 	}),
 	ready: function () {
 		//this.rid += '-' + (+new Date());
		editor = UE.getEditor(this.rid);
 		

 		/*let editor = new UE.ui.Editor({initialFrameHeight:320 });  
        editor.render(this.rid);*/
 	},
 	methods: {
 		submit: (event) => {
 			let introductionId = $(event.target).parents('.richTextarea').find('.introduction').prop('id');
 			let content = UE.getEditor(introductionId).getContent();
 			
 			previewDialog.show(content);

 		},
 		setDisabled: () => {
		    /*UE.getEditor('editor').setDisabled('fullscreen');*/
		    /*UE.getEditor('editor').setEnabled();*/
		}
 	}
});