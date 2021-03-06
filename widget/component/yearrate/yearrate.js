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
 		establishstatus: {default: ''},
 		arrTypeFk: {default: '0'},
 		expectedarr: {default: '0'},
 		fixMin: {default: false},
 		floatMax: {default: false},
 		minArr: {default: ''},
 		maxArr: {default: ''},
 		YearRateUnit: {default: '元'},
 		notFloatUpperLimit: {default: '1'},
 		latterData: {default: []},
 		disable: {default: false},
 		leftContain: {default: '0'}
 	},
 	ready: function () {

 		let me = this;

		if (this.latterData && this.latterData.length) {
			this.YearRateUnit = this.unitDict['' + this.latterData[0].measureUnitFk];
		} else {
			this.YearRateUnit = '元';
		}
		// // 左包含, 右包含
		// if (this.latterData && this.latterData.length) {
		// 	let lastLatter = this.latterData[this.latterData.length - 1];
		// 	if (lastLatter.operator1 === 'GE') {
		// 		this.leftContain = '1';
		// 	} else {
		// 		this.leftContain = '0';
		// 	}
		// }
		
		// if (this.latterData && this.latterData.length) {
		// 	if (typeof this.latterData[0].extraRate === 'number' || typeof this.latterData[0].extraCommission === 'number') {
		// 		this.floatUpperLimit = '0';
		// 	} else {
		// 		this.floatUpperLimit = '1';
		// 	}
		// } else {
		// 	this.floatUpperLimit = '0';
		// }

		if ($('.cnt-box [data-key=unitFkStartingPrice]').size()) {
			this.disableUnit = true;
		}
		
		// 起购金额单位联动
		$('.cnt-box').on('change', '[data-key=unitFkStartingPrice]', function () {
			me.YearRateUnit = me.unitDict[$(this).val()];
		});


		if(this.arrTypeFk == 10 && this.establishstatus == 1){
			this.expectedarr = 0;
		}
 	},
 	computed: {
 		disableUnitComputed: function () {
 			if (!this.disable) {
 				return this.disableUnit;
 			} else {
 				return true;
 			}
 		}
 	},
 	data: () => ({
 		unitDict: {
 			'1100': '元',
 			'1200': '万元',
 			'1300': '亿元'
 		},
 		disableUnit: false,
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
 		fixminClick: function(event){
 			let me = this;
 			if(!$('.fixMin').prop('checked')){
 				me.floatMax = false;
 			}
 		},
 		floatmaxClick: function(event){
 			if(!$('.fixMin').prop('checked')){
 				event.preventDefault();
 			}
 		},
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
						    "operator1": "GE",
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