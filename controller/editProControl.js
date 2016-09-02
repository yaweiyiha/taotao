/**
 * main Control extend Class Contorl; 
 * pageStucture mainly composed by {form} and {table} control
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
**/
import Control from 'static/js/controller.js';

/**
 * page consists of widgets
 * @type {Object}
 */
var widgets  = {

    header: 
        { widget: 'header',data: { username : 'yaweiyihan'},container: '.header-box' },
    topbanner : 
        { widget: 'topbanner', data: {},container: '.topbanner-wrapper' },
    editform : 
        { widget: 'editform', data: {},container: '.form-wrapper' },
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
        me.getModel('productinfo', (model) => {
        model.getData(data.url, {id: _APP_HASH.id}).then((res) => {
            let dictData = {};
            $.extend(dictData, data);
            dictData.item = me.processData(res.item);
            me.getViews([me.widgets.editform], $.extend(dictData, data));
            });
        });
        // me.getViews([widgets.editform],data);

        // me.getModel('table',(model) => {
            
        //     model.getData(formData.url,formData.param).then((res) => {
        //         me.getViews([me.widgets.table], $.extend(res,formData));
        //     });
        // });

        listener.trigger('page', 'loaded', {info: 'load success'});
    }

    processData(data) {
        // todo
        return {
            issureScale: data.product.issureScale,
            arrTypeFk  : enums.arrTypeFk[data.product.arrTypeFk],
            offeringSize : data.product.offeringSize,
            expectedArr  : data.product.expectedArr,
            selfDefinedProcess : data.product.selfDefinedProcess,
            establishStatus : enums.establishStatus[data.product.establishStatus],
            riskRating : enums.riskRating[data.product.riskRating],
        }

    }
}

export default addProControl;
