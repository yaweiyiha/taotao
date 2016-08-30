import mainPageStructure  from 'config/pageStructure.js';
import Control from 'static/js/controller.js';
import AlertDialog from 'widget/classComponent/dialog/alert'

var style = __inline('/static/css/page/main-page.inline.less');

require.loadCss({
    name: 'asset-main-page-style',
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
if (URL_MODE === 'pushstate') {
    let layer = document.querySelector('body');
    layer.addEventListener('click', function (e) {
        let tagName = e.target.tagName;
        let ele = $(e.target);
        if (tagName === 'A' && ele.attr('href') !== '' && /^#/.test(ele.attr('href')) ) {
            let link = ele.attr('href');
            link = link.replace(/^#/ , '/');
            window.history.pushState({},'',link);
            listener.trigger('page', 'reload');
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);
}

let validate = (layer) => {
    let flag = true;

    let eles = layer.find('[data-valide]');
    eles.toArray().forEach((item) => {
        item = $(item);
        let validter = item.attr('data-valide');
        validter = String.prototype.split.call(validter, ',');
        let parentNode = item.parents('.input-wrapper');
        if ($.inArray('required', validter) > -1) {
            parentNode.find('.tips').remove();
            if (item.val() === '') {
                flag = false;
                parentNode.append(`<p class="tips">${item.attr('data-des')}必填</p>`);
            }
        }
    });

    if (flag === false) {
        AlertDialog.show('填写不完整，请检查必填字段');
    }
}

// republic button click
$('body').on('click', '[data-role=republic]', function () {
    validate($('body'));
});


