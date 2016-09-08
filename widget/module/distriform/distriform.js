import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import Star from 'widget/component/star/star';
import CommType from 'widget/component/commtype/commtype';
import singledate from  'widget/component/singledate/singledate';
import Util from  'widget/util/util';
import datetime from 'widget/filter/datetime';
import commisionType from 'widget/filter/commisionType';
import applyStates from 'widget/filter/applyStates';
import InputeDialog from 'widget/classComponent/dialog/inputeDialog';
import AlertDialog from "widget/classComponent/dialog/alert"
import LadderComm from 'widget/component/laddercomm/laddercomm'

let style = __inline('./distriform.inline.less');
let tpl = __inline('./distriform.tpl');

require.loadCss({
    name: 'admin-widget-distriform-style',
    content: style
});

var distriform = Widget.extend({ 
    
    init : function(data){
        //console.log(JSON.stringify(data));

        this.vm = this.display(data ,tpl ,'vue');
        this.bind();
        this.render();
        Waves.attach('button', ['waves-float', 'waves-light']);

    },
    render : function(){

    },
    processData :function(data){

    },
    bind: function () {
      var me = this;
      let container = $(this.vm.$el);

    	$(this.vm.$el).on('click' ,'.my-tabs > li', function () {
    		$(this).siblings().removeClass('active');
    		$(this).addClass('active');
    	});

      // preview images
      $(this.vm.$el).on('change', '.lefile', function () {
        let imageContainer = $(me.vm.$el).find('.previewImage');
        if (imageContainer.size() === 0) {
          imageContainer = $('<img class="previewImage" src="" />');
          $(this).parents('.row').after(imageContainer);
        }
        me.previewImage(this, imageContainer.get(0));
      });

      //完成签约
      $(this.vm.$el).on('click' ,'[data-role=finishSigned]', function () {
        
        if (!Util.validate(container)) {
            return;
        }
        let data = new FormData();
        let files = $('.attachment', me.vm.$el)[0].files;
        let startTime = $('input[data-key="offlineStartDate"]').val();
        let endTime = $('input[data-key="offlineEndDate"]').val();
        var obj = Util.getCommTypeData($('.admin-widget-commtype'));
        
        // get commission type info
        let commTypeContainer = container.find('.admin-widget-commtype');
        let commTypeData = {};
        if (commTypeContainer.size()) {
            commTypeData = Util.getCommTypeData(commTypeContainer);
            if (commTypeData === false) {
                AlertDialog.show('请填写佣金设置内容');
                return;
            }
        }

        data.append('id', _APP_HASH.id);
        data.append('commissionType', commTypeData.commissionTypeFk);
        if(commTypeData.commissionTypeFk == 10){
            data.append('fixedCommission', (commTypeData.baseCommission));
        }else if(commTypeData.commissionTypeFk == 20){
            data.append('floatingCommission' , JSON.stringify(commTypeData.productCommissionList));
        }
        data.append('attachment', files[0]);
        data.append('offlineStartDate', startTime);
        data.append('offlineEndDate', endTime);
        $.ajax({
            url: 'agentsales/approve',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(data){
                if(data.status === 1) {
                    window.location.href = "#main/distribut/maintenance";
                }
            }
        });
      });


      //拒绝签约
      $(this.vm.$el).on('click' ,'[data-role=rejectSigned]', function () {
        InputeDialog.show({
          onConfirm: (reason) => {
            $.ajax({
                url: `${Config.host}agentsales/reject`,
                data: {
                  id: _APP_HASH.id,
                  rejectReason: reason
                },
                type: 'POST',
                success: function(data){
                  if (data.msg === 'success') {
                    window.location.href = "#main/distribut/maintenance";
                  }
                }
            });
          },
          title: "请输入拒绝原因",
          require: true
        });
      });

      $(this.vm.$el).on('click', '.attachment-view-wrapper .close-btn', function () {
        $(this).parents('.attachment-view-wrapper').hide();
      });
      
    },


    previewImage :function(file, imageContainer)
    {
          var me = this;
          var MAXWIDTH  = 260; 
          var MAXHEIGHT = 180;

          if (file.files && file.files[0])
          {
              // imageContainer.onload = function(){
              //   var rect = me.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, imageContainer.offsetWidth, imageContainer.offsetHeight);
              //   imageContainer.width  =  rect.width;
              //   imageContainer.height =  rect.height;
              //   imageContainer.style.marginLeft = '20px';
              //   imageContainer.style.marginTop = rect.top+'px';
              // }
              var reader = new FileReader();
              reader.onload = function(evt){
                imageContainer.src = evt.target.result;
                $(imageContainer).on('click', function () {
                  $(me.vm.$el).find('.attachment-view-wrapper img').attr('src', imageContainer.src);
                  $(me.vm.$el).find('.attachment-view-wrapper').show();
                });
              }
              reader.readAsDataURL(file.files[0]);
          }
    },

    clacImgZoomParam : function( maxWidth, maxHeight, width, height ){
        var param = {top:0, left:0, width:width, height:height};
        if( width>maxWidth || height>maxHeight )
        {
            rateWidth = width / maxWidth;
            rateHeight = height / maxHeight;
            
            if( rateWidth > rateHeight )
            {
                param.width =  maxWidth;
                param.height = Math.round(height / rateWidth);
            }else
            {
                param.width = Math.round(width / rateHeight);
                param.height = maxHeight;
            }
        }
        
        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
        return param;
    },
    filters : {
        datetime      : datetime ,
        commisionType : commisionType,
        applyStates   : applyStates,
    },
    methods:{
        back : () => {
            window.history.back();
        },
    	addFile : () => {
            var me = this;
            $(".lefile").click();

        }
    }
});

 

export default distriform;