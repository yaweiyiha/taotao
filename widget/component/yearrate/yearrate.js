import LadderComm from 'widget/component/laddercomm/laddercomm'
import Util from 'widget/util/util'
import AlertDialog from "widget/classComponent/dialog/alert"

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
 		YearRateUnit: {default: '元'},
 		floatUpperLimit: {default: '0'},
 		latterData: {default: []},
 		disable: {default: false},
 	},
 	watch: {
 		latterData: function () {
 			if (this.latterData.length) {
 				this.YearRateUnit = this.unitDict['' + this.latterData[0].measureUnitFk];
 			} else {
 				this.YearRateUnit = '元';
 			}

 			if (this.latterData.length) {
 				if (this.latterData[0].minExtraRate && this.latterData[0].maxExtraRate) {
 					this.floatUpperLimit = '1';
 				} else {
 					this.floatUpperLimit = '0';
 				}
 			} else {
 				this.floatUpperLimit = '0';
 			}
 		}
 	},
 	// computed: {
 	// 	YearRateUnit: function () {
 	// 		if (this.latterData.length) {
 	// 			return this.unitDict['' + this.latterData[0].measureUnitFk];
 	// 		} else {
 	// 			return '元';
 	// 		}
 	// 	},
 	// 	floatUpperLimit: function () {
 	// 		if (this.latterData.length) {
 	// 			if (this.latterData[0].minExtraRate && this.latterData[0].maxExtraRate) {
 	// 				return '1';
 	// 			} else {
 	// 				return '0';
 	// 			}
 	// 		} else {
 	// 			return '0';
 	// 		}
 	// 	}
 	// },
 	data: () => ({
 		unitDict: {
 			'1100': '元',
 			'1200': '万元',
 			'1300': '亿元'
 		},
 		leftContain: '0',
 	// 		latterData: [{
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
 		},
		arrTypeFkChange: function () {
			if ($('[data-key=startingPrice]').size() === 0) {
				return;
			}
			let Dict = {
				'1100': '元',
				'1200': '万元',
				'1300': '亿元'
			};
 			if (this.arrTypeFk === '30' || this.arrTypeFk === '40') {
 				let startingPrice = $('[data-key=startingPrice]').val();
 				if (startingPrice === '' || isNaN(startingPrice)) {
 					this.arrTypeFk = '0';
 					AlertDialog.show('起购金额为空或者不是有效值');
 				} else {
 					let unit = Dict[$('[data-key=unitFkStartingPrice]').val()];
 					this.YearRateUnit = unit;

 					if (this.latterData.length === 0) {
 						this.latterData = [{
						    "value1": +startingPrice,
						    "operator1": "GT",
						    "value2": null,
						    "operator2": null,
						    "measureUnitFk": +$('[data-key=unitFkStartingPrice]').val(),
						    "extraCommission": null,
						    "sorter": 0 							
 						}, {
 							
 						}];

 						console.log(this.latterData);
 					}
 				}
 			}
		}
 	}
});