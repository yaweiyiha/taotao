var elementDict = {
	'proName'  :  { key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
	'fundType' :  { key :'orderNumber' ,name : '基金类型', wrapperClass : 'col-md-3 prn ' ,  brd : true, type : 'select', 
				   options : ['证券','股票','风险投资','混合型','其他权益','类固收私募基金','私募股权基金','契约型基金'] ,isrequire : true},
	'fundTypeUnit' :  { key :'orderNumber' ,name : '', wrapperClass : 'col-md-2 pln ' , bln: true,   type : 'select', 
						options : ['契约','公司','有限合伙'] ,isrequire : true},	
	'fundStrategy' :  { key :'orderNumber' ,name : '基金策略', wrapperClass : 'col-md-5' ,   type : 'select', 
						options : ['股票策略','期货策略','债券策略','其他策略'],isrequire : true},
	'secondStrategy': { key :'orderNumber' ,name : '二级策略', wrapperClass : 'col-md-5' ,   type : 'select', 
						options : ['股票多头','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},								  		   
    'distributor' : { key :'orderNumber' ,name : '发行公司', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
 	'hoster'  :  { key :'orderNumber' ,name : '托管方', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['无','托管劵商','托管银行','第三方支付存管'],isrequire : true},
 	'fundLeader' : { key :'orderNumber' ,name : '基金经理', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
 	'fundManager' : { key :'productName', name : '基金管理人', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入基金管理人'},
 	'trusteeFee' : { key :'orderNumber' ,name : '托管费', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
 	'phone' : { key :'productName', name : '联系电话', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入联系电话'},					
 	'foundStatus' : { key :'orderNumber' ,name : '成立状态', wrapperClass : 'col-md-5' ,   type : 'select', 
					  options : ['募集中','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},
 	'proStatus' :	{ key :'orderNumber' ,name : '产品状态', wrapperClass : 'col-md-5' ,   type : 'select', 
					  options : ['预售','在售','售罄'],isrequire : true},
	'distriSize' : { key :'orderNumber' ,name : '发行规模', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'input', placeholder:'请输入发行规模',isrequire : true},
	'moneyUnit' :  { key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' ,   type : 'select', bln: true, 
					 options : ['万元','千元','百元','元']},
	'saleSize' : { key :'orderNumber' ,name : '可销售份额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'}, 				 
 	'proTerm' : { key :'orderNumber' ,name : '产品期限', wrapperClass : 'col-md-5' ,   type : 'select',placeholder : '请输入发行规模' ,
				  options : ['无'],isrequire : true},
 	'distriDate' : { key :'orderNumber' ,name : '发行日期', wrapperClass : 'col-md-5 ' ,  type : 'input', placeholder:'请输入发行规模',isrequire : true},
 	'purchaseAmount' : { key :'orderNumber' ,name : '起购金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
 	'increasingAmount' :{ key :'orderNumber' ,name : '递增金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
 	'subscriptionFee' : { key :'orderNumber' ,name : '认购费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'ManageFee' : { key :'orderNumber' ,name : '管理费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入管理费"},
 	'redemptionFee' : { key :'orderNumber' ,name : '赎回费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'compensationPay' :	{ key :'orderNumber' ,name : '业绩报酬', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
 	'closedTime' : { key :'orderNumber' ,name : '封闭期', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'openDay'	:{ key :'orderNumber' ,name : '开放日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
 	'moneyType' :  { key :'orderNumber' ,name : '币种', wrapperClass : 'col-md-5' ,   type : 'select', options : ['人民币','美元','英镑']},
	'riskRant' : { key :'orderNumber' ,name : '风险等级', wrapperClass : 'col-md-5' ,   type : 'select', options : ['高风险','美元','英镑']},
 	'incomeRant' : { key :'orderNumber' ,name : '收益评级', wrapperClass : 'col-md-5' ,   type : 'star'},
 	'yearIncome' : { key :'orderNumber' ,name : '年化收益率', wrapperClass : 'col-md-5' ,   type : 'select', options : ['请选择','美元','英镑']},
 	'trustType' : { key :'orderNumber' ,name : '信托类型', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['政信类','金融类','基础设施','工商企业','房地产','其他'],isrequire : true},
 	'distriArea' : 	{ key :'orderNumber' ,name : '产品发行地', wrapperClass : 'col-md-5' ,   type : 'select', 
					  options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
 	'buyBegintime'	: { key :'orderNumber' ,name : '购买起始日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'buyEndTime'	: { key :'orderNumber' ,name : '购买截止日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入管理费"},
 }

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
						{ key :'orderNumber' ,name : '产品状态', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['预售','在售','售罄'],isrequire : true},
						{ key :'orderNumber' ,name : '年化收益率', wrapperClass : 'col-md-5' ,   type : 'select', options : ['请选择','美元','英镑']},
					]
				]
			},
			{	
				'panelName' : '添加自定义要素',
				'subFun' : 'add',
			}

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
					[	
						{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
						{ key :'orderNumber' ,name : '投资方式', wrapperClass : 'col-md-5 ' , type : 'select', 
						  options : ['信托贷款','股权投资','权益投资','证券投资','组合运用','其他投资','量化对冲投资','结构化投资','海外投资'] ,isrequire : true},
		            ],[
		            	{ key :'orderNumber' ,name : '发行公司', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
		                { key :'orderNumber' ,name : '托管方', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['无','托管劵商','托管银行','第三方支付存管'],isrequire : true},
					],[
						{ key :'orderNumber' ,name : '产品发行地', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
					],[
						{ key :'orderNumber' ,name : '投资经理', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
						{ key :'productName', name : '联系电话', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入联系电话'},	
					]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	
						{ key :'orderNumber' ,name : '成立状态', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['募集中','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},
						{ key :'orderNumber' ,name : '产品状态', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['预售','在售','售罄'],isrequire : true}
					],[	
						{ key :'orderNumber' ,name : '发行规模', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'input', placeholder:'请输入发行规模',isrequire : true},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' ,   type : 'select', bln: true, 
						 options : ['万元','千元','百元','元']},
						{ key :'orderNumber' ,name : '可销售份额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' , bln: true,  type : 'select',
						 options : ['万元','千元','百元','元']},
					],
					[	
						{ key :'orderNumber' ,name : '产品期限', wrapperClass : 'col-md-5' ,   type : 'select',placeholder : '请输入发行规模' ,
					      options : ['无'],isrequire : true},
					    { key :'orderNumber' ,name : '起购金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' , bln: true,  type : 'select',
						 options : ['万元','千元','百元','元']},
					],
					[	
						
						{ key :'orderNumber' ,name : '递增金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' , bln: true,  type : 'select',
						 options : ['万元','千元','百元','元']},
					],[	
						{ key :'orderNumber' ,name : '购买起始日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
						{ key :'orderNumber' ,name : '购买截止日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入管理费"},
					],[	
						{ key :'orderNumber' ,name : '认购费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
						{ key :'orderNumber' ,name : '管理费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入管理费"},
					],[	
						{ key :'orderNumber' ,name : '赎回费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
						{ key :'orderNumber' ,name : '业绩报酬', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
					],[	
						{ key :'orderNumber' ,name : '封闭期', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
						{ key :'orderNumber' ,name : '开放日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
					],[	
						{ key :'orderNumber' ,name : '币种', wrapperClass : 'col-md-5' ,   type : 'select', options : ['人民币','美元','港币','其他']},
						{ key :'orderNumber' ,name : '风险等级', wrapperClass : 'col-md-5',  type : 'select', options : ['高风险','中风险','低风险']},
					],[
						{ key :'orderNumber' ,name : '收益评级', wrapperClass : 'col-md-5' ,   type : 'star'},
					]

				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	
						{ key :'orderNumber' ,name : '产品状态', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['预售','在售','售罄'],isrequire : true},
						{ key :'orderNumber' ,name : '年化收益率', wrapperClass : 'col-md-5' ,   type : 'select', options : ['请选择','美元','英镑']},
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


