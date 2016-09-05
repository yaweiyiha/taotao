
import Widget from 'static/js/widget.js';

var style = __inline('./menu.inline.less');
var tpl = __inline('./menu.tpl');

require.loadCss({
    name: 'admin-widget-menu-style',
    content: style
});

var menu = Widget.extend({
    
    init: function (data) {
    	//console.log(JSON.stringify(data.menus));

    	//索引
		Array.prototype.indexOf = function(val) { 
			for (var i = 0; i < this.length; i++) { 
				if (this[i] == val) return i; 
			} 
			return -1; 
		};

		//删除
		Array.prototype.remove = function(val) { 
			var index = this.indexOf(val); 
			if (index > -1) { 
				this.splice(index, 1); 
			} 
		};

    	this.arrPermissions = [];
        if (typeof _permissions !== 'undefined') {
            this.arrPermissions = _permissions.split(',');
        }
    	
    	if(data.menus){
    		for(var i=0;i<data.menus.length;i++){
    			if(data.menus[i].level2List){
		    		for(var j=data.menus[i].level2List.length-1; j>=0; j--){
		    			if(data.menus[i].level2List[j].mark){
		    				if($.inArray(data.menus[i].level2List[j].mark,this.arrPermissions) != -1){
								//console.log($.inArray(data.menus[i].level2List[j].mark,arrPermissions));
							}else{
								data.menus[i].level2List.remove(data.menus[i].level2List[j]);
							}
		    			}
		    		}
		    	}
	    	}
    	}

    	//展示菜单栏
		this.display(data, tpl); 
	    Waves.attach('.waves', ['waves-block', 'waves-classic']);
		Waves.init();
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
			}
			
			if ($(f.parentNode.parentNode).hasClass("nav-list")) {
				return false
			}
			
			$(f).slideToggle(200).parent().toggleClass("open");
			return false
		},
		eleMenus: function(event){
			event.preventDefault();
			$(event.target).parents('.nav-list').find('a').removeClass('active');
			$(event.target).addClass('active');
			var query = event.target.getAttribute('href');
			var name = event.target.getAttribute('data-name');
			location.href = query;
			// sRouter.config({
			// 	mode: 'history'
			// }).go(query);		
		}
    }
})

export default menu;