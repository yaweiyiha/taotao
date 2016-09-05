urlConfig['distripro/report'] =
 {
	'form' : {
		'tabs' : [],
		'head' : {
			subList : [
				{'key' : '待审核' },
				{'key' : '审核通过' },
				{'key' : '审核不通过' },
			]
		},
		'formlist' :[
			[ 	
				{ type : 'productDistri',wrapperClass: 'productDistri col-sm-5'},
				{ startkey :'startDate' ,endkey: 'endDate' ,name : '上架时间', wrapperClass: 'col-sm-4 date-control' ,type : 'time'},
				// { key :'orderNumber' ,name : '上架时间', wrapperClass : 'col-sm-4' ,   type : 'input'},
				{name : '搜索', classList : 'search',type : 'button', evt : 'submit'},
			],
		],

		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'订单号' ,  width:"15%" ,key : 'id',           type: 'nomal'},
			{ name :'下单日期', width:"10%" ,key : 'createTime' ,  type:'time' },
			{ name :'投资人',   width:"10%" ,key : 'investorName', type:'nomal'},
			{ name :'投资金额', width:"15%" ,key : 'totalAmount',  type:'nomal'},
			{ name :'支付方式', width:"10%" ,key : 'paymentType',  type:'nomal'},
			{ name :'佣金',     width:"10%", key : 'commission' ,  type:'nomal'},
			{ name :'操作', width:"10%" ,key: 'operater', type: 'operater'},
		],
		'showTable' : true,
		'submitUrl': 'report/agentsales/list',
		'operater' : {
		    operaterList: [
		    	[
		    		{
			 			content: {
				 			name: ['详情'],
				 			url: ['#distri/order/detail?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
		    		},
		    	]
		    ]
		},
	},
	'topbanner' : {
		'title' : '报表管理',
		'subtitle' : {name : '分销产品销售报表' ,url : ''},
		'key' : '分销产品销售报表',
	},
	// 'filters' : [
	// 	{ key :'productName', name : '分销方', wrapperClass : 'col-sm-6' , 
	// 		options : ['钱橙','环球财富','祥云资产管理','资管','信托','会员精选','股权投资','海外保险'] ,type : 'filter' },
	// 	// { key :'beginTime' , wrapperClass: 'col-sm-12 date-control' ,type : 'time'},
	// ],
	'needback' : false
}
