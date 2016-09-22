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

    topbanner : 
        { widget: 'topbanner', data: {},container: '.topbanner-wrapper' },
    form : 
        { widget: 'form', data: {},container: '.form-wrapper' },
    searchfilter : 
        { widget: 'searchfilter', data: {},container: '.form-wrapper' },
    table : 
        { widget: 'table', container: '.my-cnt-wrapper' },
};


class MainControl extends Control{

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
        let structure = `<div class="topbanner-wrapper"></div>
                         <div class="form-wrapper"></div>
                         <div class="my-cnt-wrapper"></div>`;
        this.widgets = this.createPageStructure(structure, widgets, '.cnt-box');

        me.getViews([widgets.topbanner],data.topbanner);
        me.getViews([widgets.form],data.form);
        data.filters &&  me.getViews([widgets.searchfilter],{filters: data.filters});
        
        if(data.form.showTable){
             me.getViews([me.widgets.table],data.form);
        }
        
        if(data.form.url !== '' && data.form.url !== undefined){
            me.getModel('table',(model) => {
                model.getData(data.form.url,data.form.param).then((res) => {                    
                    me.getViews([me.widgets.table], $.extend(res,data.form));
                });
            });
        }


        listener.trigger('page', 'loaded', {info: 'load success'});
    }
}

export default MainControl;
