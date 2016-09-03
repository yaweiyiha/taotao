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
 		commissionTypeFk: '-1',
 		CommUnit: '元',
 		baseCommission: '0',
 		latterData: [{
		    "value1": 6,
		    "operator1": "LE",
		    "value2": null,
		    "operator2": null,
		    "measureUnitFk": 1100,
		    "extraCommission": 2,
		    "sorter": 0
		  },
		  {
		    "value1": 6,
		    "operator1": "GT",
		    "value2": 12,
		    "operator2": "LE",
		    "measureUnitFk": 1100,
		    "extraCommission": 4,
		    "sorter": 1
		  },
		  {
		    "value1": 12,
		    "operator1": "GT",
		    "value2": null,
		    "operator2": null,
		    "measureUnitFk": 1100,
		    "extraCommission": 6,
		    "sorter": 2
		}]
 	}),
 	methods: {
 		getData: function () {
 			console.log(Util.getCommTypeData($(this.$el)));
 		}
 	}
});