urlConfig['distribut/maintenance'] =
 {
	'form' : {
		'tabs' : [],
		'head' : {
			subList : [
				{'key' : '待审核' },
				{'key' : '审核通过'},
				{'key' : '审核不通过'},
			]
		},
		'formlist' :[
			[
				{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-sm-4 pln' ,   type : 'input',placeholder : '请输入产品名称'},
				{ key :'orderNumber' ,name : '申请方', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入申请方'},
				{ name : '搜索', classList : 'search',type : 'button', evt : 'submit'},
			],
		],

		'buttonlist': [
			{name : '搜索', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
			{name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
		],

		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'产品名称', width:"8%" ,key : 'productName',type: 'nomal'},
			{ name :'申请方', width:"8%" ,key : 'agentName',type: 'nomal'},	
			{ name :'类型', width:"8%" ,key : 'productCategory', type: 'productCategory' },
			{ name :'申请额度', width:"8%" ,key: 'applyQuota',type: 'nomal' },
			{ name :'申请代销开始日', width:"8%" ,key: 'updateTime' ,  type: 'time' },
			{ name :'申请代销结束日', width:"8%" ,key: 'applyEndDate', type: 'time'},
			{ name :'状态', width:"8%" ,key: 'applyState',type: 'applyState'},
			{ name :'操作', width:"10%" ,key: 'operater', type: 'operater'},
		],
		'operater' : {
		    bindKey  : 'applyState',
		    operaterList : {
		    	10 : {	name: '签约审核' ,     url : '#distri/sign/validate'},
		    	20 : {	name: '查看签约状态',  url : '#distri/sign/reject' },
		    	30 : {	name: '查看签约状态' , url : '#distri/sign/reject' } ,
		    	40 : {	name: '查看签约状态',  url : '#distri/sign/done' }
		    },
		    param : 'id' ,
		},
		'url' : "agentsales/list",
		'param' : { 
			"name": null, "telephone": null, "address": null,"status": null,"pageNo": 1, "pageSize": 10
		 }
	},
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {name : '分销签约管理' ,url : ''},
		'key' : '产品维护',
	},
	'filters' : [
		{ key :'productName', name : '类型', wrapperClass : 'col-sm-6' , 
		  	options : ['全部','基金','资管','信托','债券转让','股权投资'] ,type : 'filter' },
		{ key :'customer', name : '申请状态',  wrapperClass : 'col-md-6',
			options : ['全部','签约审核','对方取消申请','代销已签约','取消签约'] ,type : 'filter'},
		// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},

	],
	'needback' : false
}
