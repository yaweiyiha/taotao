import Widget from 'static/js/widget.js';

var style = __inline('./home.inline.less');
var tpl = __inline('./home.tpl');

require.loadCss({
    name: 'admin-widget-home-style',
    content: style
});

var home = Widget.extend({
    
    init: function (data) {
		//console.log(JSON.stringify(data));
        var vm = this.display(data, tpl);
        
    }
	
})

export default home;