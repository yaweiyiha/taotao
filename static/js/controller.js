/**
 * Class Control for get Models and get Views
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 *
 * regist async module for loaded  when system is running
 * @require.async admin:model/tablemodel.js
 * @require.async admin:model/distrimodel.js
 * @require.async admin:model/formModel.js
**/

let counter = 1;

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
        var modelPath  = "admin:model/" + modelName + 'model.js';
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
            data._container_ = item.wrapper || item.container || '#main';
            data._error_ = pageData._error_ || '';
            data._containerDom_ = item.wrapperDom || null;
            data._widgetName_ = item.widget;

            let pageDataCopy = $.extend(true, {}, pageData);
            data = $.extend(true, pageDataCopy, data);
            dataResource.push(data);
            let viewPath = `admin:widget/module/${item.widget}/${item.widget}.js`;
            widgetResource.push(viewPath);
            
        });
        require.async(widgetResource, function (...widgets) {
            widgets.forEach(function (widget, index) {
           
                    widget.createWidget(dataResource[index]);
              
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
        //console.log(container);
        container = $(container);
        container.empty();

        if (structure) {
            structure = $(structure);
            container.append(structure);
        }

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


