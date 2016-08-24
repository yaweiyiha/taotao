import Widget from 'static/js/widget.js';

var style = __inline('./backtotop.inline.less');
var tpl = __inline('./backtotop.tpl');

require.loadCss({
    name: 'usersys-widget-backtotop-style',
    content: style
});

var backtotop = Widget.extend({  
    init : function(){

        var vm = this.display('' ,tpl ,'vue');
        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > 500) {
                $('#scrollUp').show();
            } else {
                $('#scrollUp').hide();
            }
        });
    },
    methods:{
       back :function(){
            $('html, body').animate({scrollTop:0}, 'fast');
       }
    }
});

export default backtotop;