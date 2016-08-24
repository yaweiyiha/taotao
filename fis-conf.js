/**
 * @file fis config file
 */

/*******************************************
set namespace ; require file by modular way 
********************************************/

fis.config.set('namespace', 'asset');

/************************************
set domain to make sure that you 
can get back files from corect position
*************************************/


// fis.match('*.{js,css,png,gif}', {
//     domain:  '/xuxu/' +  fis.get('namespace')
// });

/*******************************************
deploy file to remote machine 
demo : fis3 relase xuxu -w
********************************************/

fis.media('xuxu').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://localhost/receiver.php',
        to: 'D:/apache-tomcat-7.0.70/webapps/ROOT/xuxu/asset'
    }),
  
});

// fis.match('*.{js,css,png,gif}', {
//     release: '/static/$0',
//     url: '/xuxu/asset/$0'
// })


/**********************
     parse files 
**********************/

fis.match('*.tmpl', {
    rExt: '.js',
    parser: fis.plugin('bdtmpl') 
});

fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less')
});

/**********************
     optimize files 
**********************/

// fis.match('*.{css,less}', {
//     optimizer: fis.plugin('clean-css')
// });
// fis.match('*.js', {
//     optimizer: fis.plugin('uglify-js')
// });
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor', {
      type : 'pngquant'
    })
});


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
fis.config.set('settings.spriter.csssprites', {
    scale: 0.5
});
// 对 CSS 进行图片合并
fis.match('static/css/achievement/*.css', {
    packTo: 'static/css/achievement-icon.css',
    useSprite: true
});

// fis parse es6 to es5
fis.match('/widget/**.js', {
    parser: fis.plugin('babel', {
        blacklist: ["useStrict"]
    })
});
fis.match('/{controller,model,route,config}/**.js', {
    parser: fis.plugin('babel', {
        blacklist: ["useStrict"]
    })
});

fis.match('static/js/{controller,model,widget}.js', {
    parser: fis.plugin('babel')
});

fis.match('test/data/**.js', {
    parser: fis.plugin('babel')
});

/**********************
     pack files 
**********************/

fis.match('::package', {
    packager: fis.plugin('map', {
        'static/core-lib.js': [
            '/static/lib/**.js',
        ],
        'static/core-js.js': [
            '/config/**.js',
            '/static/js/controller.js',
            '/static/js/model.js',
            '/static/js/widget.js',
            '/static/js/initapp.js',
            '/widget/util/*.js',
			'/route/sRouter.js',
            '/route/route.js'
        ],
        'static/center_sync_0_pkg.js': [
            'controller/mainControl.js',
            '/static/js/datetime/**.js',
            '/static/js/ztree/**.js',
            'model/tablemodel.js',
            'model/depmodel.js',
            'model/areamodel.js',
            'widget/module/header/header.js',
            'widget/module/form/form.js',
            'widget/module/searchfilter/searchfilter.js',
            'widget/module/menu/menu.js',
            'widget/module/table/table.js',
            'widget/module/footer/footer.js',
            'widget/component/**.js',
            'widget/component/edit/edit.js',
            'widget/filter/datetime.js',
            'widget/classComponent/datecontrol/datecontrol.js',
            'widget/classComponent/dialog/**.js',
            'widget/module/backtotop/backtotop.js',
            'widget/module/topbanner/topbanner.js'
        ],
        'static/add_sync_0_pkg.js': [
            'controller/addProControl.js',
            'widget/module/header/header.js',
            'widget/module/form/form.js',
            'widget/module/menu/menu.js',
            'widget/module/footer/footer.js',
            'widget/component/edit/edit.js',
            'widget/classComponent/dialog/dialog.js',
            'widget/module/backtotop/backtotop.js',
            'widget/module/addform/addform.js',
        ],
    })
});

/**********************
     Modular files 
**********************/

fis.match('/{controller,widget,model}/**.js', {
    isMod: true
});

fis.match('static/js/**.js', {
    isMod: true
});
fis.match('static/js/datetime/**.js', {
    isMod: false
});
fis.match('static/js/ztree/**.js', {
    isMod: false
});
fis.match('static/js/initapp.js', {
    isMod: false
});
fis.match('config/pageStructure.js', {
    isMod: true
});


/**********************
     preload plugin 
**********************/

fis.match('::package', {

    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true 
    })
});

fis.match('*.{js,css,png}', {
    useHash: true
});
fis.match('test/data/**.js', {
    useHash: true,
    isMod: true
});
// useHash exclude ueditor
fis.match('static/js/ueditor/{lang,themes,third-party,dialogs}/**', {
    useHash: false,
    isMod: false
});
fis.match('*.png', {
    useMap : true
});

fis.hook('commonjs');

fis.config.set('project.watch.usePolling', true);