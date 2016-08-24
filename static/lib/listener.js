/**
 * 全局广播通知;
 * 严格的区分了频道与事件的概念
 *
 * @example
 *
 * A模块内监听'com.myTest'频道下的say事件
 * listener.on('com.myTest', 'say', function(d){alert(d);});
 *
 * B模块内触发'com.myTest'频道下的say事件
 * listener.trigger('com.myTest', 'say', 'Hello World!');
 */
(function() {
    var EXECTIME = 50, //连续执行时间，防止密集运算
        DELAY = 25;

    var that = {},
        timer = '',
        slice = [].slice,
        channelList = {}; //用于保存被注册过所有频道
    /**
     * 通知监听
     * @param {String} channel 频道名
     * @param {String} type 事件类型
     * @param {Function} callback 事件响应
     * @param {Object} context 上下文环境
     */
    var on = function(channel, type, callback, context) {
        var curChannel = channelList[channel];
        if (!curChannel) {
            curChannel = channelList[channel] = {};
        }
        curChannel[type] = curChannel[type] || [];
        curChannel[type].push({
            'func': callback,
            'context': context || that
        });
    };

    /**
     * 通知监听, 执行一次后销毁
     * @param  {[type]}   channel  [description]
     * @param  {[type]}   type     [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   context  [description]
     * @return {[type]}            [description]
     */
    var once = function(channel, type, callback, context) {
        var _once = function() {
            that.off(channel, type, _once);
            return callback.apply(context || that, arguments);
        };
        on(channel, type, _once, context);
    };

    /**
     * 事件触发
     * @param {String} channel
     * @param {String} type
     * @param {Object} data 要传递给相应函数的实参
     */
    var trigger = function(channel, type, data) {
        if (channelList[channel] && channelList[channel][type] && channelList[channel][type].length) {
            var taskList = channelList[channel][type];
            var curHandlers = [];
            for (var i = taskList.length; i--;) {
                curHandlers.push({
                    'handler': taskList[i],
                    'args': slice.call(arguments, 1)
                });
            }
            (function() {
                var start = +new Date();
                do {
                    var curTask = curHandlers.shift(),
                        handler = curTask.handler;
                    try {
                        handler.func.apply(handler.context, curTask.args);
                    } catch (exp) {
                        //console.log('listener: One of ' + curTask['type'] + '`s function execute error!');
                    }
                } while (curHandlers.length && (+new Date() - start < EXECTIME));
                if (curHandlers.length > 0) {
                    setTimeout(arguments.callee, DELAY);
                }
            })();
        }
    };

    /**
     * 事件监听移除
     * @param {String} channel 频道名
     * @param {String} type 事件类型
     * @param {Function} callback 要移除的事件响应函数句柄
     */
    var off = function(channel, type, callback, context) {
        context = context || that;
        if (channelList[channel] && channelList[channel][type] && channelList[channel][type].length) {
            var taskList = channelList[channel][type];
            var handler;
            for (var i = taskList.length; i--;) {
                handler = taskList[i];
                if (handler.func === callback && handler.context === context) {
                    taskList.splice(i, 1);
                }
            }
        }
    };

    that.on = on;
    that.once = once;
    that.trigger = trigger;
    that.off = off;

    window.listener = window.listener ||  that;
})();