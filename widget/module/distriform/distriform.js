import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import Star from 'widget/component/star/star';
import CommType from 'widget/component/commtype/commtype';


let style = __inline('./distriform.inline.less');
let tpl = __inline('./distriform.tpl');

require.loadCss({
    name: 'asset-widget-distriform-style',
    content: style
});

var distriform = Widget.extend({ 

    init : function(data){

        // console.log(data.forms);
        this.vm = this.display(data ,tpl ,'vue');
        this.bind();
        Waves.attach('button', ['waves-float', 'waves-light']);

    },
    processData :function(data){

        
        // let formData = data.forms;
        // let formlistArr = [];
        // let 
        // formData.forEach(function(item){
        //     formlistArr.push(item.formlist) ;
        // });

        // formlistArr

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