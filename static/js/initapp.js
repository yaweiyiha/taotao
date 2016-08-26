import mainPageStructure  from 'config/pageStructure.js';
import Control from 'static/js/controller.js';

var style = __inline('/static/css/page/main-page.inline.less');

require.loadCss({
    name: 'asset-main-page-style',
    content: style
});

var widgets  = {

    header: 
        { widget: 'header',data: { username : 'yaweiyihan'},container: '.header-box' },
    menu : 
        { widget: 'menu', container: '.menu-box' },
    backtotop : 
        { widget: 'backtotop', container: '.cnt-box'},
    footer : 
        { widget: 'footer', container: '.footer-box'},
};
var cc = new Control();
widgets = cc.createPageStructure(mainPageStructure, widgets);

cc.getViews([widgets.header,widgets.backtotop,widgets.footer]);
cc.getViews([widgets.menu],menusConfig);
