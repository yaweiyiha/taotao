import Widget from 'static/js/widget.js';

var style = __inline('./login.inline.less');
var tpl = __inline('./login.tpl');

require.loadCss({
    name: 'asset-widget-login-style',
    content: style
});

var login = Widget.extend({
    
    init: function () {
    	let data = {
    		username: '',
    		password: '',
    		code: '',
    		baseVerfifyCode: 'http://qikun.bravowhale-dev.com:8118/admin/jcaptcha.jpg',
    		random: ''
    	};

        var vm = this.display(data, tpl);
        
    },
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

export default login;