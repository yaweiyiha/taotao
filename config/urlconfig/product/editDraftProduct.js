
import Dict from 'config/dict/product-dict'

urlConfig['fund/draftedit'] =
{
	'topbanner' : {
		'title'      : '产品管理',
		'subtitle'   : {'name': '产品维护', 'url' : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑基金产品',
	},
	'tabs' : [
		{ 'key': 'proEle'  , 'value': '产品要素' },
		{ 'key': 'CommiSet', 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'forms' : [
		// correspond proEle 
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					/******************************************/
					[   Dict.proName       , Dict.fundType     ,
					    Dict.fundTypeUnit ],
					/******************************************/
					[   Dict.fundStrategy ],
					[   Dict.distributor   , Dict.hoster	  ],
					[   Dict.fundLeader    , Dict.fundManager ],
					[   Dict.trusteeFee    , Dict.phone       ],
				],
			},
			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
                    /***************************************************/
					[	Dict.foundStatus      , Dict.proStatus          ],
					/***************************************************/
					[	Dict.distriSize       , Dict.unitFkIssureScale   , 
					    Dict.saleSize         , Dict.unitFkOfferingSize ],
					/***************************************************/
					[	Dict.proTerm          , Dict.distriDate         ],
					/***************************************************/
					[	Dict.purchaseAmount   , Dict.unitFkStartingPrice , 
					    Dict.increasingAmount , Dict.unitFkIncreasement ],
					/***************************************************/
					[	Dict.subscriptionFee  , Dict.ManageFee          ],
					[	Dict.redemptionFee    , Dict.compensationPay    ],
					[	Dict.closedTime       , Dict.openDay            ],
					[	Dict.moneyType        , Dict.riskRant           ],
					[   Dict.incomeRant ]
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	Dict.yearRate	],
					[	Dict.yesterdayNet ,Dict.sumNet],
				]
			},
			{	
				'formlist'   : [
					[	Dict.customEle  ],
				],
			},
		],
		// correspond CommiSet 
		[
			{	
				'formlist'   : [
					[	Dict.commissionType  ],
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
					[	Dict.presentType ],
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
					[	Dict.presentType ],
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
					[	Dict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	Dict.relatedDoc  ],
				],
			},
		],
	],
	'buttonlist': [
		{ 'name' :'发布', 'classList' : 'primary'     , 'type' :'button', 'evt' :'release' , 'productCategories' : 10 },
		{ 'name' :'保存', 'classList' : 'default ml10', 'type' :'button', 'evt' :'save'    , 'productCategories' : 10},

	],
	'url'            : 'product/draftEdit',
	'saveUrl'        : 'product/save',
	'publishUrl'     : 'product/publish',
	//flat data when it is nested, default is false 
	'useProcessData' : true

}

