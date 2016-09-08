import datetime from 'widget/filter/datetime.js';

let style = __inline('./singledate.inline.less');
let tpl = __inline('./singledate.tpl');

require.loadCss({
    name: 'admin-widget-singledate-style',
    content: style
});

export default Vue.component('single-date', {
 	template: tpl,
    props: ['key', 'placeholder'],
    props: {
        key: {default: ''},
        placeholder: {default: ''},
        disable: {default: false},
        timestamp: {default: -1},
        enddatepurchase : {default: ''},
        opendaydesc     : {default:  ''},
        startdatepurchase : {default: ''},
    },
    data: function () {
    },
    computed: {
        time: function () {
            if(this.timestamp){
                return this.toDateString(this.timestamp);
            }
            
        },
        dataKey: function(){
            return this.enddatepurchase  || this.opendaydesc  || this.startdatepurchase
        }
    },
    methods: {
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
    watch : {
        dataKey : function(){

        }
    },
    ready: function(){
        $('.time', this.$el).datetimepicker({
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
    filters : {
        datetime : datetime ,
    },
});