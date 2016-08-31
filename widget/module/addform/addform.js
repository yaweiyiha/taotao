import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol';
import Star from 'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';
import formModel from 'model/formModel';

let style = __inline('./addform.inline.less');
let tpl = __inline('./addform.tpl');

require.loadCss({
    name: 'admin-widget-addform-style',
    content: style
});

var addform = Widget.extend({ 

    init : function(data){
        this.data = data;
        this.vm = this.display(data ,tpl ,'vue');
        this.bind();
        Waves.attach('button', ['waves-light']);
    },
    bind: function () {
        let me = this;
    	$(this.vm.$el).on('click' ,'.my-tabs > li', function () {
    		$(this).siblings().removeClass('active');
    		$(this).addClass('active');
            let curIndex = parseInt($(this).attr("tab-index"));
            let perIndex = curIndex ? curIndex - 1 : curIndex + 1 ;
            let curPanel = $('.panel-body[form-index="'+ curIndex +'"]');
            let perPanel = $('.panel-body[form-index="'+ perIndex +'"]');
            if(curPanel.hasClass('none')){
                perPanel.addClass('none');
                curPanel.removeClass('none');
            }else{
                curPanel.addClass('none');
                perPanel.removeClass('none');
            }
            
    	});
        $(this.vm.$el).on('click', '[data-role=addSelfEle]', function () {
            let target = $('[data-role=addSelfEleContent]');
            if (target.hasClass('none')) {
                target.removeClass('none');
            } else {
                target.addClass('none');
            }
        });

        $('input[type=radio]').on('click' , function(){
            var key = $(this).attr('data-key');
            var arr = $('.incomeComputeDay').toArray();

            arr.forEach(function(item){
                $(item).addClass('none');
            });
            $('.' + key).removeClass('none');
        })

        $('button[data-role="submit"]').on('click', function () {
            let data = {};
            let url  = '';
            let param = '';
            let inputCollections = $('.panel-body').find('[data-key]');

            for (let i = 0, len = inputCollections.length; i < len; i++) {
                let ele = $(inputCollections[i]);
                let key = ele.attr('data-key');
                let val = ele.attr('data-values') || ele.val();
                if (key) {
                    data[key] = val;
                }
            }
            url = me.data.submiturl || me.data.url;
            param = me.data.param;

            if(param){
                let params = location.href.split('?')[1].split("=");
                let key = params[0];
                let val = params[1];
                data[key] = val;
            }

            let model = new formModel();
            model.getData(url,data).then((res) => {
                window.history.back();
            });
        });

    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default addform;