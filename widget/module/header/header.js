import Widget from 'static/js/widget.js';
import dialog from 'widget/classComponent/dialog/dialog.js';
import alertDialog from 'widget/classComponent/dialog/alert.js';

var style = __inline('./header.inline.less');
var tpl = __inline('./header.tpl');

require.loadCss({
    name: 'usersys-widget-header-style',
    content: style
});

var header = Widget.extend({

    data : {
        showMenu : false,
    },
    ready: function(){
    },
    init: function (res) {
        let data = $.extend(this.data,res);
        var vm = this.display(data, tpl,'vue');

        $('body').on('click', () => {
            this.vm.$set('showMenu', false);
        });
    },
    methods : {
        logout: function (){
            window.location.href ='/admin/logout';
        },
        changePwd :function (){

            var setting = {
                type : 'pwd',
                title : '修改密码',
                buttons : [
                    {'name' : '取消' , 'type' : 'confirm' },
                    {'name' : '确认' , 'type' : 'cancel' },
                ],
                onConfirm: (list) => {
                    
                }
            }
            dialog.show(setting);
        },
        changeLocale :() => {

            $.ajax({
                type : "post",  
                url : "/admin/changeLanguage",  
                data : {language: 'zh_CN'},  
                dataType : 'json',
                cache : false,
                success : function(data) {   
                    if(data.status=='ok') {
                        //setCookie("admin.LOCALE", dom.id, null);
                        window.location.reload(); 
                    } else {
                        alertDialog.show("语言切换失败");
                    }
                },
                error : function(data) {  
                    alertDialog.show("语言切换失败");
                    lock = false;
                } 
            }); 
        }
    }
})

export default header;