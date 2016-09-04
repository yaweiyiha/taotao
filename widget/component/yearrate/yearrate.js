import LadderComm from 'widget/component/laddercomm/laddercomm'
import Util from 'widget/util/util'

let style = __inline('./yearrate.inline.less');
let tpl = __inline('./yearrate.tpl');

require.loadCss({
    name: 'admin-widget-yearrate-style',
    content: style
});

export default Vue.component('year-rate', {
 	template: tpl,
 	props: {
 		arrTypeFk: {default: '0'},
 		expectedArr: {default: '0'},
 		fixMin: {default: false},
 		floatMax: {default: false},
 		minArr: {default: ''},
 		maxArr: {default: ''},
 		latterData: {default: ''}
 	},
 	computed: {
 		YearRateUnit: function () {
 			if (this.latterData.length) {
 				return this.unitDict['' + this.latterData[0].measureUnitFk];
 			} else {
 				return '元';
 			}
 		},
 		floatUpperLimit: function () {
 			if (this.latterData.length) {
 				if (this.latterData[0].minExtraRate && this.latterData[0].maxExtraRate) {
 					return '1';
 				} else {
 					return '0';
 				}
 			} else {
 				return '0';
 			}
 		}
 	},
 	data: () => ({
 		unitDict: {
 			'1100': '元',
 			'1200': '万元',
 			'1300': '亿元'
 		},
 		leftContain: '0',
 		// 	latterData: [{
		//     "value1": 2,
		//     "operator1": "GT",
		//     "value2": 4,
		//     "operator2": "LE",
		//     "measureUnitFk": 1100,
		//     "extraCommission": 2,
		//     "sorter": 0
		//   },
		//   {
		//     "value1": 6,
		//     "operator1": "GT",
		//     "value2": 12,
		//     "operator2": "LE",
		//     "measureUnitFk": 1100,
		//     "extraCommission": 4,
		//     "sorter": 1
		//   },
		//   {
		//     "value1": 12,
		//     "operator1": "GT",
		//     "value2": null,
		//     "operator2": null,
		//     "measureUnitFk": 1100,
		//     "extraCommission": 6,
		//     "sorter": 2
		// }]
 	}),
 	methods: {
 		getData: function () {
 			console.log(Util.getYearRateData($(this.$el)));
 		}
 	}
});