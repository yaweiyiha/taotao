/**
 * main Control extend Class Contorl; 
 * pageStucture mainly composed by {form} and {table} control
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
**/
import Control from 'static/js/controller.js';
import mainPageStructure  from 'config/pageStructure.js';
import Util from 'widget/util/util'
/**
 * mainPage own css
 */
var style = __inline('static/css/page/main-page.inline.less');

require.loadCss({
    name: 'admin-main-page-style',
    content: style
});

/**
 * page consists of widgets
 * @type {Object}
 */
var widgets  = {

    header: 
        { widget: 'header',data: { username : 'yaweiyihan'},container: '.header-box' },
    topbanner : 
        { widget: 'topbanner', data: {},container: '.form-wrapper' },
    distriform : 
        { widget: 'distriform', data: {},container: '.form-wrapper' },
    menu : 
        { widget: 'menu', container: '.menu-box' },
    backtotop : 
        { widget: 'backtotop', container: '.form-wrapper'},
    footer : 
        { widget: 'footer', container: '.footer-box'},
};


class distriControl extends Control{

    constructor(data){
        super(data);
    }
    /**
     * data from router
     * @param  {object} data
     * @return void
     */
    init(data){
        var me = this;
        let structure = `<div class="form-wrapper" style="padding: 0"></div>
                         <div class="my-cnt-wrapper"></div>`;
        
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
        // 
        if( data.url !== '' &&  data.url !== undefined){
            let url =  `${Config.host}${data.url}?id=${_APP_HASH.id}`;
            me.getModel('distri', (model) => {
            
            model.getData(url).then((res) => {
                let dictData = {};
                dictData.item = $.extend(res.item, me.processData(res.item));
                me.getViews([me.widgets.distriform], $.extend(dictData,data));
                });
            });
        }else{
            me.getViews([widgets.distriform],data);
        }


        listener.trigger('page', 'loaded', {info: 'load success'});
    }

    processData (data) {
        let res = Util.flatData(data);

        return res;
    }
}

export default distriControl;
