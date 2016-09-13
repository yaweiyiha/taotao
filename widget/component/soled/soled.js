let style = __inline('./soled.inline.less');
let tpl = __inline('./soled.tpl');

require.loadCss({
    name: 'admin-widget-soled-style',
    content: style
});

export default Vue.component('soled', {
 	template: tpl,
 	props: {
 		disable: {default: false},
 		offeringSize: {default: 0},
 		offeringsizeUnit: {default: '1100'},
 		process: {default: 0},
 	},
 	computed: {
 		soled: function () {
 			return Math.floor(+this.process / 100 * this.offeringSizeComputed);
 		},
 		offeringSizeComputed: function () {
 			return +this.offeringSize * this.Dict[this.offeringsizeUnit];
 		}
 	},
 	data: () => ({
 		Dict: {
			'1100': 1,
			'1200': 10000,
			'1300': 100000000
		}
 	}),
 	ready: function () {
 		let me = this;

		this.$nextTick(function () {
			$('input[type="range"]', this.$el).rangeslider({
				polyfill: false,
			});
		});

		// 可销售份额联动
		if ($('[data-key=offeringSize]').size()) {
			$('[data-key=offeringSize]').on('change', function () {
				me.offeringSize = $(this).val();
			});
		}
		// 可销售份额单位联动
		if ($('[data-key=unitFkOfferingSize]').size()) {
			$('[data-key=unitFkOfferingSize]').on('change', function () {
				me.offeringsizeUnit = $(this).val();
			});
		}
 	}
});