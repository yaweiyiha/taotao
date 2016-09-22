let style = __inline('./hoster.inline.less');
let tpl = __inline('./hoster.tpl');

require.loadCss({
    name: 'admin-widget-hoster-style',
    content: style
});

export default Vue.component('hoster', {
 	template: tpl,
 	props: {
 		disable: {default: false},
 		custodiantype : {default : ''},
 		custodian : {default : ''}
 	},
 	computed : {
 		placeholder : function(){
 			if(this.custodiantype == '20'){
 				return '请输入托管劵商';
 			}else if(this.custodiantype == '30'){
 				return '请输入托管银行';
 			}else if(this.custodiantype == '40'){
 				return '请输入第三方支付存管';
 			}
 		},
 		datades : function(){
 			if(this.custodiantype == '20'){
 				return '托管券商';
 			}else if(this.custodiantype == '30'){
 				return '托管银行';
 			}else if(this.custodiantype == '40'){
 				return '第三方支付存管';
 			}
 		}
 	}
}); 