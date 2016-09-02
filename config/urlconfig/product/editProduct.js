import Dict from 'config/dict/product-dict'

urlConfig['fund/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '编辑基金产品',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.distriSize, Dict.moneyUnit, Dict.yearIncome],
					[Dict.saleSize, Dict.moneyUnit, Dict.interestRate],
					[Dict.soled]
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.foundStatus],
					[Dict.proStatus]
				],
			},
			{	
				'panelName' : '其他',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.riskRant],
					[Dict.star],
				],
			},
		]
	],
	'url': 'product/edit/',
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'needback' : true
}

urlConfig['asset/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '编辑资管产品',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.soled ,Dict.yearIncome],
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.foundStatus ,Dict.proStatus],
				],
			},
			{	
				'panelName' : '其他',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.riskRant]
				],
			},
		]
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
}

urlConfig['trust/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '编辑信托产品',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.soled ],
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.riskRant ,Dict.foundStatus],
					[Dict.proStatus]
				],
			}
		]
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
}


urlConfig['debtassgin/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '编辑信托产品',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.proFoundDay ],
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.riskRant ,Dict.proStatus],
				],
			}
		]
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
}

urlConfig['equityInvestment/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '编辑股权投资产品',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.proFoundDay ],
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.riskRant ,Dict.proStatus],
				],
			}
		]
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
}