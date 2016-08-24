urlConfig['sales/orderEffective'] =
 {
	'form' : {
		'tabs' : [
			{ key: 'effective', value: '未审核', url:'sales/orderEffective' },
			{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
			{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
			{ key: 'all', value: '所有订单', url :'sales/orderAll'}
		],
		'formlist' :[
			[ 	
				{ key :'orderNumber' ,name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
				{ key :'productName', name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
				{ key :'manageName', name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
				{ key :'', name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
			],[	
				{ key :'customer', name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
				{ key :'code', name : '理财师归属地' , wrapperClass :'col-md-9 city-select' ,type : 'area'},
			],[
				{ key :'', name : '待审核状态', wrapperClass : 'col-md-3',
			      selectList : ['全部','资料审核','资料复核','支付审核','产品审核','产品二次复核','总审核'] ,type:'select'},
				{ key :'order_type', name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
				{ key :'beginTime' , wrapperClass: 'col-md-6 date-control' ,type : 'time'},

			],[
				{ key :'selectedDeptIds', name : '部门', wrapperClass: 'col-md-3' ,type : 'dep',},
			]
		],
		'buttonlist': [
			{name : '搜索', classList : 'btn btn-w-m btn-primary search',type : 'button', evt : 'submit'},
			{name : '重置搜索条件', classList : 'btn btn-w-m btn-primary search',type : 'button',evt:'	'},
		],
		'title' : '订单管理',
		'subtitle' : '投资审核',
		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'订单号', width:"10%" ,key : 'orderNumber',classList: 'sorting_disabled'},
			{ name :'下单时间', width:"5%" ,key : 'dateCreate' ,classList:'sorting_desc'},
			{ name :'产品名称', width:"8%" ,key : 'paymentName',classList:'sorting_disabled'},
			{ name :'理财经理', width:"6%" ,key : 'manageName',classList:'sorting_disabled'},
			{ name :'理财经理账号', width:"6%" ,key : 'manageAccount',classList:'sorting_disabled'},
			{ name :'上级部门', width:"6%" ,key : 'parentDepartmentName',classList:'sorting_disabled'},
			{ name :'部门', width:"6%" ,key : 'departmentName',classList:'sorting_disabled'},
			{ name :'投资人', width:"6%" ,key : 'customer',classList:'sorting_disabled'},
			{ name :'成交金额(元)', width:"6%" ,key : 'totalAmount',classList:'sorting_disabled'},
			{ name :'类型', width:"5%" ,key : 'order_type',classList:'sorting_disabled'},
			{ name :'已审核', width:"7%",key : 'excuteedNodeNames' ,classList:'sorting_disabled'},
			{ name :'待审核', width:"7%" ,key : 'notExcuteedNodeNames',classList:'sorting_disabled'},
			{ name :'支付方式', width:"5%" ,key : 'paymentName',classList:'sorting_disabled'},
			{ name :'操作栏', width:"8%" ,key: '',classList:'sorting_disabled'},
		],
		'url' : "/admin/sales/searchSalesOrder/search?orderStatus=REVIEWING",
		'param' : {
			 draw : 1 ,orderStatus :"REVIEWING" ,pageNow : 1, pageSize : 10,
			 sortString : "dateCreate.desc",
		}
	}
}
