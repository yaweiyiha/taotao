import Widget from 'static/js/widget.js';
import addProDialog from 'widget/classComponent/dialog/addProDialog.js';

let style = __inline('./topbanner.inline.less');
let tpl = __inline('./topbanner.tpl');

require.loadCss({
    name: 'admin-widget-topbanner-style',
    content: style
});

var topbanner = Widget.extend({ 
    init : function(data){

        var vm = this.display(data ,tpl ,'vue');
        //console.log(JSON.stringify(data.subFun));
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

        let res  = this.processData(data);
        arrPermissions = _permissions.split(',');
        if(res.subFun){
            for(var i=0; i<res.subFun.length; i++){
                if(res.subFun[i].mark){
                    if($.inArray(res.subFun[i].mark,arrPermissions) != -1){
                        //console.log($.inArray(res.subFun[i].mark,arrPermissions));
                    }else{
                        res.subFun.remove(res.subFun[i]);
                    }
                }
            } 
        }

        //数据展示
        var vm = this.display(res ,tpl ,'vue');

        this.render();
        this.bind();
    },
    processData :function (data = {}){
        this.data = data;
        return this.data; 
    },
    render :function(){
        //console.log(JSON.stringify(this.data));
        if(this.data.subFun){
            if(!(this.data.subFun.length)){
                $('.spliter').hide();
            }
        }
        if($.inArray('product:draft',arrPermissions) != -1){
            //console.log($.inArray('product:draft',arrPermissions));
        }else{
            $('.spliter').hide();
            $('.draft').remove();
        }
        
    },
    bind : function(){
    	$('.sub-func [data-role="addProduct"]').on('click', function () {
            addProDialog.show();
        });
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default topbanner;