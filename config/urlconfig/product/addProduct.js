
import elementDict from 'config/dict/product-dict'

urlConfig['fund/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '新增基金产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '佣金设置' }, 
	],
	'forms' : [

		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [

					[   elementDict.proName, elementDict.fundType,elementDict.fundTypeUnit	],
					[   elementDict.fundStrategy],
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
					[	elementDict.distriSize ,elementDict.unitFkIssureScale,elementDict.saleSize ,elementDict.unitFkOfferingSize,],
					[	elementDict.proTerm ,elementDict.unitFkMaturities ,elementDict.distriDate],
					[	elementDict.purchaseAmount,elementDict.unitFkStartingPrice,elementDict.increasingAmount , elementDict.unitFkIncreasement],
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
					[	elementDict.yearRate	],
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'addSelfEle',
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
	],
	'buttonlist': [
		{name : '发布',classList : 'primary',type : 'button',evt:'republic' ,'productCategories' :10 },
		{name : '保存',classList : 'default ml10', type : 'button', evt : 'save' ,'productCategories':10},

	],
	'saveUrl'    : 'product/save',
	'publishUrl' : 'product/publish',

}

urlConfig['trust/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '新增信托产品',
		'key' : '产品维护',
		'subFun' : [
			{'key' : '保存' , evt :'save'},
			{'key' : '发布' , evt :'republic'},
		],
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '佣金设置' }, 
	],
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	
						elementDict.proName, elementDict.industryTypeFk 
		            ],[
		                elementDict.distributor, elementDict.hoster	
					],[
						elementDict.proDistriLocation,elementDict.phone
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
						elementDict.distriSize ,elementDict.unitFkIssureScale,elementDict.saleSize ,elementDict.unitFkOfferingSize,
					],
					[	
						elementDict.proTerm ,elementDict.unitFkMaturities,
					],
					[	
						elementDict.purchaseAmount,elementDict.unitFkStartingPrice,elementDict.increasingAmount,elementDict.unitFkIncreasement,
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
					[ 	elementDict.incomeDistriType ,elementDict.incomeDistirCycle ,elementDict.incomeDistirUnit],
					[	elementDict.yearRate	],
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'addSelfEle',
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save','productCategories' :40 },
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic','productCategories' :40 },
	],
	'saveUrl'    : 'product/save',
	'publishUrl' : 'product/publish',
}
urlConfig['asset/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '新增资管产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '佣金设置' }, 
	],
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.proName, elementDict.investModeFk ],
					[   elementDict.distributor, elementDict.hoster	],
					[   elementDict.distriArea],
					[   elementDict.investManager, elementDict.phone ]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.foundStatus , elementDict.proStatus],
					[	elementDict.distriSize ,elementDict.unitFkIssureScale,elementDict.saleSize ,elementDict.unitFkOfferingSize,],
					[	elementDict.proTerm ,elementDict.unitFkMaturities,],
					[	elementDict.purchaseAmount,elementDict.unitFkStartingPrice,elementDict.increasingAmount , elementDict.unitFkIncreasement],
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
					[ 	elementDict.incomeDistriType ,elementDict.incomeDistirCycle ,elementDict.incomeDistirUnit],
					[	elementDict.yearRate	],
					// [   elementDict.incomeComputeDay ,elementDict.fixedDay,elementDict.closeDay , elementDict.foundDay],
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'addSelfEle',
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save', 'productCategories' :30 },
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic', 'productCategories' :30 },
	],
	'saveUrl'    : 'product/save',
	'publishUrl' : 'product/publish',
}

urlConfig['debtassgin/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '新增债券转让产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '佣金设置' }, 
	],
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.proName, elementDict.distributor ],
					[   elementDict.proTerm	,elementDict.unitFkMaturities],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
				    [elementDict.distriSize,elementDict.unitFkIssureScale,elementDict.saleSize ,elementDict.unitFkOfferingSize,]
					[	elementDict.purchaseAmount,elementDict.unitFkStartingPrice,elementDict.increasingAmount , elementDict.unitFkIncreasement],
					[	elementDict.maxInvest , elementDict.moneyType],
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.yearRate	],
				]
			},
			{
				'panelName' : '其他',
				'formlist'   : [
					[	elementDict.isRiskRating, elementDict.riskRant	],
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'addSelfEle',
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save', 'productCategories' :60 },
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic', 'productCategories' :60 },
	],
	'saveUrl'    : 'product/save',
	'publishUrl' : 'product/publish',
}

urlConfig['equityInvestment/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '新增股权投资产品',
		'key' : '产品维护',
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'CommiSet', value: '佣金设置' }, 
	],
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.proName, elementDict.distributor ],
					[   elementDict.proLocation , elementDict.financeAmount,elementDict.unitFkIssureScale	],
					[   elementDict.stockRight ],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.saleSize ,elementDict.unitFkOfferingSize,elementDict.purchaseAmount,elementDict.unitFkStartingPrice],
					[	elementDict.moneyType ,elementDict.riskRant],
				],
			},
			{	
				'panelName' : '领头人',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.collarCast, elementDict.collarCastNumber ],
					[   elementDict.collarCastDesc  ]
				]
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.yearRate ]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'addSelfEle',
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save','productCategories' :70 },
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic','productCategories' :70 },
	],
	'saveUrl'    : 'product/save',
	'publishUrl' : 'product/publish',
}


