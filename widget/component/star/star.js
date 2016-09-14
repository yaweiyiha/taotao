let style = __inline('./star.inline.less');
let tpl = __inline('./star.tpl');

require.loadCss({
    name: 'admin-widget-star-style',
    content: style
});

export default Vue.component('star', {
 	template: tpl,
 	props: {
 		score: {default: 0},
 		disable: {default: false}
 	},
 	data: () => ({
 		stars: [{selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}]
 	}),
 	ready: function () {
		this.stars.forEach((star, index) => {
			if (this.score > index) {
				star.selected = true;
			} else {
				star.selected = false;
			}
		});
 	},
 	watch: {
 		score: function (val) {
 			this.stars.forEach((star, index) => {
 				if (val > index) {
 					star.selected = true;
 				} else {
 					star.selected = false;
 				}
 			});
 		}
 	},
 	methods: {
 		selectStar: function (curIndex) {
 			if (!this.disable) {
	 			this.score = curIndex + 1;
 			}
 		},
 		clear: function () {
 			if (!this.disable) {
 				this.score = 0;
 			}
 		}
 	},
 	computed: {
 	}
});