
import Widget from 'static/js/widget.js';

var style = __inline('./menu.inline.less');
var tpl = __inline('./menu.tpl');

require.loadCss({
    name: 'asset-widget-menu-style',
    content: style
});

var menu = Widget.extend({
    
    init: function (data) {
		this.display(data, tpl); 
    },
    methods : {
		subShow: function (event) {
			var g = $(event.target).closest("a");
			if (!g || g.length == 0) {
				return
			}
			
			var f = g.next().get(0);
			
			if (!$(f).is(":visible")) {
				var d = $(f.parentNode.parentNode).closest("ul");
				d.find("> .open > .submenu").each(function() {
					if (this != f && !$(this.parentNode).hasClass("active")) {
						$(this).slideUp(200).parent().removeClass("open")
					}
				})
			} else {}
			
			if ($(f.parentNode.parentNode).hasClass("nav-list")) {
				return false
			}
			
			$(f).slideToggle(200).parent().toggleClass("open");
			return false
		},
		eleMenus: function(event){
		/*
			event.preventDefault();
			var query = event.target.getAttribute('href');
			var title = event.target.getAttribute('data-name');
			var prelctVal = location.href.split("/").slice(0,4);
			var rootHrefVal = '';
			for(var i=0;i<prelctVal.length;i++){
				rootHrefVal += prelctVal[i] + '/';
			}
			
			//alert(location.href +'/'+ query);
			if (history.pushState && query) {
				if (event && /\d/.test(event.button)) {            
					history.pushState({ title: title }, title, rootHrefVal + query);
				}
			}
			
			return false;
		*/
			
			event.preventDefault();
			$(event.target).parents('.nav-list').find('a').removeClass('active');
			$(event.target).addClass('active');
			var content = document.getElementById('content');
			var query = event.target.getAttribute('href');
			var name = event.target.getAttribute('data-name');
			//alert(name);
			sRouter.config({
				mode: 'history'
			}).go(query);
			
			//sRouter.go(query);
			
			
		}
    }
})

export default menu;