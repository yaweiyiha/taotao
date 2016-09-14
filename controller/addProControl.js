/**
 * main Control extend Class Contorl; 
 * pageStucture mainly composed by {form} and {table} control
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
**/
import Control from 'static/js/controller.js';
import Util from 'widget/util/util';

/**
 * page consists of widgets
 * @type {Object}
 */
var widgets  = {

    header: 
        { widget: 'header',data: { username : 'yaweiyihan'},container: '.header-box' },
    topbanner : 
        { widget: 'topbanner', data: {},container: '.topbanner-wrapper' },
    addform : 
        { widget: 'addform', data: {},container: '.form-wrapper' },
    menu : 
        { widget: 'menu', container: '.menu-box' },
    backtotop : 
        { widget: 'backtotop', container: '.form-wrapper' },
    footer : 
        { widget: 'footer', container: '.footer-box' },
};


class addProControl extends Control{

    constructor(data){
        super(data);
    }
    /**
     * data from router
     * @param  {object} data
     * @return void
     */
    init(data){

        let structure = `<div class="topbanner-wrapper"></div>
                         <div class="form-wrapper" style="padding: 0"></div>
                         <div class="my-cnt-wrapper"></div>`;
        var me = this;
        this.widgets = this.createPageStructure(structure, widgets ,'.cnt-box');

        /**
         * has no data ,can render directly
         */
        me.getViews([widgets.header,widgets.backtotop,widgets.footer]);
        /**
         * render with widget's own data
         */
        me.getViews([widgets.menu],menusConfig);
        me.getViews([widgets.topbanner],data.topbanner);
        // me.getViews([widgets.addform],data);

        if( data.url !== '' &&  data.url !== undefined){
            let param = _APP_HASH.id;
            let url = Config.host + data.url + '?id=' + param;
            if (/\/(draftedit)|(detail)$/.test(_APP_HASH._uri_)) {
                url = Config.host + data.url + '/' + param;
            }

            me.getModel('distri',(model) => {            
                model.getData(url).then((res) => {

                    if(data.useProcessData){
                        let dictData = {};
                        dictData.item = $.extend(res.item, Util.processData(res.item));
                        me.getViews([me.widgets.addform], $.extend(dictData, data));
                    } else {
                        me.getViews([me.widgets.addform], $.extend(res,data));
                    }
                });
            });
        }else{
            me.getViews([widgets.addform],data);
        }

        // me.getModel('table',(model) => {
            
        //     model.getData(formData.url,formData.param).then((res) => {
        //         me.getViews([me.widgets.table], $.extend(res,formData));
        //     });
        // });

        listener.trigger('page', 'loaded', {info: 'load success'});
    }
}

export default addProControl;
