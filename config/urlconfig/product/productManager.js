urlConfig['product/maintenance'] =
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
				
				{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入产品名称'},
				{ key :'beginTime' ,name : '上架时间', wrapperClass: 'col-sm-4 date-control' ,type : 'time'},
				// { key :'orderNumber' ,name : '上架时间', wrapperClass : 'col-sm-4' ,   type : 'input'},
				{name : '搜索', classList : 'search',type : 'button', evt : 'submit'},
			],
		],
		'buttonlist': [
			{name : '搜索', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
			{name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
		],

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
	},
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {name : '产品维护' ,url : ''},
		'key' : '产品维护',
		'subFun' : {'key' : '新增产品' , evt :'addProduct'},
		'drafts' : '#main/product/draft',
	},
	'filters' : [
		{ key :'productName', name : '产品类型', wrapperClass : 'col-sm-6' , 
			options : ['全部','基金','权益类','资管','信托','会员精选','股权投资','海外保险'] ,type : 'select' },
		{ key :'customer', name : '产品状态',  wrapperClass : 'col-md-6',
			options : ['全部','在售','预售','售罄','已结束','执行中','募集失败'] ,type : 'select'},
		{ key :'code', name : '审核状态' , wrapperClass :'col-md-6' ,
			options : ['全部','待审核','审核失败','审核通过'] ,type : 'select'},	
		{ key :'selectedDeptIds', name : '上下架状态', wrapperClass: 'col-md-6',
		  options : ['全部','上架','下架'] ,type : 'select',},
		// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},
	]
}
