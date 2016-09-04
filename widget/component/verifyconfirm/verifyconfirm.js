let style = __inline('./verifyconfirm.inline.less');
let tpl = __inline('./verifyconfirm.tpl');

require.loadCss({
    name: 'admin-widget-verifyconfirm-style',
    content: style
});

export default Vue.component('verify-confirm', {
 	template: tpl,
 	data: () => ({
 		verifyStatus: '40',
 		verifyDenyReason: ''
 	}),
 	methods: {
 		submit: function () {
 			let productId = _APP_HASH.id;
 			let verifyState = this.verifyStatus;
 			let verifyDenyReason = this.verifyDenyReason;

 			let url = `${Config.host}product/saveVerify`; 
 			$.post(url, {
 				productId,
 				verifyState,
 				verifyDenyReason
 			}, function (data) {
 				if (data.status === 1) {
 					location.hash = '#main/product/maintenance';
 				} else {
 					alert(data.msg);
 				}
 			});
 		}
 	}
});