import Widget from 'static/js/widget.js';
import table from 'widget/module/table/table.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dialog from 'widget/classComponent/dialog/dialog.js';

let style = __inline('./searchfilter.inline.less');
let tpl = __inline('./searchfilter.tpl');

require.loadCss({
    name: 'admin-widget-searchfilter-style',
    content: style
});

var searchfilter = Widget.extend({ 
    init : function(data){
        //console.log(JSON.stringify(data.filters));
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

        var arrPermissions = _permissions.split(',');
        
        if(data.filters){
            for(var i=0; i<data.filters.length; i++){
                if(data.filters[i].mark){
                    if($.inArray(data.filters[i].mark,arrPermissions) != -1){
                        //console.log($.inArray(data.filters[i].mark,arrPermissions));
                    }else{
                        data.filters.remove(data.filters[i]);
                    }
                }
            }  
        }

        //展示数据
        this.vm = this.display(data ,tpl ,'vue');

        this.bind();
    },
    bind: function () {
        $(this.vm.$el).on('click', '.option-item', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    },
    methods:{
    }
});

export default searchfilter;