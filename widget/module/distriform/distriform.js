import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import Star from 'widget/component/star/star';
import CommType from 'widget/component/commtype/commtype';
import singledate from  'widget/component/singledate/singledate';

let style = __inline('./distriform.inline.less');
let tpl = __inline('./distriform.tpl');

require.loadCss({
    name: 'admin-widget-distriform-style',
    content: style
});

var distriform = Widget.extend({ 

    init : function(data){

        // console.log(data.forms);
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

      $(this.vm.$el).on('click' ,'[data-role=finishSigned]', function () {
        let data = new FormData();
        // add attachment file data
        let files = $('.attachment', me.vm.$el)[0].files;
        // console.log(files);

        data.append('id', _APP_HASH.id);
        data.append('commissionType', 10);
        data.append('fixedCommission', 0.02);
        data.append('attachment', files[0]);
        data.append('offlineStartDate', '2016-08-19');
        data.append('offlineEndDate', '2016-08-29');

        $.ajax({
            url: 'agentsales/approve',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(data){
                if(data.mgs === 'success') {
                    history.back();
                }
            }
        });
      });

      $(this.vm.$el).on('click', '.attachment-view-wrapper .close-btn', function () {
        $(this).parents('.attachment-view-wrapper').hide();
      });

      $(this.vm.$el).on('click' ,'[data-role=rejectSigned]', function () {
        $.ajax({
            url: 'agentsales/reject',
            data: {
              id: _APP_HASH.id,
              rejectReason: 'just for test'
            },
            type: 'POST',
            success: function(data){
              if (data.msg === 'success') {
                history.back();
              }
            }
        });
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
          else //兼容IE
          {
            // var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            // file.select();
            // var src = document.selection.createRange().text;
            // div.innerHTML = '<img id=imghead>';
            // var img = document.getElementById('imghead');
            // img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            // var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            // status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            // div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
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