/**
* @fileoverview cookie操作实现，基于tangram修改
* @author caodongqing
*/
'use strict';
/**
 * @lends core:widget/cookie
 */
var cookie = {};

/**
 *
 * @param key
 * @returns {boolean}
 * @private
 */
cookie._isValidKey = function (key) {
    /*jshint maxlen:120*/
    return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
};

/**
 *
 * @param key
 * @returns {*}
 */
cookie.getRaw = function (key) {
    if (cookie._isValidKey(key)) {
        var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"),
            result = reg.exec(document.cookie);

        if (result) {
            return result[2] || null;
        }
    }

    return null;
};

/**
 *
 * @param key
 * @returns {*}
 */
cookie.get = function (key) {
    var value = cookie.getRaw(key);
    if ('string' === typeof value) {
        value = decodeURIComponent(value);
        return value;
    }
    return null;
};

cookie.setRaw = function (key, value, options) {
    if (!cookie._isValidKey(key)) {
        return;
    }

    options = options || {};
    //options.path = options.path || "/"; // meizz 20100402 设定一个初始值，方便后续的操作
    //berg 20100409 去掉，因为用户希望默认的path是当前路径，这样和浏览器对cookie的定义也是一致的

    // 计算cookie过期时间
    var expires = options.expires;
    if ('number' === typeof options.expires) {
        expires = new Date();
        expires.setTime(expires.getTime() + options.expires);
    }

    document.cookie =
        key + "=" + value
        + (options.path ? "; path=" + options.path : "")
        + (expires ? "; expires=" + expires.toGMTString() : "")
        + (options.domain ? "; domain=" + options.domain : "")
        + (options.secure ? "; secure" : '');
};

cookie.remove = function (key, options) {
    options = options || {};
    options.expires = new Date(0);
    cookie.setRaw(key, '', options);
};

cookie.set = function (key, value, options) {
    cookie.setRaw(key, encodeURIComponent(value), options);
};

/**
 * @module core:widget/cookie
 */
module.exports = cookie;