urlConfig['trust/draftedit'] =
{
	'topbanner' : {
		'title'      : '产品管理',
		'subtitle'   : {'name': '产品维护', 'url' : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑信托产品',
	},
	'tabs' : [
		{ 'key': 'proEle'   , 'value': '产品要素' },
		{ 'key': 'CommiSet' , 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' },*/ 
	],
	'forms' : [
		// correspond proEle
		[
			{	
				'panelName'  : '基本信息',
				'descTitle'  : '(*为必填)',
				'formlist'   : [
					[	Dict.proName           , Dict.industryTypeFk ],
					[   Dict.distributor       , Dict.hoster	     ],
					[   Dict.proDistriLocation , Dict.phone          ]
				],
			},

			{	
				'panelName'  : '购买信息',
				'descTitle'  : '(*为必填)',
				'formlist'   : [
					/***************************************************/
					[	Dict.foundStatus      , Dict.proStatus          ],
					/***************************************************/
					[	Dict.distriSize       , Dict.unitFkIssureScale   , 
					    Dict.saleSize         , Dict.unitFkOfferingSize ],
					/***************************************************/
					[	Dict.proTerm         ],
					/***************************************************/
					[	Dict.purchaseAmount   , Dict.unitFkStartingPrice ,
					    Dict.increasingAmount , Dict.unitFkIncreasement ],
					/***************************************************/
					[	Dict.buyBegintime     , Dict.buyEndTime         ],
					[	Dict.moneyType        , Dict.riskRant           ],
					[   Dict.incomeRant      ],

				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[ 	Dict.distributionWay ],
					[	Dict.yearRate	     ],
				]
			},
			{	
				'formlist'   : [
					[	Dict.customEle       ],
				],
			},
		],
		// correspond CommiSet 
		[
			{	
				'formlist'   : [
					[	Dict.commissionType ],
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
					[	Dict.presentType ],
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
					[	Dict.presentType ],
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
					[	Dict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	Dict.relatedDoc  ],
				],
			},
		],
	],
	'buttonlist': [
		{ 'name' :'发布', 'classList' :'primary'     , 'type' :'button', 'evt' :'release' , 'productCategories' :40},
		{ 'name' :'保存', 'classList' :'default ml10', 'type' :'button', 'evt' :'save'     , 'productCategories' :40},
	],
	'url'            : 'product/draftEdit',
	'saveUrl'        : 'product/save',
	'publishUrl'     : 'product/publish',
	//flat data when it is nested, default is false 
	'useProcessData' : true
}
urlConfig['asset/draftedit'] =
{
	'topbanner' : {
		'title'      : '产品管理',
		'subtitle'   : {'name': '产品维护', 'url' : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑资管产品',
	},
	'tabs' : [
		{ 'key': 'proEle'   , 'value': '产品要素'},
		{ 'key': 'CommiSet' , 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'forms' : [
		// correspond proEle
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   Dict.proName, Dict.investModeFk ],
					[   Dict.distributor, Dict.hoster	],
					[   Dict.proDistriLocation          ],
					[   Dict.investManager, Dict.phone  ]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					/***************************************************/
					[	Dict.foundStatus      , Dict.proStatus          ],
					/***************************************************/
					[	Dict.distriSize       , Dict.unitFkIssureScale   ,
					    Dict.saleSize         , Dict.unitFkOfferingSize ],
					/***************************************************/
					[	Dict.proTerm         ],
					/***************************************************/
					[	Dict.purchaseAmount   , Dict.unitFkStartingPrice ,
					    Dict.increasingAmount , Dict.unitFkIncreasement ],
					/***************************************************/
					[	Dict.buyBegintime     , Dict.buyEndTime         ],
					[	Dict.subscriptionFee  , Dict.ManageFee          ],
					[	Dict.redemptionFee    , Dict.compensationPay    ],
					[	Dict.closedTime       , Dict.openDay            ],
					[	Dict.moneyType        , Dict.riskRant           ],
					[   Dict.incomeRant  ]
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[ 	Dict.distributionWay ],
					[	Dict.yearRate	     ],
				]
			},
			{	
				'formlist'   : [
					[	Dict.customEle       ],
				],
			},
		],
		// correspond CommiSet 
		[
			{	
				'formlist'   : [
					[	Dict.commissionType ],
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
					[	Dict.presentType ],
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
					[	Dict.presentType ],
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
					[	Dict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	Dict.relatedDoc  ],
				],
			},
		],
	],
	'buttonlist': [
		{ 'name' : '发布', 'classList' : 'primary'     , 'type' : 'button', 'evt' :'release' , 'productCategories' :30 },
		{ 'name' : '保存', 'classList' : 'default ml10', 'type' : 'button', 'evt' :'save'    , 'productCategories' :30 },
	],
	'url'            : 'product/draftEdit',
	'saveUrl'        : 'product/save',
	'publishUrl'     : 'product/publish',
	//flat data when it is nested, default is false 
	'useProcessData' : true
}

urlConfig['debtassgin/draftedit'] =
{
	'topbanner' : {
		'title'      : '产品管理',
		'subtitle'   : {'name': '产品维护', 'url' : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑债权转让产品',
	},
	'tabs' : [
		{ 'key': 'proEle'   , 'value': '产品要素'},
		{ 'key': 'CommiSet' , 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'forms' : [
		// correspond proEle
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[   Dict.proName     , Dict.distributor ],
					[   Dict.proTerm	],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					/************************************************************/
				    [	Dict.distriSize         , Dict.unitFkIssureScale          ,
				    	Dict.saleSize           , Dict.unitFkOfferingSize        ],
				    /************************************************************/
					[	Dict.purchaseAmount     , Dict.unitFkStartingPrice        ,
					    Dict.increasingAmount   , Dict.unitFkIncreasement        ],
					/************************************************************/
					[	Dict.maxInvestmentPrice , Dict.unitFkOfMaxInvestmentPrice ,
					    Dict.moneyType         ],
				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[ 	Dict.vipChoicenessDistributionWay ],
					[	Dict.yearRate	],
				]
			},
			{
				'panelName' : '其他',
				'formlist'   : [
					[	Dict.isRiskRating, Dict.riskRant	],
				]
			},
			{	
				'formlist'   : [
					[	Dict.customEle  ],
				],
			},
		],
		// correspond CommiSet 
		[
			{	
				'formlist'   : [
					[	Dict.commissionType ],
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
					[	Dict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	Dict.relatedDoc  ],
				],
			},
		],

	],
	'buttonlist': [
		{ 'name' :'发布', 'classList' :'primary'      , 'type' :'button', 'evt' :'release', 'productCategories' :60 },
		{ 'name' :'保存', 'classList' :'default ml10' , 'type' :'button', 'evt' :'save'   , 'productCategories' :60 },
	],
	'url'            : 'product/draftEdit',
	'saveUrl'        : 'product/save',
	'publishUrl'     : 'product/publish',
	//flat data when it is nested, default is false 
	'useProcessData' : true
}

urlConfig['equityInvestment/draftedit'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
		'thirdTitle' : '编辑股权投资产品',
	},
	'tabs' : [
		{ 'key': 'proEle'   , 'value': '产品要素'},
		{ 'key': 'CommiSet' , 'value': '佣金设置' }, 
		/*{ 'key': 'other' , 'value': '其他' }, */
	],
	'forms' : [
		// correspond proEle
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					/*************************************************/
					[   Dict.proName             , Dict.distributor ],
					/*************************************************/
					[   Dict.proLocation         , Dict.financeAmount,
					    Dict.unitFkIssureScale	],
					/*************************************************/
					[   Dict.stockRight         ],
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					/**************************************************/
					[	Dict.saleSize      , Dict.unitFkOfferingSize   ,
					    Dict.purchaseAmount, Dict.unitFkStartingPrice ],
					/**************************************************/
					[	Dict.startPurchase , Dict.endPurchase         ],
					[	Dict.moneyType     , Dict.riskRant            ],
				],
			},
			{	
				'panelName' : '领头人',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	Dict.collarCast    , Dict.collarCastNumber ]
				]
			},
			{	
				'formlist'   : [
					[	Dict.customEle     ],
				],
			},
		],
		// correspond CommiSet 
		[
			{	
				'formlist'   : [
					[	Dict.commissionType ],
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
					[	Dict.presentType ],
				],
			},
			{	
				'panelName' : '相关文件',
				'padShowName': {isHide:'1',key:'padName'},
				'receptionShow': {isHide:'1',key:'isShow'},
				'intrType':'100',
				'relateAttType':'100',
				'formlist'   : [
					[	Dict.relatedDoc  ],
				],
			},
		],
	],
	'buttonlist': [
		{ 'name' :'发布', 'classList' :'primary'     , 'type' :'button', 'evt' :'release', 'productCategories' :70 },
		{ 'name' :'保存', 'classList' :'default ml10', 'type' :'button', 'evt' :'save'   , 'productCategories' :70 },
	],
	'url'            : 'product/draftEdit',
	'saveUrl'        : 'product/save',
	'publishUrl'     : 'product/publish',
	//flat data when it is nested, default is false 
	'useProcessData' : true
}


