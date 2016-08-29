import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import Star from 'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';

let style = __inline('./addform.inline.less');
let tpl = __inline('./addform.tpl');

require.loadCss({
    name: 'asset-widget-addform-style',
    content: style
});

var addform = Widget.extend({ 

    init : function(data){
        this.vm = this.display(data ,tpl ,'vue');
        this.bind();
    },
    bind: function () {
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
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default addform;