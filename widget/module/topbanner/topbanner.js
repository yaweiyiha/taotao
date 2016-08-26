import Widget from 'static/js/widget.js';
import addProDialog from 'widget/classComponent/dialog/addProDialog.js';

let style = __inline('./topbanner.inline.less');
let tpl = __inline('./topbanner.tpl');

require.loadCss({
    name: 'asset-widget-topbanner-style',
    content: style
});

var topbanner = Widget.extend({ 

    init : function(data){
    	console.log(data);
        var vm = this.display(data ,tpl ,'vue');
        this.bind();
    },
    bind : function(){
    	$('.sub-func [data-role="addProduct"]').on('click', function () {
            addProDialog.show();
        });
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default topbanner;