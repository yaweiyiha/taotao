/**
 *  product draft list (come from add product to save it)
 *  support : 1. search product by name 
 *            2. filter product by product type 
 *            3. edit draft 
 *  tip : draft datas needs a speicial parameter 'statusId', 
 *        it meanning draft when it equals 10
 */
urlConfig['product/draft'] =
 {
	'form' : {
		'tabs' : [],
		'formlist' :[
			[ 	
				{ 'key'  :'name'  , 'name' : '产品名称', 'wrapperClass' : 'col-sm-4 pln' , 'type': 'input' ,'placeholder' : '请输入产品名称'},
				{ 'name' : '搜索' , 'classList' : 'search','type' : 'button', 'evt' : 'submit'},
			],
		],

		'type'    : 'effective',
		'host'    : 'index.html#main/',
		'tables'  : [
			{ 'name' :'产品名称', 'width' :"8%" , 'key' :'name'        , 'type' :'pro'     },
			{ 'name' :'提交人'  , 'width' :"8%" , 'key' :'creatorName' , 'type' :'nomal'   },
			{ 'name' :'类型'    , 'width' :"8%" , 'key' :'categoryName', 'type' :'nomal'   },
			{ 'name' :'保存日期', 'width' :"8%" , 'key' :'updateTime'  , 'type' :'time'    },
			{ 'name' :'操作'    , 'width' :"10%", 'key' :'operater'    , 'type' :'operater'},
		],
		'url'    : "product/maintenance/list",
		'param'  : { 
			"pageNo": 1, "pageSize": 10 ,'statusId' : 10
		 },
		'alwaysParam' : {"exclude": 0 ,'statusId' : 10},
		'hasProductUrl' : true,
		'operater' : {
		 	'pageDict': {
		 		'10': 'fund',
		 		'30': 'asset',
		 		'40': 'trust',
		 		'60': 'debtassgin',
		 		'70': 'equityInvestment'
		 	},
			'operaterList': [
				[
					{
			 			'content': {
				 			'name' : ['编辑'],
				 			'url'  : ['#addPro/', '{{ DICT(categoryId, pageDict)}}', '/draftedit?id=', '{{ INTERFACE_DATA(id) }}']
			 			}
					}
				]
			]
		}
	},
	'topbanner' : {
		'title'         : '产品管理',
		'subtitle'      : { 'name' : '产品维护' , 'url' : '#main/product/maintenance'},
		'thirdTitle'    : '草稿箱',
		'isDrafts'      : { 'draftStatus' : 10},
		'classDrafts'   : { 'classList':'draftsSty'},
	},
	'filters' : [
		{ 'key' :'categoryId', 'name' : '产品类型', 'wrapperClass' : 'col-sm-6' , 
			'options' : ['全部','基金','资管','信托','债权转让','股权投资'] , 'values': [-1, 10, 30, 40, 60, 70],'type' : 'filter' },
	],
}
