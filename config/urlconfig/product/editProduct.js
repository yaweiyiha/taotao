import Dict from 'config/dict/product-dict'

urlConfig['fund/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑基金产品',
	},
	'forms' : [
		[
			{	
				'panelName' : '销售信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					// [Dict.distriSize, Dict.unitFkIssureScale, Dict.yearIncome],
					[Dict.distriSize, Dict.unitFkIssureScale, Dict.interestRate],
					[Dict.saleSize, Dict.unitFkOfferingSize, Dict.soled],
					[Dict.yearRate]
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.foundStatus],
					[Dict.showStatus]
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
	'submitUrl' : 'product/edit/fundSave',
	'buttons': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'submit'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
}

urlConfig['asset/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑资管产品',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					// [Dict.soled ,Dict.yearIncome],
					[Dict.soled ],
					[Dict.yearRate]
				],
			},
			{	
				'panelName' : '状态',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[Dict.foundStatus ],
					[Dict.riskRant],
					[Dict.showStatus]

				],
			},
			{	
				'panelName' : '其他',
				'descTitle' : '(*为必填)',
				'formlist'   : [

				],
			},
		]
	],
	'buttons': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'submit'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
	'submitUrl' : 'product/edit/assetSave',
}

urlConfig['trust/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
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
	'buttons': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'submit'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
	'submitUrl' : 'product/edit/trustSave',
}


urlConfig['debtassgin/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑债权转让产品',
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
					[Dict.isRiskRating ,Dict.riskRant ],
					[ Dict.foundStatus],
					[ Dict.showStatus]

				],
			}
		]
	],
	'buttons': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'submit'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
	'submitUrl' : 'product/edit/vipChoicenessSave',
}

urlConfig['equityInvestment/edit'] = {
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
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
					[ Dict.riskRant ],
					[ Dict.foundStatus],
					[ Dict.showStatus]
				],
			}
		]
	],
	'buttons': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'submit'},
		{name : '取消',classList : 'default',type : 'button',evt:'cancel'},
	],
	'url': 'product/edit/',
	'submitUrl' : 'product/edit/equityInvestmentSave'
}