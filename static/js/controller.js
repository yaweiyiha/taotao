/**
 * Class Control for get Models and get Views
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 *
 * regist async module for loaded  when system is running
 * @require.async asset:model/tablemodel.js
**/

export default class Control{

 	constructor(data){
 		this.init  && this.init(data);
 	}

 	_init(opt) {
        $('#page-wrapper').empty();

        if (self.init && $.isFunction(self.init)) {
            self.init(opt);
        }

        listener.once('page', 'change', function () {
            for (var i in self.widgets) {
                if (self.widgets.hasOwnProperty(i)) {
                    self.widgets[i].wrapperDom = null;
                    self.widgets[i].wrapper = '';
                }
            };
        });
    }
    /**
     * @param  {String} modelName 
     * @param  {Function} cb
     * @return {void}
     */
    getModel(modelName, cb) {
        var modelPath  = "asset:model/" + modelName + 'model.js';
        require.async(modelPath, function (Model) {
            var model = new Model();
            cb && cb(model);
        });
    } 

    /**
     * @param  {Object} widgets
     * @param  {Object} pageData
     * @param  {Function} callback
     * @return {void}
     */
    getViews(widgets, pageData, callback) {

        let widgetResource = [];
        let dataResource = [];
        pageData = pageData || {};

        widgets.forEach(function (item) {

            let data = ( item && item.data) ?  item.data  :  {};
            data._container_ = item.wrapper || item.container || '#page-wrapper';
            data._error_ = pageData._error_ || '';
            data._containerDom_ = item.wrapperDom || null;
            data._widgetName_ = item.widget;

            let pageDataCopy = $.extend(true, {}, pageData);
            data = $.extend(true, pageDataCopy, data);
            dataResource.push(data);
            let viewPath = `asset:widget/module/${item.widget}/${item.widget}.js`;
            widgetResource.push(viewPath);
            
        });
        require.async(widgetResource, function (...widgets) {
            widgets.forEach(function (widget, index) {
                try {
                    widget.createWidget(dataResource[index]);
                } catch (e) {
                     throw new Error('create widget fail');
                }
            });

            callback && callback();
        })
        
    }
    /**
     * @param  {String} structure
     * @param  {Array}  widgets
     * @param  {String} container
     * @return {Object}
     */
    createPageStructure(structure = '', widgets = [], container = '#main') {
        container = $(container);
        
        if (structure) {
            structure = $(structure);
            container.empty();
            container.append(structure);
        }

        var counter = 1;
        for (let i in widgets) {
            if (widgets.hasOwnProperty(i)) {
                let item = widgets[i];
                let eleHtml = `<div class="dynamic-widget-${counter}"></div>`;
                let eleDom = $(eleHtml);
                let wrapper = item.container ? container.find(item.container) : container;

                wrapper.append(eleDom);

                widgets[i].wrapper = `.dynamic-widget-${counter}`;
                widgets[i].wrapperDom = eleDom;
                counter++;
            }
        }

        return widgets;
    }

 }


