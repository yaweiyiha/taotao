import LadderComm from 'widget/component/laddercomm/laddercomm'
import Util from 'widget/util/util'

let style = __inline('./commtype.inline.less');
let tpl = __inline('./commtype.tpl');

require.loadCss({
    name: 'admin-widget-commtype-style',
    content: style
});

export default Vue.component('comm-type', {
 	template: tpl,
 	data: () => ({
 		StaffCommType: '-1',
 		StaffCommUnit: '元'
 	}),
 	methods: {
 		getData: function () {
 			console.log(Util.getCommTypeData($(this.$el)));
 		}
 	}
});