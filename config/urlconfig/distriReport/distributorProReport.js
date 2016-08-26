urlConfig['distripro/report'] =
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
				
				{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-sm-4 pln' ,   type : 'input' ,placeholder : '请输入产品名称'},
				{ key :'beginTime' ,name : '上架时间', wrapperClass: 'col-sm-4 date-control' ,type : 'time'},
				// { key :'orderNumber' ,name : '上架时间', wrapperClass : 'col-sm-4' ,   type : 'input'},
				{name : '搜索', classList : 'search',type : 'button', evt : 'submit'},
			],
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
		// 'url' : "/admin/sales/searchSalesOrder/search?orderStatus=REVIEWING",
		'url': '/test/data/distributManage.js',
		'param' : {
			 draw : 1 ,orderStatus :"REVIEWING" ,pageNow : 1, pageSize : 10,
			 sortString : "dateCreate.desc",
		}
	},
	'topbanner' : {
		'title' : '报表管理',
		'subtitle' : {name : '分销产品销售报表' ,url : ''},
		'key' : '分销产品销售报表',
	},
	'filters' : [
		{ key :'productName', name : '分销方', wrapperClass : 'col-sm-6' , 
			options : ['钱橙','环球财富','祥云资产管理','资管','信托','会员精选','股权投资','海外保险'] ,type : 'select' },
		// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},
	]
}
