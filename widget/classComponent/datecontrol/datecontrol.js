import alertDialog from "widget/classComponent/dialog/alert.js"

var style = __inline('./datecontrol.inline.less');
var tpl = __inline('./datecontrol.tpl');


require.loadCss({
    name: 'usersys-widget-datecontrol-style',
    content: style
});

export default Vue.component('date-control', {
  
    template: tpl,
    props: ['startkey','endkey'],
    data: function () {
        return {
            beginTime : '',
            endTime : '',
            to : '至',
        }
    },
    ready: function(){
        $('.beginTime').datetimepicker({
            language : 'zh-CN',
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayBtn: true,     
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            container: '.cnt-box'
        });
        $('.endTime').datetimepicker({
            language : 'zh-CN',
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayBtn: true,     
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            container: '.cnt-box'
        });

    },
    methods:{

    },
    watch: {
        beginTime : function (){

        },
        endTime : function () {
            if(this.endTime < this.beginTime){
                alertDialog.show("起始时间不能大于结束时间。");
            }
        }
    }
});
