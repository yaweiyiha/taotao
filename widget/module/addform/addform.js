import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol';
import Star from 'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';
import formModel from 'model/formModel';
import CommType from 'widget/component/commtype/commtype';

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
    processData :function(){
        this.saveUrl   = data.saveUrl;
        this.publicUrl = data.publicUrl;
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

        $('button[data-role="save"]').on('click',function(){

            let dataRole = $(this).attr('data-role');
            if(dataRole == 'save' || dataRole == 'republic') {

                let filters = {};
                let url  =  '';
                filters = Object.assign(filters, me.getInputFilters());
                if(filters.name == "" || filters.name == undefined){
                    //todo 保存的时候产品名字不能为空
                    //return;
                }
                filters.categoryFk = $(this).attr("pro");

                if($('.maturities').val() === '' || $('.maturities').val() === undefined){
                    filters['unitFkMaturities'] = '';
                }
                if($(".offeringSize").val() === '' || $('.maturities').val() === undefined){
                    filters['unitFkOfferingSize'] = '';
                }
                if($(".startingPrice").val() === '' || $('.maturities').val() === undefined){
                    filters['unitFkStartingPrice'] = '';
                }
                if($(".increasement").val() === '' || $('.maturities').val() === undefined ){
                    filters['unitFkIncreasement'] = '';
                }
                if($(".issureScale").val() === '' || $('.maturities').val() === undefined){
                    filters['unitFkIssureScale'] = '';
                }
                let obj  = {
                    'product' : filters,
                }
                console.log(obj);
                return;
                me.getData(me.data.saveUrl,obj).then((res)=>{
                    console.log(res);
                });
            }
           
        })

        $('button[data-role="republic"]').on('click',function () {
            validate($('body'));
        });

    },
    getData :(url,param) => {

        return new Promise(function(resolve, reject){
            var xhr = $.ajax({
                type: 'POST',
                url:  url ,
                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                data: JSON.stringify(param),
                timeout : 10000,
                cache: false,
                success: function (ret) {
                    if(ret.msg === 'success'){
                        resolve(ret);
                    }  
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    },
    getInputFilters: () => {

        let inputCollections = $('.panel-body').find('[data-key]');
        let data = {};
        for (let i = 0, len = inputCollections.length; i < len; i++) {
            let val = '';
            let ele = $(inputCollections[i]);
            let key = ele.attr('data-key');
            let isNum = ele.attr('is-num');

            if(isNum){
                val = parseInt(ele.attr('data-values')) || parseInt(ele.val()) 
                      || parseInt(ele.find("option:selected").text())
            }else{
                val = ele.attr('data-values') || ele.val() || ele.find("option:selected").text();
            }
            
            if (key && val) {
                data[key] = val;
            }
        }
        return data;
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default addform;