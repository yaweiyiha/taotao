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
 		readonly: {
 			default: false
 		},
 		originList: {
 			default: () => [{
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
		}
 	},
 	data: () => ({
 		list: [
		    {
		        start: '',
		        end: '',
		        proportion: ''
		    }, {
		        start: '',
		        end: '',
		        proportion: ''
		    }
		]
 	}),
 	ready: function () {
 		this.list = this.revertData();
 	},
 	computed: {
 		dataCollect: function () {
 			let cache = this.list.map((item, index, list) => {
 				let cache = {};
 				let dict = {
 					'元': 1100,
 					'万元': 1200,
 					'亿元': 1300
 				};
 				cache.extraCommission = item.proportion;
 				cache.measureUnitFk = this.unit ? dict[this.unit] : dict[item.unit];
 				cache.sorter = index;
 				if (index === 0) {
 					cache.value1 = +item.end;
 					cache.operator1 = 'LE';
 					cache.value2 = null;
 					cache.operator2 = null;
 				} else if (index === (list.length - 1)) {
 					cache.value1 = +item.end;
 					cache.operator1 = 'GT';
 					cache.value2 = null;
 					cache.operator2 = null;
 				} else {
 					cache.value1 = +item.start;
 					cache.operator1 = 'GT';
 					cache.value2 = +item.start;
 					cache.operator2 = 'LT';
 				}
 				return cache;
 			});

 			return JSON.stringify(cache);
 		}
 	},
 	methods: {
 		revertData: function () {
 			return this.originList.map((item, index, list) => {
 				let cache = {};
 				let dict = {
 					'1100': '元',
 					'1200': '万元',
 					'1300': '亿元'
 				};
 				cache.proportion = item.extraCommission;
 				cache.unit = dict['' + item.measureUnitFk];
 				if (index === 0 || index === (list.length - 1)) {
 					cache.start = '';
 					cache.end = item.value1;
 				} else {
 					cache.start = item.value1;
 					cache.end = item.value2;
 				}

 				return cache;
 			});
 		},
 		fixList: function () {
 			this.list[1].start = this.list[0].end;
  			this.list[this.list.length - 1].end = this.list[this.list.length - 2].end;
 		},
 		addRule: function () {
 			console.log(this.list.slice(0, this.list.length - 1).length);
 			this.list = this.list.slice(0, this.list.length - 1).concat([
 				{start: '', end: '', proportion: ''}
 			]).concat([this.list.slice(-1)]);
 			console.log(this.list.length);
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
 			this.$log('list');
 		}
 	}
});