

'use strict';

var url = {

    url: '',
    /**
     获取get参数
     **/
    get: function () {

        var getStr = location.href.split("?")[1].split("&");
        var param = [];
        getStr.forEach(function (item) {
            var key = item.split('=')[0];
            var value = item.split("=")[1];
            param[key] = value;
        });
        return param;

    },
    getHash: function () {

        var hash = location.hash.match(/\?/) ? location.hash.split('?')[0] : location.hash;
        if (hash.substr(0, 1) == '#')
            hash = hash.substr(1).split('/')[0];
        return hash;
    },

    getPage: function (){

        var hash = location.hash.match(/\?/) ? location.hash.split('?')[0] : location.hash;
        if (hash.substr(0, 1) == '#'){
            let pos = location.hash.substr(1).search(/\//);
            var page = location.hash.substr(pos + 2);
        }
        return page;
    },
    /**
     * 将url参数部分解析成key/value形式
     * @param {string} url，格式key=value&key=value
     * @returns {Object} json对象{key:value,key:value}
     */
    urlToJSON: function (url) {

        // url = url || location.href.split('?')[1];
        // if(!url){
        //     return;
        // }
        // var result = {}, pairs = url.split('&'),
        //     i, keyValue, len;
        // for (i = 0, len = pairs.length; i < len; i++) {
        //     keyValue = pairs[i].split('=');
        //     result[keyValue[0]] = decodeURIComponent(keyValue[1]);
        // }
        // return result;

        var result = {};
        var hash = location.hash;
        var query = location.search;

        if (query) {
            query = query.replace(/^\?/, '');

            if (query) {
                result = $.extend(result, this._parse(query));
            }
        }

        if (hash) {
            hash = hash.replace(/^#/, '');
            hash = String.prototype.split.call(hash, '?');

            if (hash[1]) {
                result = $.extend(result, this._parse(hash[1]));
            }
        }


        return result;
    },

    _parse: function (str) {
        var res = {};
        var pairs = str.split('&');

        for (var i = 0, len = pairs.length; i < len; i++) {
            var keyValue = pairs[i].split('=');
            res[keyValue[0]] = decodeURIComponent(keyValue[1]);
        }

        return res;
    },

    getHashParam: function () {
        var result = {};
        var hash = location.hash;

        if (hash) {
            hash = hash.replace(/^#/, '');
            hash = String.prototype.split.call(hash, '?');

            if (hash[1]) {
                result = this._parse(hash[1]);
            }
        }

        return result;
    },
    /**
     * json转换为url
     * @param {Object} json数据
     * @returns {string} url
     */
    jsonToUrl: function (json) {
        if (!json) {
            return '';
        }
        var arr = [],
            key;
        for (key in json) {
            if (json.hasOwnProperty(key)) {
                arr.push(key + '=' + encodeURIComponent(json[key]));
            }
        }
        return arr.join('&');
    },
    /**
     * 将json对象格式化为请求串
     * @param {Object} Json对象
     * @param {Function} 编码函数
     */
    jsonToQuery: function (json, encode) {
        var s = [],
            n, value;

        encode = encode || function (v) {
                return v;
            };
        for (n in json) {
            if (json.hasOwnProperty(n)) {
                value = json[n];
                if (value) {
                    s.push(n + '=' + encode(value));
                }
            }
        }
        return s.join('&');
    },

    pushUrl: function (param, opts) {
        opts = opts || {};
        var page = this.getHash() || 'center';
        var hashParam = this.getHashParam();
        hashParam = $.extend(hashParam, param);

        var url = '#' + page + '?' + this.jsonToUrl(hashParam);

        if (opts.replace === true) {
            if (window.history.replaceState) {
                window.history.replaceState({page: page}, '', url);
            }
        } else {
            if (window.history.pushState) {
                window.history.pushState({page: page}, '', url);
            }
        }
    }
    // ,
    //
    // /**
    //  * 无刷新改变地址栏
    //  * @param {Object} json 记录的页面状态对象
    //  * @param {string} page 页面名称
    //  */
    // changeUrl: function (json, page) {
    //     // hash 放在query后面,用了这个方法后,点返回,不会触发hashchange
    //     var url = '#' + page + '?' + this.jsonToUrl(json);
    //     if (window.history.replaceState) {
    //         window.history.replaceState({page: page}, '', url);
    //     }
    // }
    // /**
    //  * 把一个键值记录到url中
    //  * @param {string} key 记录的key
    //  * @param {string} value 记录的value
    //  */
    // recordByUrl: function (key, value, page) {
    //     var urlObject = this.urlToJSON();
    //     var hash = window.location.hash.split('?')[0].split('#')[1];
    //     var page = page || hash;
    //     urlObject[key] = value;
    //     this.changeUrl(urlObject, page);
    // }
}

module.exports = url;