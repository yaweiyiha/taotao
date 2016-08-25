urlConfig['fund/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增基金产品',
		'key' : '产品维护',
		'subFun' : [
			{'key' : '保存' , evt :'save' ,code : 'save'},
			{'key' : '发布' , evt :'republic' , code : 'republic'},
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
						{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
						{ key :'orderNumber' ,name : '基金类型', wrapperClass : 'col-md-3 prn ' ,  brd : true, type : 'select', 
						  options : ['证券','股票','风险投资','混合型','其他权益','类固收私募基金','私募股权基金','契约型基金'] ,isrequire : true},
		                { key :'orderNumber' ,name : '', wrapperClass : 'col-md-4 pln ' , bln: true,   type : 'select', 
						  options : ['契约','公司','有限合伙'] ,isrequire : true},
		            ],[
		                { key :'orderNumber' ,name : '基金策略', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['股票策略','期货策略','债券策略','其他策略'],isrequire : true},
						{ key :'orderNumber' ,name : '二级策略', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['股票多头','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},
					],[
						{ key :'orderNumber' ,name : '发行公司', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
						{ key :'orderNumber' ,name : '托管方', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['无','托管劵商','托管银行','第三方支付存管'],isrequire : true},
					],[
						{ key :'orderNumber' ,name : '基金经理', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
						{ key :'productName', name : '基金管理人', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入基金管理人'},
					],[
						{ key :'orderNumber' ,name : '托管费', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
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
						{ key :'orderNumber' ,name : '发行日期', wrapperClass : 'col-md-5 ' ,  type : 'input', placeholder:'请输入发行规模',isrequire : true},
					],
					[	
						{ key :'orderNumber' ,name : '起购金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' , bln: true,  type : 'select',
						 options : ['万元','千元','百元','元']},
						{ key :'orderNumber' ,name : '递增金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' , bln: true,  type : 'select',
						 options : ['万元','千元','百元','元']},
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
						{ key :'orderNumber' ,name : '币种', wrapperClass : 'col-md-5' ,   type : 'select', options : ['人民币','美元','英镑']},
						{ key :'orderNumber' ,name : '风险等级', wrapperClass : 'col-md-5' ,   type : 'select', options : ['高风险','美元','英镑']},
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
						{ key :'orderNumber' ,name : '年化收益率', wrapperClass : 'col-md-5' ,   type : 'select', options : ['请选择','美元','英镑']},
					]
				]
			},
			{	
				'panelName' : '添加自定义要素',
			}

	],

}

urlConfig['xintuo/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增基金产品',
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
						{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
						{ key :'orderNumber' ,name : '信托类型', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},	
		            ],[
		                { key :'orderNumber' ,name : '发行公司', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['小众赢','期货策略','债券策略','其他策略'],isrequire : true},
						{ key :'orderNumber' ,name : '托管方', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['无','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},
					],[
						{ key :'orderNumber' ,name : '产品发行地', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
						{ key :'productName', name : '联系电话', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入联系电话'},
					]

				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	
						{ key :'orderNumber' ,name : '发行规模', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['股票策略','期货策略','债券策略','其他策略'],isrequire : true},
						{ key :'orderNumber' ,checkLabel : '产品状态', wrapperClass : 'col-md-5' ,   type : 'checkbox', 
						  radios : [ {name : '预售' ,isChecked : 'checked'} ,{name : '在售'},{name : '售罄'}],
						}
					],[	
						{ key :'orderNumber' ,name : '发行规模', wrapperClass : 'col-md-4' ,   type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select',
						 options : ['万元','千元','百元','元']},
					],
					[	
						{ key :'orderNumber' ,name : '可销售份额', wrapperClass : 'col-md-4' ,   type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-2' ,   type : 'select',
						 options : ['万元','千元','百元','元']},
						{ key :'orderNumber' ,name : '产品期限', wrapperClass : 'col-md-4' ,   type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-2' ,   type : 'select',
						 options : ['无']},
					],
					[	
						{ key :'orderNumber' ,name : '起购金额', wrapperClass : 'col-md-4' ,   type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-2' ,   type : 'select',
						 options : ['万元','千元','百元','元']},
						{ key :'orderNumber' ,name : '递增金额', wrapperClass : 'col-md-4' ,   type : 'input',placeholder : '请输入发行规模'},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-2' ,   type : 'select',
						 options : ['万元','千元','百元','元']},
					],[	
						{ key :'orderNumber' ,name : '购买起始日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
						{ key :'orderNumber' ,name : '购买截止日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
					],[	
						{ key :'orderNumber' ,name : '币种', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
						{ key :'orderNumber' ,name : '风险等级', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
					]

				],
			},
			{	
				'panelName' : '收益信息',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	
						{ key :'orderNumber' ,name : '年化收益率', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品标识'},
					]
				]
			}

	],

}

urlConfig['zg/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增资管产品',
		'key' : '产品维护',
		'subFun' : [
			{'key' : '保存' , evt :'save'},
			{'key' : '发布' , evt :'republic'},
		],
	},
	'tabs' : [
		{ key: 'proEle', value: '产品要素'},
		{ key: 'brokerageSetting', value: '佣金设置' }, 
	],
	'forms' : [
			{	
				'panelName' : '基本信息',
				'descTitle' : '(*为必填)',
				'formlist'   : [
					[	
						{ key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
						{ key :'orderNumber' ,name : '投资方式', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['信托贷款'] ,isrequire : true}
		            ],[
		                { key :'orderNumber' ,name : '发型公司', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['小众赢'],isrequire : true},
						{ key :'orderNumber' ,name : '托管方', wrapperClass : 'col-md-3' ,   type : 'select', 
						  options : ['无'],isrequire : true},
					],[
						{ key :'orderNumber' ,name : '产品发型地', wrapperClass : 'col-md-5 city-select', type: 'area', isrequire: true},
					],[
						{ key :'orderNumber' ,name : '投资经理', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入投资经理'},
						{ key :'productName', name : '联系电话', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入联系电话'},
					]
				],
			},

			{	
				'panelName' : '购买信息',
				'descTitle' : '(*为必填)',
				'belong' : 'proEle',
				'formlist'   : [
					[	
						{ key :'orderNumber' ,name : '成立状态', wrapperClass : 'col-md-5' ,   type : 'select', 
						  options : ['股票策略','期货策略','债券策略','其他策略'],isrequire : true},
						{ key :'orderNumber' ,checkLabel : '产品状态', wrapperClass : 'col-md-5' ,   type : 'checkbox', 
						  radios : [ {name : '预售' ,isChecked : 'checked'} ,{name : '在售'},{name : '售罄'}],
						}
					], [
						{ key :'orderNumber' ,name : '发型规模', wrapperClass : 'col-md-4' ,   type : 'input',placeholder : '请输入发型规模',isrequire : true},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-2' ,   type : 'select', options : ['万元'],isrequire : true},
					], [
						{ key :'orderNumber' ,name : '可销售份额', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '',isrequire : true},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1' ,   type : 'select', options : ['万元'],isrequire : true},
						{ key :'orderNumber' ,name : '产品期限', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品期限',isrequire : true},
						{ key :'orderNumber' ,name : '', wrapperClass : 'col-md-1' ,   type : 'select', options : ['无'],isrequire : true},
					], [
						{ key :'beginTime', name: "购买起始日", wrapperClass: 'col-md-5 date-control' ,type : 'time'},
						{ key :'endTime', name: "购买截止日", wrapperClass: 'col-md-5 date-control' ,type : 'time'},
					], [
						{ key :'orderNumber', name: "认购费", wrapperClass: 'col-md-5 date-control' ,type : 'input', placeholder: "请输入认购费"},
						{ key :'orderNumber', name: "管理费", wrapperClass: 'col-md-5 date-control' ,type : 'input', placeholder: "请输入管理费"},
					], [
						{ key :'orderNumber', name: "赎回费", wrapperClass: 'col-md-5 date-control' ,type : 'input', placeholder: "请输入赎回费"},
						{ key :'orderNumber', name: "业绩报酬", wrapperClass: 'col-md-5 date-control' ,type : 'input', placeholder: "请输入业绩报酬"},
					], [
						{ key :'orderNumber', name: "封闭期", wrapperClass: 'col-md-5 date-control' ,type : 'input', placeholder: "请输入封闭期"},
						{ key :'orderNumber', name: "开放日", wrapperClass: 'col-md-5 date-control' ,type : 'input', placeholder: "请输入开放日"},
					], [
						{ key :'orderNumber', name: "币种", wrapperClass: 'col-md-5 date-control' ,type : 'select', options: ['人民币']},
					]
				],
			}

	],

							// { key :'orderNumber' ,checkLabel : '产品状态', wrapperClass : 'col-md-5' ,   type : 'checkbox', 
						 //  radios : [ {name : '预售' ,isChecked : 'checked'} ,{name : '在售'},{name : '售罄'}],

}

