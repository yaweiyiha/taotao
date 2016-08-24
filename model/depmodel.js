import Model from 'static/js/model.js'



class depModel extends Model{

    getData(dataKey = '',opt) {

        var opt = opt || '';
        var _selectedDeptIds = "10000000"; 
    	var url =`/admin/product/addProductAssociationDepTree/product_DepTree/
                + $(_selectedDeptIds) / new Date()`;
       // var testData = {"message":"Success.","status":"S","list":[{"id":"DP10000001","pId":"","name":"公司组织","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000002","pId":"DP10000001","name":"开发陆小凡","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000003","pId":"DP10000001","name":"杨唐鹏部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000004","pId":"DP10000001","name":"测试部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000006","pId":"DP10000001","name":"李宁部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000007","pId":"DP10000001","name":"上官部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000009","pId":"DP10000001","name":"上官丹意的部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000010","pId":"DP10000001","name":"研发部后台","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000011","pId":"DP10000003","name":"邹凯夷部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000012","pId":"DP10000003","name":"杨tp部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000013","pId":"DP10000003","name":"张恒瑞部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000014","pId":"DP10000006","name":"李宁一级子部门1","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000015","pId":"DP10000006","name":"李宁一级子部门2","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000017","pId":"DP10000003","name":"丁群慧部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000019","pId":"DP10000012","name":"业绩排名测试部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000021","pId":"DP10000001","name":"姚露艳部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000022","pId":"DP10000001","name":"李宁空部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000024","pId":"DP10000003","name":"111","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000025","pId":"DP10000003","name":"222","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000026","pId":"DP10000003","name":"333","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000027","pId":"DP10000003","name":"444","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000028","pId":"DP10000003","name":"555","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000029","pId":"DP10000003","name":"666","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000030","pId":"DP10000003","name":"777","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000031","pId":"DP10000003","name":"888","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000033","pId":"DP10000003","name":"葛文博部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000034","pId":"DP10000001","name":"建龙","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000035","pId":"DP10000001","name":"阿泰部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000036","pId":"DP10000001","name":"肖晶部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000037","pId":"DP10000001","name":"磊哥部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000038","pId":"DP10000001","name":"XX部","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000040","pId":"DP10000001","name":"宋丹丹部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000041","pId":"DP10000021","name":"姚露艳一级子部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000042","pId":"DP10000041","name":"姚露艳二级子部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000044","pId":"DP10000001","name":"植部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000047","pId":"DP10000040","name":"孙秀艳部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000048","pId":"DP10000001","name":"方海波","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000050","pId":"DP10000001","name":"zhangxuyang","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000051","pId":"DP10000001","name":"chengjie","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000053","pId":"DP10000040","name":"孙秀艳一部门","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false},{"id":"DP10000055","pId":"DP10000001","name":"研发一部","icon":"","open":false,"tenant_fk":"1000000001","checked":false,"parent":false}]};
        return new Promise(function(resolve, reject){
         //   setTimeout(() => resolve(testData.list), 1000);
            var xhr = $.ajax({
                url: url,
                method: 'GET',
                timeout : 5000,
                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                cache: false,
                success: function (ret) {
                    if (ret.status === 'S') {
                        resolve(ret.list);
                    } else {
                        reject();
                    }
                },
                error: function () {
                    console.log('fail')
                    reject();
                }
            });
        });
    }
}


export default new depModel();