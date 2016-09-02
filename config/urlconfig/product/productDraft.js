urlConfig['product/draft'] =
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

				// { key :'orderNumber' ,name : '上架时间', wrapperClass : 'col-sm-4' ,   type : 'input'},
				{name : '搜索', classList : 'search',type : 'button', evt : 'submit'},
			],
		],

		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'产品名称', width:"8%" ,key : 'name' ,type:'nomal'},
			{ name :'类型', width:"8%" ,key : 'categoryName',type:'nomal'},
			{ name :'产品状态', width:"8%",key : 'salesStatusName' ,type:'nomal'},
			{ name :'操作', width:"10%" ,key: 'operater', type: 'operater'},
		],
		'url' : "product/maintenance/list",
		'param' : { 
			"exclude": 0, "pageNo": 1, "pageSize": 10 ,'statusId' : 10
		 },
		'alwaysParam' : {"exclude": 0 ,'statusId' : 10},
		'operater' : {
			operaterList: [
				[
					{
			 			content: {
				 			name: ['编辑'],
				 			url: ['#addPro/sign/reject/', '{{ INTERFACE_DATA(id) }}']
			 			}
					}
				],
				[
					{
			 			content: {
				 			name: ['提交审核'],
				 			url: ['#distri/sign/reject/', '{{ INTERFACE_DATA(id) }}']
			 			}
					}
				]
			]
		}
	},
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {name : '产品维护' ,url : '#main/product/maintenance'},
		'thirdTitle' : '草稿箱',
		'key' : '产品维护',
	},
	'filters' : [
		{ key :'categoryId', name : '产品类型', wrapperClass : 'col-sm-6' , 
			options : ['全部','基金','资管','信托','债权转让','股权投资'] , values: [-1, 10, 30, 40, 60, 70],type : 'filter'  },
		// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},
	]
}
