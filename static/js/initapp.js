import mainPageStructure  from 'config/pageStructure.js';
import Control from 'static/js/controller.js';
import Util from 'widget/util/util'

var style = __inline('static/css/page/main-page.inline.less');

require.loadCss({
    name: 'admin-main-page-style',
    content: style
});

var widgets  = {

    header: 
        { widget: 'header',data: { username : 'yaweiyihan'}, container: '.header-box' },
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


// delegate system navigate
let layer = document.querySelector('body');
layer.addEventListener('click', function (e) {
    let tagName = e.target.tagName;
    let ele = $(e.target);

    if (tagName === 'A' && ele.attr('href') !== '' && /^#/.test(ele.attr('href')) ) {
        let link = ele.attr('href');
        link = link.replace(/^#/ , '');

        if (URL_MODE === 'pushstate') {
            if (ROOT) {
                link = '/' + ROOT + '/' + link;
            } else {
                link = '/' + link;
            }
            window.history.pushState({},'',link);
            listener.trigger('page', 'reload');
            listener.trigger('hash', 'change');
        } else {
            if (ROOT) {
                link = '#' + ROOT + '/' + link;
            } else {
                link = '#' + link;
            }
            location.hash = link;
        }
        e.preventDefault();
        e.stopPropagation();
    }
}, true);

let getEnums = () => {

     Util.getData(`${Config.host}product/maintenance/enums` ,'', 'GET').then((res) => {
        window.enums = $.extend(window.enums, res.item);
    });
}
let getBanks = () => {

     Util.getData('publisher/constants','','GET').then((data) => {
        if(data.status === 1){
             window.banks = $.extend(window.banks, data.item.banks);
        }
       
     })
}

getEnums();
getBanks();
