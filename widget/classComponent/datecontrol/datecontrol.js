import alertDialog from "widget/classComponent/dialog/alert.js"

var style = __inline('./datecontrol.inline.less');
var tpl = __inline('./datecontrol.tpl');


require.loadCss({
    name: 'usersys-widget-datecontrol-style',
    content: style
});

export default Vue.component('date-control', {
  
    template: tpl,
    props: {
        startkey: {default: ''},
        endkey: {default: ''},
        rangeLimit: {default: -1},
        validator: {default: ''},
        startTime: {default: -1},
        endTime: {default: -1},
    },
    data: function () {
        return {
            to : '至',
        }
    },
    computed: {
        beginTime: function () {
            return this.toDateString(this.startTime);
        },
        endTime: function () {
            return this.toDateString(this.startTime);
        }
    },
    ready: function(){
        $('.beginTime', this.$el).datetimepicker({
            language : 'zh-CN',
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayBtn: true,     
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            container: '.cnt-box',
        });
        $('.endTime', this.$el).datetimepicker({
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
        validate: function (limit) {
            let startTimestamp = Date.parse(this.beginTime);
            let endTimestamp = Date.parse(this.endTime);
            if (limit > -1) {
                if (endTimestamp > startTimestamp + limit * 24 * 60 * 60 * 1000) {
                    this.endTime = '';
                    alertDialog.show(`时间范围应小于${limit}天`);
                }
            }
        },
        toDateString: function (timestamp) {
            timestamp = +timestamp;
            if (timestamp < 0) {
                return ''
            } else {
                let d = new Date(timestamp);
                let year = d.getFullYear();
                let month = d.getMonth() + 1;
                let day = d.getDate();

                month = month < 10 ? '0' + month : month;
                day = day < 10 ? '0' + day : day;

                return [year, month, day].join('-');
            }
        }
    },
    watch: {
        beginTime : function (){
            this.validate(this.rangeLimit);
        },
        endTime : function () {
            this.validate(this.rangeLimit);
            if(Date.parse(this.endTime) < Date.parse(this.beginTime)){
                this.endTime = '';
                alertDialog.show("起始时间不能大于结束时间。");
            }
        }
    }
});
