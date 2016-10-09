export default {

	'proName' :  { 
		key :'name' ,
	  	name : '产品名称', 
	  	wrapperClass : 'col-md-6' ,   
	  	type : 'input',
	  	placeholder : '请输入产品简称',
	  	validate:{isrequire : true} 
	},

	'fundType' :  { 
		key :'fundGenreAFk' ,
		name : '基金类型', 
		wrapperClass : 'col-md-4 prn ' ,  
		brd : true, 
		type : 'select', 	   		
		options : ['证券','股权','风险投资','混合型','其他权益','类固收私募基金','私募股权基金','契约型基金'] ,
		value : [500,510,520,530,540,550,560,570],
		isNum : 1 ,
		validate:{isrequire : true}
	},

	'fundTypeUnit' :  { 
		key :'fundGenreBFk' ,
		name : '', 
		wrapperClass : 'col-md-2 pln ' , 
		bln: true,   
		type : 'select', 
		options : ['契约','公司','有限合伙'] ,
		validate: {isrequire : true},
		value : [700,710,720] , 
		isNum : 1
	},	
    'distributor' :  { 
    	key :'publisherFk' ,
    	name : '发行公司', 
    	wrapperClass : 'col-md-6' ,   
    	type : 'select', 
    	validate:{isrequire : true},
    	isNum : 1
    },
 	'fundLeader' :  { 
 		key :'fundManager' ,
 		name : '基金经理', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入基金经理',
 		validate: {isrequire : false}
 	},
 	'fundManager' :  { 
 		key :'fundManagerCompany', 
 		name : '基金管理人', 
 		wrapperClass : 'col-md-6' , 
 		type : 'input' ,
 		placeholder : '请输入基金管理人',
 		validate: {isrequire : false}
 	},
 	'trusteeFee' :  { 
 		key :'fundCustodianCharges' ,
 		name : '托管费', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入托管费',
 		validate: {isrequire : false}
 	},
 	'phone' :  { 
 		key :'serviceTel', 
 		name : '联系电话', 
 		wrapperClass : 'col-md-6' , 
 		type : 'input' ,
 		placeholder : '请输入联系电话',
 		validate: {isPhone: true}
 	},					

	'executeState' :  { 
		key :'executeState' ,
		name : '执行中', 
		wrapperClass : 'col-md-6' ,  
		type : 'radios',
		radios : [{'name': '已结束','checked' : 'checked'},{'name' : '执行中'} ],
		validate: {isrequire : true}
	},
	'distriSize' :  {
		key :'issureScale' ,
		name : '发行规模', 
		wrapperClass : 'col-md-4 prn ' ,  
		brd : true, 
		type : 'input', 
		placeholder:'请输入发行规模', 
		validate: {isNumber : true}
	},
	'unitFkOfferingSize':  { 
		key :'unitFkOfferingSize' ,
		name : '', 
		wrapperClass : 'col-md-2 pln' ,   
		type : 'select', 
		bln: true, 
		options : ['元','万元','亿元'],
		value : [1100,1200,1300] , 
		isNum : 1,
		validate: {isrequire : false}
	},
	'unitFkIssureScale' :  { 
		key :'unitFkIssureScale' ,
		name : '', 
		wrapperClass : 'col-md-2 pln' ,   
		type : 'select', 
		bln: true, 
		options : ['元','万元','亿元'],
		value : [1100,1200,1300] , 
		isNum : 1,
		validate: {isrequire : false}
	},
	'unitFkStartingPrice' 	:  { 
		key :'unitFkStartingPrice' ,
		name : '', 
		wrapperClass : 'col-md-2 pln' ,   
		type : 'select', 
		bln: true, 
		options : ['元','万元','亿元'],
		value : [1100,1200,1300] , 
		isNum : 1,
		validate: {isrequire : false}
	},
	'unitFkIncreasement' 	:  { 
		key :'unitFkIncreasement' ,
		name : '', 
		wrapperClass : 'col-md-2 pln' ,   
		type : 'select', 
		bln: true, 
		options : ['元','万元','亿元'],
		value : [1100,1200,1300] , 
		isNum : 1,
		validate: {isrequire : false}
	},
	'unitFkOfMaxInvestmentPrice':  { 
		key :'unitFkOfMaxInvestmentPrice' ,
		name : '', 
		wrapperClass : 'col-md-2 pln' ,   
		type : 'select', bln: true, 
		options : ['元','万元','亿元'],
		value : [1100,1200,1300] , 
		isNum : 1,
		validate: {isrequire : false}
	},

	'saleSize' 	:  { 
		key :'offeringSize' , 
		reg: '^\d+\.?\d*$', 
		regError: '需要为数字', 
		name : '可销售份额', 
		wrapperClass : 'col-md-4 prn',
		brd : true, 
		type : 'input',
		placeholder : '请输入可销售份额',
		validate: {isrequire : true ,isNumber : true}
	}, 				 

 	'unitFkMaturities' :  { 
 		key :'unitFkMaturities' ,
 		name : '', 
 		wrapperClass : 'col-md-2 pln' ,   
 		type : 'select', 
 		bln: true, 
		options : ['天','自然月','自然季','自然年','非固定期限（不赎回则一直持有）','无', '不限期（前台投资人自选期限）'],
		value : [2100,2200,2300,2400,-3,-2,-1] , 
		isNum : 1,
	},
 	'distriDate' :  { 
 		key :'dateRelease' ,
 		name : '发行日期', 
 		wrapperClass : 'col-md-6 ' ,  
 		type : 'singledate',
 		placeholder: '请选择发行日期'
 	},
 	'purchaseAmount':  { 
 		key :'startingPrice', 
 		reg: '^\d+\.?\d*$', 
 		regError: '需要为数字',  
 		name : '起购金额', 
 		wrapperClass : 'col-md-4 prn',
 		brd : true, 
 		type : 'input',
 		placeholder : '请输入起购金额',
 		validate: {isrequire : true,isNumber : true}
 	},
 	'purchaseAmountHidden':  { 
 		key :'startingPrice', 
 		type : 'hidden', 
 		wrapperClass: 'none'
 	},
 	'unitFkStartingPriceHidden': {
 	 	key :'unitFkStartingPrice', 
 	 	type : 'hidden', 
 	 	wrapperClass: 'none'
 	 },
 	'increasingAmount':{ 
 		key :'increasement' , 
 		reg: '^\d+\.?\d*$', 
 		regError: '需要为数字',  
 		name : '递增金额', 
 		wrapperClass : 'col-md-4 prn',
 		brd : true, 
 		type : 'input',
 		placeholder : '请输入递增金额',
 		validate: {isrequire : true,isNumber : true}
 	},
 	'subscriptionFee' :{ 
 		key :'subscribeFee' ,
 		name : '认购费', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input', 
 		placeholder : "请输入认购费"
 	},
	'ManageFee' 	: { 
		key :'managementCost' ,
		name : '管理费', 
		wrapperClass : 'col-md-6' ,   
		type : 'input', 
		placeholder : "请输入管理费"
	},
 	'redemptionFee' : { 
 		key :'redeemFee' ,
 		name : '赎回费', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input', 
 		placeholder : "请输入赎回费"
 	},
	'compensationPay' :{ 
		key :'reward' ,
		name : '业绩报酬', 
		wrapperClass : 'col-md-6' ,   
		type : 'input', 
		placeholder : "请输入业绩报酬"
	},
 	'closedTime' : { 
 		key :'closeTime' ,
 		name : '封闭期', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input', 
 		placeholder : "请输入封闭期"
 	},
	'openDay'	: { 
		key :'openDayDesc' ,
		name : '开放日', 
		wrapperClass : 'col-md-6' ,   
		type : 'input', 
		placeholder : "请输入开放日"
	},
 	'moneyType' : { 
 		key :'currencies' ,
 		name : '币种', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'select', 
 		options : ['人民币','美元','港币','其他'],
 		value : [10,20,30,40] , 
 		isNum : 1
 	},
	'riskRant' 	: { 
		key :'riskRating' ,
		name : '风险等级', 
		wrapperClass : 'col-md-6' ,   
		type : 'select', 
		options : ['高风险','中风险','低风险'],
		value : [30,20,10] , 
		isNum : 1
	},
 	'incomeRant' : { 
 		key :'arrRank' ,
 		name : '收益评级', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'star'
 	},
 	
 	'industryTypeFk': { 
 		key :'industryTypeFk' ,
 		name : '信托类型', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'select', 
		options : ['政信类','金融类','基础设施','工商企业','房地产','其他'], 
		value: ['10', '20', '30', '40', '50', '60'], 
		validate: {isrequire : true}
	},
 	'buyBegintime'	: { 
 		key :'startDatePurchase' ,
 		name : '购买起始日', 
 		wrapperClass : 'col-md-6' ,  
 		type : 'singledate', 
 		placeholder : "请选择购买起始日", 
 		timestamp: 1473304491256
 	},
	'buyEndTime' : { 
		key :'endDatePurchase' ,
		name : '购买截止日', 
		wrapperClass : 'col-md-6' ,   
		type : 'singledate', 
		placeholder : "请选择购买截止日"
	},
	'startPurchase'	: { 
		key :'startDatePurchase' ,
		name : '起始日', 
		wrapperClass : 'col-md-6' ,   
		type : 'singledate', 
		placeholder : "请选择起始日",
		validate: {isrequire : true} ,
		timestamp: 1473304491256
	},
	'endPurchase'	: { 
		key :'endDatePurchase' ,
		name : '截止日', 
		wrapperClass : 'col-md-6' ,   
		type : 'singledate', 
		placeholder : "请选择截止日",
		validate: {isrequire : true}
	},
 	
 	'interestRate' 	: { 
 		key :'expectedArr', 
 		name : '利率', 
 		wrapperClass : 'col-md-6' , 
 		type : 'input', 
 		placeholder : '', 
 		unit: '%'
 	},					

 	'proFoundDay'  : { 
 		key :'dateEstablished', 
 		name : '产品成立日期', 
 		wrapperClass : 'col-md-6' , 
 		type : 'singledate'
 	},
 	'distirName'   : { 
 		key :'name' ,
 		name : '名称', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入发行商名称' ,
 		validate: {isrequire : true}
 	},
 	'distirPhone'  : { 
 		key :'telephone' ,
 		name : '发行商固定电话', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入发行商固定电话',
 		validate: {isrequire : true,isNumber : true}
 	},
 	'distirFullName'  : { 
 		key :'fullName' ,
 		name : '发行商全称', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入发行商全称',validate: {isrequire : true}},
 	'distirAddr'   : { 
 		key :'address' ,
 		name : '发行商地址', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入发行商地址',
 		validate: {isrequire : true}
 	},
 	'personnelPolicy' : { 
 		key :'orderNumber' ,
 		name : '人员策略', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'radios',
 		radios : [{'name': '员工' },{'name' : '直销员','checked' : 'checked' } ] 
 	},
 	'investModeFk' : { 
 		key :'investModeFk' ,
 		name : '投资方式', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'select', 
		options : ['信托贷款','股权投资','权益投资','证券投资','组合运用','其他投资','量化对冲投资','结构化投资','海外投资'],
		value : [10,20,30,40,50,60,70,80,90] , 
		isNum : 1 ,
		validate: {isrequire : true}
	}, 
	'investManager' : { 
		key :'investManager' ,
		name : '投资经理', 
		wrapperClass : 'col-md-6' ,   
		type : 'input',
		placeholder : '请输入投资经理'
	},
 	'isRiskRating'  : { 
 		key :'isRiskRating' ,
 		name : '是否启用风险等级', 
 		wrapperClass : 'col-md-4' ,   
 		type : 'radios',
 		radios : [{'name': '启用' ,'checked' : 'checked', value: '1'  },{'name' : '关闭', value: '2'} ] 
 	},
 	'proLocation'   : { 
 		key :'locationFk' ,
 		name : '项目所在地', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'area',
 		placeholder: '请添加项目所在地', 
 		validate: {isrequire : true}, 
 	},
 	'proDistriLocation'   : { 
 		key :'locationFk' ,
 		name : '产品发行地', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'area', 
 		placeholder : '请输入产品发行地'
 	},
 	'financeAmount'  : { 
 		key :'issureScale' ,
 		name : '融资金额', 
 		wrapperClass : 'col-md-4 prn ' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入融资金额'
 	},
 	'stockRight'     : { 
 		key :'equity' ,
 		name : '股权', 
 		wrapperClass : 'col-md-6' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入股权',
 		validate: {isrequire : true ,isNumber : true},
 		unit: '%'
 	},
 	'collarCast'     : { 
 		key :'collarCast' ,
 		name : '领投人', 
 		wrapperClass : 'col-md-6' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入领投人',
 		validate: {isrequire : true}
 	}, 
 	'collarCastNumber' : { 
 		key :'collarCastNumber' ,
 		name : '身份证号', 
 		wrapperClass : 'col-md-6' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入身份证号'
 	}, 
	'maxInvestmentPrice':  { 
		key :'maxInvestmentPrice', 
		reg: '^\d+\.?\d*$', 
		regError: '需要为数字',  
		name : '最大投资金额', 
		wrapperClass : 'col-md-4 prn',
		brd : true, 
		type : 'input',
		placeholder : '请输入最大投资金额',
		validate: {isrequire : true,isNumber : true}
	},

 	'showStatus': { 
 		key :'available' ,
 		name : '展示状态', 
 		wrapperClass : 'col-md-6' ,   
 		type : 'radios',
 		radios : [{'name': '上架','checked' : 'checked' ,'value' : '10'},{'name' : '下架','value' : '20' }  ] 
 	},
 	'paymentTransferCardOwner' :{ 
 		key :'paymentTransferCardOwner' ,
 		name : '持卡人', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入持卡人',
 		validate: {isrequire : true}
 	},
 	'paymentTransferBankId' :{ 
 		key :'paymentTransferBankId' ,
 		name : '银行', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'select',
 		placeholder : '请输入银行',
 		validate: {isrequire : true}
 	},
 	'paymentTransferCardNumber' :{ 
 		key :'paymentTransferCardNumber' ,
 		name : '卡号', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入卡号',
 		validate: {isrequire : true, isNumber : true}
 	},
 	'paymentTransferBranch' :{ 
 		key :'paymentTransferBranch' ,
 		name : '支行', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请输入支行'
 	},
 	'paymentTransferCardNumberAgain' :{ 
 		key :'paymentTransferCardNumberAgain' ,
 		name : '再次输入卡号', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'input',
 		placeholder : '请再次输入卡号',
 		validate: {isrequire : true,isNumber : true}
 	},
 	'paymentTransferIntroduction' :{ 
 		key :'paymentTransferIntroduction' ,
 		name : '说明', 
 		textStyle: {minWidth: '130px'}, 
 		wrapperClass : 'col-md-6' ,   
 		type : 'textarea',
 		placeholder : '请输入说明'
 	},
 	'prostatus' : { 
 		key :'salesStatusFk' ,
 		name : '产品状态', 
 		wrapperClass : 'col-md-6' ,  
 		type : 'radios',
 		radios : [{'name': '预售',value: '20' },{'name' : '在售',value: '10' },{'name' : '售罄',value: '30' } ]
 	},

 	'yesterdayNet'  : { 
 		key :'yesterdayNet' ,
 		name : '基金净值', 
 		wrapperClass : 'col-md-6 hidden yesterdayNet' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入基金净值',
 		validate: {isrequire : true ,isNumber : true},
 		unit: '元'
 	},
 	'sumNet'   : { 
 		key :'sumNet' ,
 		name : '累计分红', 
 		wrapperClass : 'col-md-6 hidden sumNet' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入累计分红',
 		validate: {isrequire : true ,isNumber : true},
 		unit: '元'
 	},
 	'expectedArr'   : { 
 		key :'expectedArr' ,
 		name : '固定利率', 
 		wrapperClass : 'col-md-6 hidden arr-expected' ,  
 		brd : true, 
 		type : 'input', 
 		placeholder:'请输入固定利率',
 		validate: {isrequire : true ,isNumber : true},
 		unit: '%'
 	},
 	
 	//components
 	//parse type and render it in template 
 	'collarCastDesc'   : { type : 'editor'},
 	'commissionType'   : { type : 'CommType', validate: {isrequire : true} },
 	'hoster'  		   : { type : 'hoster'},
 	'presentType'  	   : { type : 'presentType'},
 	'relatedDoc'       : { type : 'relatedDoc'},
 	'foundStatus'      : { type : 'foundStatus'},
 	'distributionWay'  : { type : 'distributionWay'},
 	'fundStrategy'	   : { type : 'fundStrategy'},
 	'productCommSet'   : { type : 'product-commset'},
 	'yearRate'         : { type : 'year-rate'},
 	'comSoled'         : { type : 'comSoled',  wrapperClass: 'col-md-6'},
 	'proTerm' 		   : { type : 'proTerm',  wrapperClass: 'col-md-6'},
 	'star'			   : { key  : 'arrRank', name : '收益评级', wrapperClass : 'col-md-6' , type : 'star'},
 	'customEle'        : { type : 'custom-ele'},
 	'verifyConfirm'    : { type : 'verify-confirm'},
 	'vipChoicenessDistributionWay' : {type : 'vipChoicenessDistributionWay'},

 	//component functions
 	'baseInput'  : (opts = {}) => ({ key :opts.key ,textStyle: opts.textStyle || {}, name : opts.name || '', readonly: opts.readonly || false, wrapperClass : 'col-md-6', type : 'input', value: opts.value || ''}),
 	'staticUnit' : (unit) => ({key :'' ,name : unit, wrapperClass : 'col-md-2 pln', type : 'text', bln: true}),
 }
