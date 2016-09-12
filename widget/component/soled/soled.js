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
 			return Math.floor(+this.process / 100 * this.offeringSize);
 		}
 	},
 	ready: function () {
		let Dict = {
			'1100': 1,
			'1200': 10000,
			'1300': 100000000
		};
		this.offeringSize = +this.offeringSize * Dict[this.offeringsizeUnit];
		this.$nextTick(function () {
			$('input[type="range"]', this.$el).rangeslider({
				polyfill: false,
			});
		});
 	}
});