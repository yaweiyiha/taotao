
import elementDict from 'config/dict/product-dict'

urlConfig['fund/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品审核', url : '#main/product/maintenance' }, 
		'thirdTitle' : '基金产品审核',
	},
	'tabs' : [
		{ 'key': 'proEle', 'value': '产品要素'},
		{ 'key': 'CommiSet', 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'options' : {
		disable: true
	},
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
					[	elementDict.proTerm ,elementDict.distriDate],
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
					[	elementDict.yesterdayNet ,elementDict.sumNet],
				]
			},
			{	
				'formlist'   : [
					[	elementDict.customEle ],
				],
			},
			{
				'formlist': [
					[	elementDict.verifyConfirm	]
				]
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],

		[
			{	
				'panelName' : '产品介绍',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'10',
				'imgAttType':'10',
				'videoAttType':'20',
				'richAttType':'30',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '公司简介',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'40',
				'imgAttType':'40',
				'videoAttType':'50',
				'richAttType':'60',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '了解更多',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'70',
				'imgAttType':'70',
				'videoAttType':'80',
				'richAttType':'90',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	elementDict.relatedDoc  ],
				],
			},
		],
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',

}


urlConfig['trust/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '信托产品审核',
	},
	'tabs' : [
		{ 'key': 'proEle', 'value': '产品要素'},
		{ 'key': 'CommiSet', 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'options' : {
		disable: true
	},
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
						elementDict.proTerm ,
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
					[ 	elementDict.distributionWay],
					[	elementDict.yearRate	],
				]
			},
			{	
				'formlist'   : [
					[	elementDict.customEle ],
				],
			},
			{
				'formlist': [
					[	elementDict.verifyConfirm	]
				]
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
		[
			{	
				'panelName' : '产品介绍',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'10',
				'imgAttType':'10',
				'videoAttType':'20',
				'richAttType':'30',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '公司简介',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'40',
				'imgAttType':'40',
				'videoAttType':'50',
				'richAttType':'60',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '了解更多',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'70',
				'imgAttType':'70',
				'videoAttType':'80',
				'richAttType':'90',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	elementDict.relatedDoc  ],
				],
			},
		],

	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',
}

urlConfig['asset/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '资管产品审核',
	},
	'tabs' : [
		{ 'key': 'proEle', 'value': '产品要素'},
		{ 'key': 'CommiSet', 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'options' : {
		disable: true
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.proName, elementDict.investModeFk ],
					[   elementDict.distributor, elementDict.hoster	],
					[   elementDict.proDistriLocation],
					[   elementDict.investManager, elementDict.phone ]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	elementDict.foundStatus , elementDict.proStatus],
					[	elementDict.distriSize ,elementDict.unitFkIssureScale,elementDict.saleSize ,elementDict.unitFkOfferingSize,],
					[	elementDict.proTerm 
					],
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
					[ 	elementDict.distributionWay],
					[	elementDict.yearRate	],
					// [   elementDict.incomeComputeDay ,elementDict.fixedDay,elementDict.closeDay , elementDict.foundDay],
				]
			},
			{	
				'formlist'   : [
					[	elementDict.customEle ],
				],
			},
			{
				'formlist': [
					[	elementDict.verifyConfirm	]
				]
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
		[
			{	
				'panelName' : '产品介绍',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'10',
				'imgAttType':'10',
				'videoAttType':'20',
				'richAttType':'30',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '公司简介',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'40',
				'imgAttType':'40',
				'videoAttType':'50',
				'richAttType':'60',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '了解更多',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'70',
				'imgAttType':'70',
				'videoAttType':'80',
				'richAttType':'90',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	elementDict.relatedDoc  ],
				],
			},
		],
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',
}


urlConfig['debtassgin/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '债权转让产品审核',
	},
	'tabs' : [
		{ 'key': 'proEle', 'value': '产品要素'},
		{ 'key': 'CommiSet', 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'options' : {
		disable: true
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   elementDict.proName, elementDict.distributor ],
					[   elementDict.proTerm	],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
				    [	elementDict.distriSize, elementDict.unitFkIssureScale,elementDict.saleSize ,elementDict.unitFkOfferingSize],
					[	elementDict.purchaseAmount,elementDict.unitFkStartingPrice,elementDict.increasingAmount , elementDict.unitFkIncreasement],
					[	elementDict.maxInvestmentPrice , elementDict.unitFkOfMaxInvestmentPrice,elementDict.moneyType],
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[ 	elementDict.vipChoicenessDistributionWay],
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
				'formlist'   : [
					[	elementDict.customEle ],
				],
			},
			{
				'formlist': [
					[	elementDict.verifyConfirm	]
				]
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
		[
			{	
				'panelName' : '产品介绍',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'10',
				'imgAttType':'10',
				'videoAttType':'20',
				'richAttType':'30',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	elementDict.relatedDoc  ],
				],
			},
		],

	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',
}



urlConfig['equityInvestment/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '股权投资产品审核',
	},
	'tabs' : [
		{ 'key': 'proEle', 'value': '产品要素'},
		{ 'key': 'CommiSet', 'value': '佣金设置' },
		/*{ 'key': 'other' , 'value': '其他' },  */
	],
	'options' : {
		disable: true
	},
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
					[	elementDict.startPurchase ,elementDict.endPurchase],
					[	elementDict.moneyType ,elementDict.riskRant],
				],
			},
			{	
				'panelName' : '领头人',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	elementDict.collarCast, elementDict.collarCastNumber ],
					//[   elementDict.collarCastDesc  ]
				]
			},
			{	
				'formlist'   : [
					[	elementDict.customEle ],
				],
			},
			{
				'formlist': [
					[	elementDict.verifyConfirm	]
				]
			}
		],
		[
			{	
				'formlist'   : [
					[	elementDict.commissionType ],
				],
			},
		],
		[
			{	
				'panelName' : '产品介绍',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'10',
				'imgAttType':'10',
				'videoAttType':'20',
				'richAttType':'30',
				'formlist'   : [
					[	elementDict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	elementDict.relatedDoc  ],
				],
			},
		],
	],
	'detailUrl'    : 'product/verify/',
	'publishUrl' : 'product/saveVerify',
}


