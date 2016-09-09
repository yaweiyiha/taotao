let style = __inline('./laddercomm.inline.less');
let tpl = __inline('./laddercomm.tpl');

require.loadCss({
    name: 'admin-widget-laddercomm-style',
    content: style
});

export default Vue.component('ladder-comm', {
 	template: tpl,
 	props: {
 		unit: {
 			default: ''
 		},
 		disable: {
 			default: false
 		},
 		latterData: {
 			default: () => []
		},
		leftContain: {
			default: '0'
		},
		notFloatUpperLimit: {
			default: '1'
		}
 	},
 	data: () => ({
 		list: [],
 		readonly: false
 	}),
 	ready: function () {
 		let me = this;
 		this.list = this.revertData();
		// 起购金额联动
		$('.cnt-box').on('change', '[data-key=startingPrice]', function () {
			if (me.list && me.list.length) {
				me.list[0].start = +$(this).val();
			}
		});
 	},
 	watch: {
 		latterData: function () {
 			this.list = this.revertData();
 		}
 	},
 	computed: {
 		dataCollect: function () {
 			let me = this;
 			let cache = this.list.map((item, index, list) => {
 				let cache = {};
 				let dict = {
 					'元': 1100,
 					'万元': 1200,
 					'亿元': 1300
 				};
 				if (this.notFloatUpperLimit === '0') {
	 				cache.minExtraRate = +item.proportion;
 					cache.maxExtraRate = +item.upperProportion;
 				} else {
	 				cache.extraCommission = +item.proportion;
	 				cache.extraRate = +item.proportion;
 				}
 				cache.measureUnitFk = this.unit ? dict[this.unit] : dict[item.unit];
 				cache.sorter = index;
 				cache.isValid = 1;
 				if (index === 0 && item.start === '') {
 					cache.value1 = +item.end;
 					cache.operator1 = me.leftContain === '1' ? 'LT' : 'LE';
 					cache.value2 = null;
 					cache.operator2 = null;
 				} else if (index === (list.length - 1)) {
 					cache.value1 = +item.end;
 					cache.operator1 = me.leftContain === '1' ? 'GE' : 'GT';
 					cache.value2 = null;
 					cache.operator2 = null;
 				} else {
 					cache.value1 = +item.start;
 					cache.operator1 = me.leftContain === '1' ? 'GE' : 'GT';
 					cache.value2 = +item.end;
 					cache.operator2 = me.leftContain === '1' ? 'LT' : 'LE';
 				}
 				return cache;
 			});

 			return JSON.stringify(cache);
 		}
 	},
 	methods: {
 		revertData: function () {
 			if (!this.latterData ||this.latterData.length === 0) {
 				return [
				    {
				        start: '',
				        end: '',
				        operator: '&lt;',
				        proportion: ''
				    }, {
				        start: '',
				        end: '',
				        operator: '&gt;',
				        proportion: ''
				    }
				]
 			}
 			return this.latterData.map((item, index, list) => {
 				let cache = {};
 				let dict = {
 					'1100': '元',
 					'1200': '万元',
 					'1300': '亿元'
 				};

				cache.proportion = item.minExtraRate
				cache.upperProportion = item.maxExtraRate;
 				if (typeof item.extraRate === 'number' || typeof item.extraCommission === 'number') {
	 				cache.proportion = item.extraCommission || item.extraRate;
	 				cache.upperProportion = '';
 				}
 				cache.unit = dict['' + item.measureUnitFk];
 				if (index !== list.length - 1) {
	 				if (item.operator1 === 'GT' || item.operator1 === 'GE' || item.operator2 === 'GT' || item.operator2 === 'GE') {
	 					cache.operator = '-';
	 				} else {
	 					cache.operator = item.operator1 === 'LT' || item.operator1 === 'LE' ? '&lt;' : '&gt;'
	 				}
					if (item.operator1 === 'GT' || item.operator1 === 'GE') {
						cache.start = item.value1 ? '' + item.value1 : '';
						cache.end = item.value2 ? '' + item.value2 : '';
					} else {
						cache.start = item.value2 ? '' + item.value2 : '';
						cache.end = item.value1 ? '' + item.value1 : '';
					}
 				} else {
 					cache.operator = '&gt;';
					cache.start = '';
					cache.end = '' + (item.value1 || '');
 				}
 				return cache;
 			});
 		},
 		fixList: function () {
 			this.list[1].start = this.list[0].end;
  			this.list[this.list.length - 1].end = this.list[this.list.length - 2].end;
 		},
 		addRule: function () {
 			let firstCut = this.list.slice(0, this.list.length - 1);
 			let addItem = {start: '', end: '', proportion: '', operator: '-'};
 			let prevItem = firstCut.slice(-1);
 			addItem.start = prevItem[0].end;

 			this.list = firstCut.concat(addItem).concat(this.list.slice(-1));
 			this.fixList();
 		},
 		removeRule: function (index, item) {
 			this.list.$remove(item);
 			this.fixList();
 		},
 		processData: function (index, item) {
 			if (index + 2 === this.list.length) {
 				this.list[index + 1].end = item.end;
 			} else {
	 			this.list[index + 1].start = item.end;
 			}
 		}
 	}
});