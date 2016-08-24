'use strict';

var util = {
    isSupportCss: function (style, filter) {
        var testEle = document.createElement("div");
        var body = document.body;
        testEle.style.cssText = 'display:none;' + style;
        body.appendChild(testEle);

        var computedStyle = window.getComputedStyle(testEle);

        var isSupport =  filter(computedStyle);
        body.removeChild(testEle);
        testEle = null;

        return isSupport;
    },

    defaultCssPrefix: ['', '-webkit-', '-ms-', '-moz-', '-o-'],

    versionCompare: function (curVersion, baseVersion) {
        function parseVersion (v) {
            v = v.split('.');
            return parseInt(v[0], 10) * 100
                 + parseInt(v[1], 10) * 10
                 + parseInt(v[2]);
        }

        curVersion = parseVersion(curVersion);
        baseVersion = parseVersion(baseVersion);

        return curVersion >= baseVersion;
    },

    changeTitle: function (title) {
        var isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
        if(isIOS){
            var $body = $('body');
            document.title = title;
            var $iframe = $('<iframe src="http://client.map.baidu.com/shoppingmall/images/transparent.gif"></iframe>');
            $iframe.on('load',function() {
                setTimeout(function() {
                    $iframe.off('load').remove();
                }, 0);
            }).appendTo($body);  
        } else {
            document.title = title;
        }
    }
};

module.exports = util;