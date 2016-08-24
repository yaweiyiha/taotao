import Widget from 'static/js/widget.js';

var style = __inline('./login.inline.less');
var tpl = __inline('./login.tpl');

require.loadCss({
    name: 'asset-widget-login-style',
    content: style
});

var login = Widget.extend({
    
    init: function (data) {
		console.log(JSON.stringify(data));
        var vm = this.display(data, tpl);
        
    }
	
})

export default login;