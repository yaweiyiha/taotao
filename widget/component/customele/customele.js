let style = __inline('./customele.inline.less');
let tpl = __inline('./customele.tpl');

require.loadCss({
    name: 'admin-widget-customele-style',
    content: style
});

export default Vue.component('custom-ele', {
 	template: tpl,
 	props: {
 		list: {default: []},
 		disable: {default: true}
 	},
 	data: () => ({
 		output: ''
 	}),
 	methods: {
 		add: function() {
 			this.list = this.list.concat([{
 				title: '',
 				content: '',
 				sorter: this.list.length + 1
 			}]);
 		},
 		remove: function (item) {
 			this.list.$remove(item);
 		}
 	},
 	computed: {
 		output: function () {
 			return JSON.stringify(this.list);
 		}
 	}
});