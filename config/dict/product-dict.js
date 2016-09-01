export default {
	'proName'  		:  { key :'name' ,name : '产品名称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
	'fundType' 		:  { key :'fundGenreAFk' ,name : '基金类型', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'select', 
				   		options : ['证券','股票','风险投资','混合型','其他权益','类固收私募基金','私募股权基金','契约型基金'] ,isrequire : true},
	'fundTypeUnit' 	:  { key :'fundGenreBFk' ,name : '', wrapperClass : 'col-md-2 pln ' , bln: true,   type : 'select', 
						options : ['契约','公司','有限合伙'] ,isrequire : true},	
	'fundStrategy' 	:  { key :'fundTypeFk' ,name : '基金策略', wrapperClass : 'col-md-6' ,   type : 'select', 
						options : ['股票策略','期货策略','债券策略','其他策略'],isrequire : true},
	'secondStrategy':  { key :'fundSubTypeFk' ,name : '二级策略', wrapperClass : 'col-md-6' ,   type : 'select', 
						options : ['股票多头','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},								  		   
    'distributor' 	:  { key :'publisherFk' ,name : '发行公司', wrapperClass : 'col-md-6' ,   type : 'select', 
						options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
 	'hoster'  		:  { key :'custodianParty' ,name : '托管方', wrapperClass : 'col-md-6' ,   type : 'select', 
						options : ['无','托管劵商','托管银行','第三方支付存管'],isrequire : true},
 	'fundLeader' 	:  { key :'fundManager' ,name : '基金经理', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入基金经理'},
 	'fundManager' 	:  { key :'fundManagerCompany', name : '基金管理人', wrapperClass : 'col-md-6' , type : 'input' ,placeholder : '请输入基金管理人'},
 	'trusteeFee' 	:  { key :'fundCustodianCharges' ,name : '托管费', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入基金经理'},
 	'phone' 		:  { key :'serviceTel', name : '联系电话', wrapperClass : 'col-md-6' , type : 'input' ,placeholder : '请输入联系电话'},					
 	'foundStatus' 	:  { key :'establishStatus' ,name : '成立状态', wrapperClass : 'col-md-6' ,   type : 'select', 
					    options : ['募集中','已成立','募集失败']},
 	'proStatus' 	:  { key :'salesStatusFk' ,name : '产品状态', wrapperClass : 'col-md-6' ,   type : 'select', 
					    options : ['预售','在售','售罄']},
	'executeState' 	:  { key :'executeState' ,name : '执行中', wrapperClass : 'col-md-6' ,  type : 'radios',radios : [{'name': '已结束','isChecked' : 'checked'},{'name' : '执行中'} ],isrequire : true},
	'distriSize' 	:  { key :'issureScale' ,name : '发行规模', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'input', placeholder:'请输入发行规模'},
	'unitFkOfferingSize':  { key :'unitFkOfferingSize' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['万元','元','亿']},
	'unitFkIssureScale' :  { key :'unitFkIssureScale' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['万元','元','亿']},
	'unitFkStartingPrice' 	:  { key :'unitFkStartingPrice' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['万元','元','亿']},
	'unitFkIncreasement' 	:  { key :'unitFkIncreasement' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['万元','元','亿']},
	'moneyUnit' 	:  { key :'unitFkIncreasement' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['万元','元','亿']},

	'saleSize' 		:  { key :'offeringSize' ,name : '可销售份额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模',isrequire : true}, 				 
 	'proTerm' 		:  { key :'maturities' ,name : '产品期限', wrapperClass : 'col-md-4 prn' ,   brd : true,  type : 'input',placeholder : '请输入发行规模' , options : ['无']},
 	'unitFkMaturities' 	    :  { key :'unitFkMaturities' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['自然年','自然季','自然月','天','不限期(前台投资人自选限期)','非固定限期(不赎回则一直持有)', '无']},
 	'distriDate' 	:  { key :'dateRelease' ,name : '发行日期', wrapperClass : 'col-md-6 ' ,  type : 'singledate'},
 	'purchaseAmount':  { key :'startingPrice' ,name : '起购金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模',isrequire : true},
 	'increasingAmount':{ key :'increasement' ,name : '递增金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模',isrequire : true},
 	'subscriptionFee' :{ key :'subscribeFee' ,name : '认购费', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入认购费"},
	'ManageFee' 	: { key :'managementCost' ,name : '管理费', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入管理费"},
 	'redemptionFee' : { key :'redeemFee' ,name : '赎回费', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入赎回费"},
	'compensationPay':{ key :'reward' ,name : '业绩报酬', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入业绩报酬"},
 	'closedTime' 	: { key :'closeTime' ,name : '封闭期', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入封闭期"},
	'openDay'		: { key :'openDayDesc' ,name : '开放日', wrapperClass : 'col-md-6' ,   type : 'singledate', placeholder : "请输入开放日"},
 	'moneyType' 	: { key :'currencies' ,name : '币种', wrapperClass : 'col-md-6' ,   type : 'select', options : ['人民币','美元','港币','其他']},
	'riskRant' 		: { key :'riskRating' ,name : '风险等级', wrapperClass : 'col-md-6' ,   type : 'select', options : ['高风险','中风险','低风险']},
 	'incomeRant' 	: { key :'arrRank' ,name : '收益评级', wrapperClass : 'col-md-6' ,   type : 'star'},
 	
 	'yearIncome' 	: { key :'arrTypeFk' ,name : '年化收益率', wrapperClass : 'col-md-6' ,   type : 'select', options : ['不选择','固定','浮动','固定阶梯','浮动阶梯']},
 	
 	'industryTypeFk': { key :'industryTypeFk' ,name : '信托类型', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['政信类','金融类','基础设施','工商企业','房地产','其他'],isrequire : true},
 	'distriArea' 	: { key :'locationFk' ,name : '产品发行地', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
 	'buyBegintime'	: { key :'startDatePurchase' ,name : '购买起始日', wrapperClass : 'col-md-6' ,   type : 'input', placeholer : "请输入认购费"},
	'buyEndTime'	: { key :'endDatePurchase' ,name : '购买截止日', wrapperClass : 'col-md-6' ,   type : 'input', placeholer : "请输入管理费"},
 	'staticUnit'	: (unit) => ({key :'' ,name : unit, wrapperClass : 'col-md-2 pln', type : 'text', bln: true}),
 	'interestRate' 	: { key :'productName', name : '利率', wrapperClass : 'col-md-6' , type : 'input', placeholder : '', unit: '%'},					
 	'soled'			: { key :'productName', name : '已销售份额', wrapperClass : 'col-md-6' , type : 'input', placeholder : '', unit: '元', isrequire: true},
 	'star'			: { key :'arrRank', name : '收益评级', wrapperClass : 'col-md-6' , type : 'star'},
 	
 	'proFoundDay'   : { key :'productName', name : '产品成立日期', wrapperClass : 'col-md-6' , type : 'time'},
 	'distirName'    : { key :'name' ,name : '名称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商名称'},
 	'distirPhone'   : { key :'telephone' ,name : '发行商固定电话', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商固定电话'},
 	'distirFullName'   : { key :'fullName' ,name : '发行商全称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商全称'},
 	'distirAddr'   : { key :'address' ,name : '发行商地址', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商地址'},
 	
 	'personnelPolicy' : { key :'orderNumber' ,name : '人员策略', wrapperClass : 'col-md-6' ,   type : 'radios',radios : [{'name': '员工' },{'name' : '直销员','isChecked' : 'checked' } ] },
 	'salesPolicy'  : { key :'orderNumber' ,name : '直销员策略', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['全部','按团队发布']},
 	'employeePolicy'  : { key :'orderNumber' ,name : '员工策略', wrapperClass : 'col-md-6 none' ,   type : 'select', 
					   options : ['全部']},
 	'comComputePolicy' : { key :'orderNumber' ,name : '佣金计算规则', wrapperClass : 'col-md-6' ,   type : 'radios',radios : [{'name': '直接佣金','isChecked' : 'checked'},{'name' : '月度业绩' } ] },
 	'commissionTypeFk'      : { key :'orderNumber' ,name : '佣金类型', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['未设置','固定佣金','阶梯佣金'] ,isrequire : true},
 	'comConfirmType'     : { key :'orderNumber' ,name : '佣金确认方式', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商地址'},

 	// 佣金设置，逻辑关系比较复杂，使用单独的vue组件
 	'productCommSet': {type: 'product-commset'},
 	'incomeDistriType' : { key :'orderNumber' ,name : '收益分配方式', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['到期一次性还本付息','按期付息，到期还本']},
	'incomeDistirCycle' : { key :'orderNumber' ,name : '收益分配方式', wrapperClass : 'col-md-4 prn' ,   type : 'select', 
					   options : ['按月','按季度','按年','按周','按天','按半年']},
	'incomeDistirUnit' : { key :'orderNumber' ,name : '每', wrapperClass : 'col-md-2 pln' ,   type : 'input'},				   
  	'incomeComputeDay' : { key :'orderNumber' ,name : '收益计算日期', wrapperClass : 'col-md-6' ,   type : 'radios',radios : [{'name': '固定日期','isChecked' : 'checked',key : 'fixedDay'},{'name' : '按日成交' ,key : 'closeDay'},{'name' : '成立日',key : 'foundDay' }  ] },
 	'fixedDay' 	:  { key :'orderNumber' ,name : '固定日期', wrapperClass : 'col-md-6 fixedDay incomeComputeDay' ,  type : 'singledate', placeholder:'请输入发行规模',isrequire : true},
 	'closeDay' 	:  { key :'orderNumber' ,name : '按日成交', wrapperClass : 'col-md-6 none closeDay incomeComputeDay' ,  type : 'singledate', placeholder:'请输入发行规模',isrequire : true},
 	'foundDay' 	:  { key :'dateEstablished' ,name : '成立日', wrapperClass : 'col-md-6 none foundDay incomeComputeDay' ,  type : 'singledate', placeholder:'请输入发行规模',isrequire : true},
 	

 	'baseInput'  : (opts = {}) => ({ key :opts.key ,name : opts.name || '', readonly: opts.readonly || false, wrapperClass : 'col-md-6', type : 'input', value: opts.value || ''}),
 }
