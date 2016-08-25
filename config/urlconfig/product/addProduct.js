
import elementDict from 'config/dict/product-dict'

urlConfig['fund/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增基金产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '资产设置' }, 
	],
	'forms' : [
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.proName, elementDict.fundType,elementDict.fundTypeUnit	],
					[   elementDict.fundStrategy,elementDict.secondStrategy, ],
					[   elementDict.distributor, elementDict.hoster	],
					[   elementDict.fundLeader,elementDict.fundManager],
					[   elementDict.trusteeFee ,elementDict.phone ],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.foundStatus , elementDict.proStatus],
					[	elementDict.distriSize ,elementDict.moneyUnit,elementDict.saleSize ,elementDict.moneyUnit,],
					[	elementDict.proTerm ,elementDict.distriDate],
					[	elementDict.purchaseAmount,elementDict.moneyUnit,elementDict.increasingAmount , elementDict.moneyUnit],
					[	elementDict.subscriptionFee ,elementDict.ManageFee],
					[	elementDict.redemptionFee, elementDict.compensationPay],
					[	elementDict.closedTime , elementDict.openDay,],
					[	elementDict.moneyType ,elementDict.riskRant],
					[   elementDict.incomeRant ]

				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	
						elementDict.yearIncome
					]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'add',
			}

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default',type : 'button',evt:'republic'},
	],

}

urlConfig['trust/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增信托产品',
		'key' : '产品维护',
		'subFun' : [
			{'key' : '保存' , evt :'save'},
			{'key' : '发布' , evt :'republic'},
		],
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '资产设置' }, 
	],
	'forms' : [
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	
						elementDict.productName, elementDict.trustType 
		            ],[
		                elementDict.distributor, elementDict.hoster	
					],[
						elementDict.distriArea,elementDict.phone
					]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	
						elementDict.foundStatus , elementDict.proStatus
					],[	
						elementDict.distriSize ,elementDict.moneyUnit,elementDict.saleSize ,elementDict.moneyUnit,
					],
					[	
						elementDict.proTerm ,elementDict.purchaseAmount,elementDict.moneyUnit,
					],
					[	
						elementDict.increasingAmount,elementDict.moneyUnit,
					],[	
						elementDict.buyBegintime ,elementDict.buyEndTime
					],[	
						elementDict.moneyType ,elementDict.riskRant
					],[
						elementDict.incomeRant
					]

				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	
						elementDict.yearIncome
					]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'add',
			}

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default',type : 'button',evt:'republic'},
	],


}
urlConfig['asset/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增资管产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '资产设置' }, 
	],
	'forms' : [
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.productName, elementDict.investType ],
					[   elementDict.distributor, elementDict.hoster	],
					[   elementDict.distriArea,elementDict.phone],
					[   elementDict.fundLeader, elementDict.phone ]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.foundStatus , elementDict.proStatus],
					[	elementDict.distriSize ,elementDict.moneyUnit,elementDict.saleSize ,elementDict.moneyUnit,],
					[	elementDict.proTerm ,elementDict.purchaseAmount,elementDict.moneyUnit],
					[	elementDict.purchaseAmount,elementDict.moneyUnit,elementDict.increasingAmount , elementDict.moneyUnit],
					[	elementDict.increasingAmount , elementDict.moneyUnit],
					[	elementDict.buyBegintime ,elementDict.buyEndTime],
					[	elementDict.subscriptionFee ,elementDict.ManageFee],
					[	elementDict.redemptionFee, elementDict.compensationPay],
					[	elementDict.closedTime , elementDict.openDay,],
					[	elementDict.moneyType ,elementDict.riskRant],
					[   elementDict.incomeRant ]
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.yearIncome ]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'add',
			}

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default',type : 'button',evt:'republic'},
	],

}

urlConfig['debtassgin/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增资管产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '资产设置' }, 
	],
	'forms' : [
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.productName, elementDict.distributor ],
					[   elementDict.proTerm	],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.purchaseAmount,elementDict.moneyUnit,elementDict.increasingAmount , elementDict.moneyUnit],
					[	elementDict.maxInvest , elementDict.moneyType],

					[	elementDict.moneyType ,elementDict.riskRant],
					[   elementDict.incomeRant ]
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.yearIncome ]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'add',
			}

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default',type : 'button',evt:'republic'},
	],

}

urlConfig['equityInvestment/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增股权投资产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '资产设置' }, 
	],
	'forms' : [
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.productName, elementDict.distributor ],
					[   elementDict.proArea , elementDict.financeAmount	],
					[   elementDict.stockRight ],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.purchaseAmount,elementDict.moneyUnit,elementDict.increasingAmount , elementDict.moneyUnit],
					[	elementDict.maxInvest , elementDict.moneyType],

					[	elementDict.moneyType ,elementDict.riskRant],
					[   elementDict.incomeRant ]
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.yearIncome ]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'add',
			}

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default',type : 'button',evt:'republic'},
	],

}


