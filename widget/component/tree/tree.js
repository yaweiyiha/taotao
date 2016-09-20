import depModel from 'model/depmodel.js';

var style = __inline('./tree.inline.less');
var tpl = __inline('./tree.tpl');

require.loadCss({
    name: 'usersys-widget-tree-style',
    content: style
});

export default Vue.component('tree-component', {
    template: tpl,
    data: function () {
        return {
            setting : {
                view: {
                    dblClickExpand: false,
                    showLine: true,
                    selectedMulti: false
                },
                check: {
                    enable: true
                },
                data: {
                    simpleData: {
                        enable:true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: ""
                    }
                },
                callback: {
                    beforeClick: function(treeId, treeNode) {
                        //console.log(treeId);
                    }
                }
            }
        }
    },
    ready: function(){
        let depData = depModel.getData();
        depData.then((list) => {
            window.deparTreeInstance = $.fn.zTree.init($("#testDom"), this.setting, list);  
        }, (e) => {
            console.log('depData error');
        });
    },
    methods: {
        getTreeInstance: () => this.treeInstance
    }
});