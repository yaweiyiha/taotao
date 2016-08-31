import Widget from 'static/js/widget.js';

let style = __inline('./footer.inline.less');
let tpl = __inline('./footer.tpl');

require.loadCss({
    name: 'admin-widget-footer-style',
    content: style
});

var footer = Widget.extend({ 

    init : function(){
        var vm = this.display('' ,tpl ,'vue');
    },
    methods:{
    	
    }
});

export default footer;