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
				
				{ key :'name' ,name : '产品名称', wrapperClass : 'col-sm-4 pln' ,   type : 'input' ,placeholder : '请输入产品名称'},
				{ startkey :'dateIssueStart', endkey :'dateIssueEnd'  ,name : '上架时间', wrapperClass: 'col-sm-5 date-control' ,type : 'time'},
				{name : '搜索', classList : 'search',type : 'button', evt : 'submit'},
			],
		],

		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'产品名称', width:"8%" ,key : 'name' ,type:'pro'},
			{ name :'类型', width:"8%" ,key : 'categoryName',type:'nomal'},
			{ name :'产品状态', width:"8%",key : 'salesStatusName' ,type:'nomal'},
			{ name :'上下架状态', width:"8%" ,key : 'availableName',type:'nomal'},
			{ name :'上架日期', width:"8%" ,key: 'dateIssue',type:'time'},
			{ name :'审核状态', width:"8%" ,key: 'statusName',type:'nomal'},
			{ name :'操作', width:"10%" ,key: 'operater', type: 'operater'},
		],
		'hasProductUrl' : true,
		'tableFilter' : { 'key' : 'statusId', 'value' : 10  }, 
		'url' : "product/maintenance/list",
		'param' : { 
			"exclude": 1, "pageNo": 1, "pageSize": 10
		 },
		 'operater': {
		 	statusIdDict: {
		 		'20': '审核',
		 		'30': '失败原因',
		 		'40': '编辑'
		 	},
		 	pageDict: {
		 		'10': 'fund',
		 		'30': 'asset',
		 		'40': 'trust',
		 		'60': 'debtassgin',
		 		'70': 'equityInvestment'
		 	},
		 	operaterList: [
		 		[
			 		{
			 			condition: '{{ equal(statusId, 20) }}',
			 			content: {
				 			name: ['{{ DICT(statusId, statusIdDict) }}'],
				 			url: ['#validatePro/', '{{ DICT(categoryId, pageDict)}}', '/validate?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
			 		},
			 		{
			 			condition: '{{ equal(statusId, 30) }}',
			 			content: {
				 			name: ['{{ DICT(statusId, statusIdDict) }}'],
				 			url: ['javascript:;'],
				 			evt: ['errReasonDailog'],
				 			val: ['{{ INTERFACE_DATA(verifyDenyReason) }}']
			 			},
			 		},
			 		{
			 			condition: '{{ equal(statusId, 40) }}',
			 			content: {
				 			name: ['{{ DICT(statusId, statusIdDict) }}'],
				 			url: ['#editPro/', '{{ DICT(categoryId, pageDict)}}', '/edit?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
			 		}		 		
		 		]
		 	]
		 },
	},
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {name : '产品维护' ,url : ''},
		'key' : '产品维护',
		'subFun' : [{'key' : '新增产品' , evt :'addProduct', code: 'add', mark:'product:create'}],
		'drafts' : '#main/product/draft',
	},
	'filters' : [
		{ key :'categoryId', name : '产品类型', wrapperClass : 'col-sm-6' , mark:'',
			options : ['全部','基金','资管','信托','债权转让','股权投资'] ,values: [-1, 10, 30, 40, 60, 70],type : 'filter' },
		{ key :'salesStatusId', name : '产品状态',  wrapperClass : 'col-md-6',mark:'',
			options : ['全部','在售','预售','售罄','已结束','执行中','募集失败'] ,values: [-1, 10, 20, 30, 60, 70,80],type : 'filter'},
		{ key :'statusId', name : '审核状态' , wrapperClass :'col-md-6' ,mark:'product:audit',
			options : ['全部','待审核','审核失败','审核通过'] , values: [-1, 20, 30, 40],type : 'filter'},	
		{ key :'available', name : '上下架状态', wrapperClass: 'col-md-6',mark:'',
		  options : ['全部','上架','下架'] , values: [-1, 10, 20],type : 'filter',},
	],
	
}
