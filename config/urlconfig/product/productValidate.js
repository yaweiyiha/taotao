
import elementDict from 'config/dict/product-dict'

urlConfig['fund/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品审核', url : '#main/product/maintenance' }, 
		'thirdTitle' : '基金产品审核',
		'key' : '产品审核',
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
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',

}

urlConfig['trust/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品审核', url : '#main/product/maintenance' }, 
		'thirdTitle' : '信托产品审核',
		'key' : '产品审核',
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
						elementDict.distriSize ,elementDict.moneyUnit,elementDict.saleSize ,elementDict.unitFkOfferingSize,
					],
					[	
						elementDict.proTerm ,elementDict.unitFkMaturities,elementDict.purchaseAmount,elementDict.moneyUnit,
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
					[	elementDict.productCommSet ],
				],
			},
		],

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic'},
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',


}
urlConfig['asset/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品审核', url : '#main/product/maintenance' }, 
		'thirdTitle' : '资管产品审核',
		'key' : '产品审核',
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
					[	elementDict.proTerm ,elementDict.termUnit,elementDict.purchaseAmount,elementDict.moneyUnit],
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
					[ 	elementDict.incomeDistriType ,elementDict.incomeDistirCycle ,elementDict.incomeDistirUnit],
					[	elementDict.yearRate	],
					[   elementDict.incomeComputeDay ,elementDict.fixedDay,elementDict.closeDay , elementDict.foundDay],
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
					[	elementDict.productCommSet ],
				],
			},
		],

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic'},
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',

}

urlConfig['debtassgin/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品审核', url : '#main/product/maintenance' }, 
		'thirdTitle' : '股权转让产品审核',
		'key' : '产品审核',
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
					[   elementDict.productName, elementDict.distributor ],
					[   elementDict.proTerm	,elementDict.termUnit],
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
					[	elementDict.productCommSet ],
				],
			},
		],

	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic'},
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',

}

urlConfig['equityInvestment/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品审核', url : '#main/product/maintenance' }, 
		'thirdTitle' : '股权投资产品审核',
		'key' : '产品审核',
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
					[	elementDict.productCommSet ],
				],
			},
		],
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
		{name : '发布',classList : 'default ml10',type : 'button',evt:'republic'},
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',

}


