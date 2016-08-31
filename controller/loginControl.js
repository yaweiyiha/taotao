/**
 * main Control extend Class Contorl; 
 * pageStucture mainly composed by {form} and {table} control
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 * @require.async asset:widget/module/login/login.js
**/
import Control from 'static/js/controller.js';


/**
 * page consists of widgets
 * @type {Object}
 */
var widgets  = {

    login : 
        { widget: 'login' },
};


class LoginControl extends Control{

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

        this.widgets = this.createPageStructure('', widgets, '#main');
        console.log(this.widgets);
        me.getViews([widgets.login]);

        listener.trigger('page', 'loaded', {info: 'load success'});
    }
}

export default LoginControl;
