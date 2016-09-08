/**
 * 此处需要声明 require.async所有的可能值
 * @require.async admin:controller/mainControl.js
 * @require.async admin:controller/addProControl.js
 * @require.async admin:controller/editProControl.js
 * @require.async admin:controller/distriControl.js
 * @require.async admin:controller/commsetControl.js
 * @require.async asset:controller/loginControl.js
 * @require.async asset:controller/validateProControl.js
 */

import Url from 'widget/util/url.js'

class Router {
    
    constructor(){
        this.DEFUALT_PAGE = 'main';
    }

    init() {
        var me = this;
        this.navigation();

        listener.on('page', 'reload', function() {
            me.navigation();
        });

        window.addEventListener('hashchange', function () {
            listener.trigger('hash', 'change');
            me.navigation();
        }, false);
        window.addEventListener('popstate', function () {
            listener.trigger('hash', 'change');
            me.navigation();
        }, false);
    }

    navigation() {
        let me = this;
        let uriParams = Url.getUriParams();
        // let params = Url.getParams();
        let hash = uriParams.shift() || this.DEFUALT_PAGE;

        let defaultPage = '';
        //console.log(JSON.stringify(_permissions));
        let arrPermissions = _permissions.split(',');
        
        if($.inArray('product:list',arrPermissions) != -1){
            defaultPage = 'product/maintenance';
        }else if($.inArray('agentsales:list',arrPermissions) != -1){
            defaultPage = 'distribut/maintenance';
        }

        let page = uriParams.join('/') || defaultPage;
        //console.log(page);

        window._APP_HASH = Url.urlToJSON();
        window._APP_HASH._uri_ = page;
        window._APP_HASH._page_ = hash;
        let configData = urlConfig[page] || {};
        configData.options = configData.options || {};
        configData.options.disable = configData.options.disable || false;
        console.log(configData.options);
        
        let path = `admin:controller/${hash}Control.js`;
        listener.trigger('page', 'change');
        
        require.async(path, function (controller) {
            new controller(configData);
        });
    }
}

// class Router {
	
// 	init(){
// 		var me = this;
// 		if (window.history.pushState) {
// 			/*window.addEventListener("popstate", function() {
// 				me.stateTrigger();															
// 			});*/

// 			// 默认载入
// 			me.stateTrigger();
// 		}
// 	}
	
// 	stateTrigger(){
// 		let me = this;
// 		var query = location.href.split("/").slice(3);
// 		var pageHrefVal = '';
// 		for(var i=0;i<query.length;i++){
// 			pageHrefVal = pageHrefVal +'/'+ query[i];
// 		}
// 		if(pageHrefVal == '/'){
// 			history.replaceState(null, document.title, location.href+'index.html');
// 			$('#loading').hide();
// 		}else{
// 			$('#loading').hide();
			
// 			sRouter.config({
// 				mode: 'history'
// 			}).listen();
// 		}
		
// 		me.navigation();
// 	}
	
// 	navigation() {
//         let page = Url.getPage() || '';
//         let configData = urlConfig[page] || {};
//         let path = `admin:controller/mainControl.js`;
        
//         require.async(path, function (controller) {
//             new controller(configData);
//         });
//     }
// };
