urlConfig['distributors/maintenance'] =
 {
	'form' : {
		'tabs' : [],
		'head' : {
			subList : [
				{'key' : '待审核' },
				{'key' : '审核通过' },
				{'key' : '审核不通过' },
			]
		},

		'formlist' :[
			[ 	
				{ key :'orderNumber' ,name : '发行商名称', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入要搜索的发行商名称关键字'},
				{ key :'orderNumber' ,name : '发行商电话', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入要搜索的发行商电话关键字'},
				{ key :'orderNumber' ,name : '发行商地址', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入要搜索的发行商地址关键字'},
			],
		],
		'buttonlist': [
			{name : '搜索', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
			{name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
		],

		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'订单号', width:"15%" ,key : 'auditStatus',classList: 'sorting_disabled'},
			{ name :'下单时间', width:"10%" ,key : 'available' ,classList:'sorting_desc'},
			{ name :'产品名称', width:"10%" ,key : 'availableStatus',classList:'sorting_disabled'},
			{ name :'成交金额(元)', width:"15%" ,key : 'dateOfUpdate',classList:'sorting_disabled'},
			{ name :'类型', width:"10%" ,key : 'id',classList:'sorting_disabled'},
			{ name :'已审核', width:"10%",key : 'name' ,classList:'sorting_disabled'},
			{ name :'待审核', width:"10%" ,key : 'saleStatus',classList:'sorting_disabled'},
			{ name :'支付方式', width:"10%" ,key : 'sales_status_fk',classList:'sorting_disabled'},
			{ name :'操作栏', width:"10%" ,key: 'startingPrice',classList:'sorting_disabled'},
		],
		'url' : "/admin/sales/searchSalesOrder/search?orderStatus=REVIEWING",
		'param' : {
			 draw : 1 ,orderStatus :"REVIEWING" ,pageNow : 1, pageSize : 10,
			 sortString : "dateCreate.desc",
		}
	},
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {name : '查看' ,url : ''},
		'key' : '产品维护',
		'subFun' : [{'key' : '新增发行商' , url :'#addPro/distributor/add' ,code : 'add'}],
	}
}
