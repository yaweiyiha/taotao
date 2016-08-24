import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import Star from 'widget/component/star/star';

let style = __inline('./addform.inline.less');
let tpl = __inline('./addform.tpl');

require.loadCss({
    name: 'asset-widget-addform-style',
    content: style
});

var addform = Widget.extend({ 

    init : function(data){
        var vm = this.display(data ,tpl ,'vue');
    },
    methods:{
    	
    }
});

export default addform;