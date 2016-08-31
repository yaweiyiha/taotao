import Widget from 'static/js/widget.js';

var style = __inline('./login.inline.less');
var tpl = __inline('./login.tpl');

require.loadCss({
    name: 'admin-widget-login-style',
    content: style
});

export default new Vue({
    el: $('#main').get(0),
    template: tpl,
    data: () => ({
        username: '',
        password: '',
        code: '',
        baseVerfifyCode: 'http://qikun.bravowhale-dev.com:8118/admin/jcaptcha.jpg',
        random: ''
    }),
    computed: {
        verifyCode: function () {
            return `${this.baseVerfifyCode}?_r=${this.random}`;
        }
    },
    methods: {
        login: function () {
            console.log(this.username, this.password, this.code);
        },
        refreshCode: function () {
            this.random = Math.random();
        }
    }
});