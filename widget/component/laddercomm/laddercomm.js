let style = __inline('./laddercomm.inline.less');
let tpl = __inline('./laddercomm.tpl');

require.loadCss({
    name: 'asset-widget-laddercomm-style',
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
 		list: {
 			default: [{
	 			start: '',
	 			end: '',
	 			proportion: ''
	 		}, {
	 			start: '',
	 			end: '',
	 			proportion: ''
	 		}]
 		}
 	},
 	data: () => ({
 	}),
 	methods: {
 		fixList: function () {
 			this.list[1].start = this.list[0].end;
  			this.list[this.list.length - 1].end = this.list[this.list.length - 2].end;
 		},
 		addRule: function () {
 			this.list = this.list.slice(0, this.list.length - 1).concat([
 				{start: '', end: '', proportion: ''}
 			]).concat(this.list.slice(-1));
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