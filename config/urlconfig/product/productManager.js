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
				
				{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-sm-4 pln' ,   type : 'input' ,placeholder : '请输入产品名称'},
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
			{ name :'产品ID', width:"8%" ,key : 'id',classList: 'sorting_disabled'},
			{ name :'产品名称', width:"8%" ,key : 'name' ,classList:'sorting_desc'},
			{ name :'产品类型（ID）', width:"8%" ,key : 'categoryId',classList:'sorting_disabled'},
			{ name :'产品类型（名称）', width:"8%" ,key : 'categoryName',classList:'sorting_disabled'},
			{ name :'产品状态（产品销售状态）（ID）', width:"8%" ,key : 'salesStatusId',classList:'sorting_disabled'},
			{ name :'产品状态（产品销售状态）（名称）', width:"8%",key : 'salesStatusName' ,classList:'sorting_disabled'},
			{ name :'上下架状态（ID）', width:"8%" ,key : 'available',classList:'sorting_disabled'},
			{ name :'上下架状态（名称）', width:"8%" ,key : 'availableName',classList:'sorting_disabled'},
			{ name :'上架日期', width:"8%" ,key: 'dateIssue',classList:'sorting_disabled'},
			{ name :'审核状态（ID）', width:"8%" ,key: 'statusId',classList:'sorting_disabled'},
			{ name :'审核状态（名称）', width:"8%" ,key: 'statusName',classList:'sorting_disabled'},
		],
		'url' : "product/maintenance/list",
		'param' : { 
			"name": null, "telephone": null, "address": null,"status": null,"pageNo": 1, "pageSize": 10
		 }
	},
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {name : '产品维护' ,url : ''},
		'key' : '产品维护',
		'subFun' : [{'key' : '新增产品' , evt :'addProduct', code: 'add'}],
		'drafts' : '#main/product/draft',
	},
	'filters' : [
		{ key :'productName', name : '产品类型', wrapperClass : 'col-sm-6' , 
			options : ['全部','基金','权益类','资管','信托','会员精选','股权投资','海外保险'] ,type : 'filter' },
		{ key :'customer', name : '产品状态',  wrapperClass : 'col-md-6',
			options : ['全部','在售','预售','售罄','已结束','执行中','募集失败'] ,type : 'filter'},
		{ key :'code', name : '审核状态' , wrapperClass :'col-md-6' ,
			options : ['全部','待审核','审核失败','审核通过'] ,type : 'filter'},	
		{ key :'selectedDeptIds', name : '上下架状态', wrapperClass: 'col-md-6',
		  options : ['全部','上架','下架'] ,type : 'filter',},
		// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},
	]
}
