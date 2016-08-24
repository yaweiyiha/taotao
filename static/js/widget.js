/**
 * class Widget  for render widgets
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 * globals INTERFACE_FATAL_ERROR
**/

var Widget = (function() {
    var self;
    /**
     * init data from Model ,then invoke init function in sub-class
     * @param  {Object} 
     * @return {void}
     */
    var _init = function(data) {

        if (!data._containerDom_) {
            // console.log('widget container is not exists!');
            return;
        }
        self._containerDom_ = data._containerDom_;
        self._data_ = data;
        self._load_error = false;
        if (self._data_._error_ === INTERFACE_FATAL_ERROR) {
            self._load_error = true;
        }

        if (self.init && $.isFunction(self.init)) {
            self.init(data);
        }
    };

    function Widget(data) {
        _init(data);
    }

    Widget.prototype._setLoadError = function (flag) {
        var _data_ = this._data_;
        if (flag) {
            _data_._error_ = INTERFACE_FATAL_ERROR;
        } else {
            _data_._error_ = '';
        }
        this._load_error = !!flag;
    }
    /**
     * render widgets in two ways ,one for vue ,one for native
     * @param  {Object} data 
     * @param  {String} tpl  
     * @param  {String} type
     * @return {Object}   
     */
    Widget.prototype.display = function (data, tpl, type = 'vue') {
        var me = this;
        var _data_ = this._data_;
        var container = this._containerDom_;
        var vm = null;
        container.empty();

        var errorTpl = `<div class="wrapper">
                        <div class="error-img"></div>
                        <p class="info">加载失败，点击重新加载</p>
                        </div>`;

        if (_data_._error_ === INTERFACE_FATAL_ERROR) {
            tpl.find('.content-wrapper').remove();
            tpl.find('.error-wrapper').empty().append($(errorTpl));
        } else if (type === 'vue') {
            vm = new Vue({
                el: container.get(0),
                data: data,
                template: tpl,
                methods: me.methods,
                filter : me.filter, 
                watch : me.watch,
            });
            this.vm = vm; 
            return vm;
        } else if (type === 'native') {
            var tpl = $(tpl(data));
            container.empty();
            container.append(tpl);
            return tpl;
        }

    }

    Widget.prototype.reload = function () {
        // throw new Error('must implement reload function in widget!');
    }

    Widget.prototype.revertErrorTip = function () {
        var _data_ = this._data_;
        var container = this._containerDom_;

        var currentTime = +new Date();
        var timeLimit = 500;

        var timeDiff = currentTime - this._last_reload_time;
        if (timeDiff >= timeLimit) {
            container.find('.error-wrapper .info').text('加载失败，点击重新加载');
        } else {
            setTimeout(function () {
                container.find('.error-wrapper .info').text('加载失败，点击重新加载');
            }, (timeLimit - timeDiff));
        }

    }

    /**
     * Depends on transfered Objects to extend Base Class, 
     * return child but widget  for extend Class Widget  directly 
     * @param  {Object} obj   Component Object 
     * @return {function}  Constructor Function extends from base Class Widget
     */
    Widget.extend = function(obj) {
        var parent = this;
        var child = function() {
            self = this;
            return parent.apply(this, arguments);
        };
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        Surrogate = null;
        $.extend(child.prototype, obj);
        child.createWidget = function(data) {
            new child(data);
        }
        return child;
    };

    return Widget;
})();

export default Widget;