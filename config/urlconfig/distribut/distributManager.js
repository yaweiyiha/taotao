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
				{ key :'productName' ,name : '产品名称', wrapperClass : 'col-sm-4 pln' ,   type : 'input',placeholder : '请输入产品名称'},
				{ key :'agentName' ,name : '申请方', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入申请方'},
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
			{ name :'产品名称', width:"8%" ,key : 'productName',type: 'pro'},
			{ name :'申请方', width:"8%" ,key : 'agentName',type: 'nomal'},	
			{ name :'类型', width:"8%" ,key : 'productCategory', type: 'productCategory' },
			{ name :'申请额度', width:"8%" ,key: 'applyQuota',type: 'nomal' },
			{ name :'申请代销开始日', width:"8%" ,key: 'updateTime' ,  type: 'time' },
			{ name :'申请代销结束日', width:"8%" ,key: 'applyEndDate', type: 'time'},
			{ name :'状态', width:"8%" ,key: 'applyState',type: 'applyState'},
			{ name :'操作', width:"10%" ,key: 'operater', type: 'operater'},
		],
		'hasProductUrl' : true,
		'operater' : {
		    applyStateDict: {
		 		'10': '签约审核',
		 		'20': '查看签约状态',
		 		'30': '查看签约状态',
		 		'40': '查看签约状态'
		    },
		    operaterList: [
		    	[
		    		{
			 			condition: '{{ equal(applyState, 10) }}',
			 			content: {
				 			name: ['{{ DICT(applyState, applyStateDict) }}'],
				 			url: ['#distri/sign/validate?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
		    		},
		    		{
			 			condition: '{{ equal(applyState, 20) }}',
			 			content: {
				 			name: ['{{ DICT(applyState, applyStateDict) }}'],
				 			url: ['#distri/sign/reject?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
		    		},
		    		{
			 			condition: '{{ equal(applyState, 30) }}',
			 			content: {
				 			name: ['{{ DICT(applyState, applyStateDict) }}'],
				 			url: ['#distri/sign/reject?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
		    		},
		    		{
			 			condition: '{{ equal(applyState, 40) }}',
			 			content: {
				 			name: ['{{ DICT(applyState, applyStateDict) }}'],
				 			url: ['#distri/sign/done?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
		    		}
		    	]
		    ]
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
		{ key :'productCategoryId', name : '类型', wrapperClass : 'col-sm-6' , 
		  	options : ['全部','基金','资管','信托','债券转让','股权投资'], values: [-1, 10, 30, 40, 60, 70], type : 'filter' },
		{ key :'applyState', name : '状态',  wrapperClass : 'col-md-6',
			options : ['全部','签约完成','代销方发起签约','代销方取消','委托方取消'], values: [-1, 40, 10, 20, 30] ,type : 'filter'},
		// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},

	],
	'needback' : false
}
