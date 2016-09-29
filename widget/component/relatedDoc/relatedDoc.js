let style = __inline('./relatedDoc.inline.less');
let tpl = __inline('./relatedDoc.tpl');

require.loadCss({
    name: 'admin-widget-relatedDoc-style',
    content: style
});

export default Vue.component('relateddoc', {
 	template: tpl,
 	props: {
 		list: {default: []},
 		disable: {default: false},
 		intrtype: {default: ''},
 		panelname : {default : ''},
 		imgatttype: {default: ''},
 		videoatttype : {default : ''},
 		richatttype : {default : ''},
 		relateatttype: {default : ''},
 	},
 	data: () => ({
 		output: ''
 	}),
 	methods: {
 		add: function() {
 			/*this.list = this.list.concat([{
 				title: '',
 				content: '',
 				isValid: 1,
 				sorter: this.list.length + 1
 			}]);*/
 			var relatedocTpl = document.getElementById("relatedocTpl").innerHTML;
 			var eleDiv = document.createElement("div");
 			eleDiv.className = 'relatedocItem';
 			eleDiv.innerHTML = relatedocTpl;
 			
 			document.getElementById("relatedocList").appendChild(eleDiv);
 		}

 		/*remove: function (item) {
 			this.list.$remove(item);
 		},
 		up: function(event){
 			let pRow = $(event.target).parents('.relatedocItem');
			pRow.prev().before(pRow);
 		},
 		down: function(event){
			let pRow = $(event.target).parents('.relatedocItem');
			pRow.next().after(pRow);
 		}*/
 	},
 	computed: {
 		output: function () {
 			return JSON.stringify(this.list);
 		}
 	}
});