import Widget from 'static/js/widget.js';
import table from 'widget/module/table/table.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dialog from 'widget/classComponent/dialog/dialog.js';

let style = __inline('./searchfilter.inline.less');
let tpl = __inline('./searchfilter.tpl');

require.loadCss({
    name: 'asset-widget-searchfilter-style',
    content: style
});

var searchfilter = Widget.extend({ 
    init : function(data){
        this.vm = this.display(data ,tpl ,'vue');
    },
    methods:{
    	filterData : function(me){
    		this.vm.addClass(me, 'active');
    	}
    }
});

export default searchfilter;