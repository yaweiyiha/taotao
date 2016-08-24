let style = __inline('./star.inline.less');
let tpl = __inline('./star.tpl');

require.loadCss({
    name: 'asset-widget-star-style',
    content: style
});

export default Vue.component('star', {
 	template: tpl,
 	props: {
 		total: {
 			type: Number,
 			default: 5
 		}
 	},
 	data: () => ({
 		score: -1,
 		stars: new Array(5).fill({
 			selected: true
 		})
 	}),
 	methods: {
 		mouseOver: function (curIndex) {
 			this.stars = new Array(curIndex + 1).fill({
	 			selected: true
	 		}).concat(new Array(4 - curIndex).fill({
	 			selected: false
	 		}));

	 		console.log(this.stars);
 		}
 	},
 	computed: {
 	}
});