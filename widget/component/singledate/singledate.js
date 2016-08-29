let style = __inline('./singledate.inline.less');
let tpl = __inline('./singledate.tpl');

require.loadCss({
    name: 'asset-widget-singledate-style',
    content: style
});

export default Vue.component('single-date', {
 	template: tpl,
    data: function () {
        return {
            time : '',
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
            minView: 2
        });
    }
});