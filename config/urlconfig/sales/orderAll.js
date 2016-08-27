urlConfig['sales/orderAll'] = 
 {
	'form' : {
		'tabs' : [
			{ key: 'effective',value: '未审核', url:'sales/orderEffective' },
			{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
			{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
			{ key: 'all', value: '所有订单', url :'sales/orderAll'}
		],
		'formlist' :[
			[ 	
				{ name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
				{ name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
				{ name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
				{ name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
			],[	
				{ name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
					{ key :'code', name : '理财师归属地' , wrapperClass :'col-md-9 city-select' ,type : 'area'},
			],[
				{ name : '审核状态', wrapperClass : 'col-md-3',selectList : ['全部','未成功','完成','进行中'], type:'filter'},
				{ name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'filter'},
				{ key :'beginTime', name : '下单时间', wrapperClass: 'col-md-3' ,type : 'time', classList: 'beginTime' },
				{ key:'endTime', name : '到', wrapperClass: 'col-md-3' ,type : 'time', classList: 'endTime' },
				{ name : '对账状态', wrapperClass : 'col-md-3',selectList : ['全部','未对账','已对账','对账异常'], type:'filter'},
				{ key :'selectedDeptIds', name : '部门', wrapperClass: 'col-md-3' ,type : 'dep'},
			]
		],
		'buttonlist': [
			{ name : '搜索', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
			{ name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
			{ name : '批量导入', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
			{ name : '批量导出word', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
		],
		'title' : '订单管理',
		'subtitle' : '投资审核',
		'host' : 'index.html#main/',
		'type' : 'all',
		'tables' : [
			{ name :'订单号', width:"10%" ,key : 'orderNumber'},
			{ name :'下单时间', width:"5%" ,key : 'dateCreate'},
			{ name :'产品名称', width:"8%" ,key : 'paymentName'},
			{ name :'理财经理', width:"6%" ,key : 'manageName'},
			{ name :'理财经理账号', width:"6%" ,key : 'manageAccount'},
			{ name :'理财经理归属地', width:"6%" ,key : 'area'},
			{ name :'上级部门', width:"6%" ,key : 'parentDepartmentName'},
			{ name :'部门', width:"6%" ,key : 'departmentName'},
			{ name :'投资人', width:"6%" ,key : 'customer'},
			{ name :'成交金额(元)', width:"6%" ,key : 'totalAmount'},
			{ name :'类型', width:"5%" ,key : 'order_type'},
			{ name :'支付方式', width:"5%" ,key : 'paymentName'},
			{ name :'操作栏', width:"8%" ,key : ''},
		],
		'url' : "/admin/sales/searchAllSalesOrder/search",
		'param' : {
			 draw : 1 ,orderStatus :"-1" ,pageNow : 1, pageSize : 10,
			 sortString : "dateCreate.desc"
		}
	}
}
