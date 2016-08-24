/**
 * Class Model for get Datas 
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 *
**/

export default class Model{
    
    /**
     * @param  {String} dataKey
     * @param  {Object} opt
     * @return {Object}
     */
    getData(dataKey,opt) {
        var self = this;
        var dataArr = [];
        if(self.dataModel && $.isFunction(self.dataModel)){
            return  self.dataModel(dataKey,opt);
        }

    }
    
    get(property) {
        if(this.getData()[property]) {
            return this.getData()[property];
        } else {
            return {};
        }
    }
    
    setData(data) {
        window.locData = data;
    }

    remove() {

    }
}
