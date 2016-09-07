let style = __inline('./hoster.inline.less');
let tpl = __inline('./hoster.tpl');

require.loadCss({
    name: 'admin-widget-hoster-style',
    content: style
});

export default Vue.component('hoster', {
 	template: tpl,
 	props: {
 		disable: {default: false}
 	},
 	data : () => ({
 		custodianType : '10',
 	}),
 	computed : {
 		placeholder : function(){
 			if(this.custodianType == '20'){
 				return '请输入托管劵商';
 			}else if(this.custodianType == '30'){
 				return '请输入托管银行';
 			}else if(this.custodianType == '40'){
 				return '第三方支付存管';
 			}
 		}
 	}
}); 