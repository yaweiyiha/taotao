import Dict from 'config/dict/distribut-dict'

urlConfig['order/detail'] =
{
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {'name': '分销签约管理', url : '' }, 
		'thirdTitle' : '拒绝代销签约',
	},
	'forms' : [
			{	
				'panelName' : '订单信息',
				'formlist'   : [
					[ Dict.baseText('下单时间', '2016-02-02 10:10:10'),
					  Dict.baseText('订单金额', '120000')
				 	],
				 	[ Dict.baseText('订单号', 'asdasd'),
					  Dict.baseText('认购金额', '120000')
				 	],
				 ]
			},
			{	
				'panelName' : '产品信息',
				'formlist'   : [
					[ Dict.baseText('产品名称', '桃桃'),
					  Dict.baseText('期限', '120000')
				 	],[
					  Dict.baseText('认购金额', '120000'),
				 	],				 
				 ],
			},
			{	
				'panelName' : '投资人基本信息',
				'formlist'   : [
					[ Dict.baseText('姓名', '桃桃'),
					  Dict.baseText('手机', '18810712222'),
					  Dict.baseText('职业', '桃桃')
				 	],[
					  Dict.baseText('性别', '人妖'),
					  Dict.baseText('国籍', '越南'),
					  Dict.baseText('期限', '120000')
				 	],		 
				 ],
			},
			{	
				'panelName' : '认购信息',
				'formlist'   : [
					[ Dict.IdCardPositive , Dict.IdCardNegative],
				 ],
			},
			{	
				'panelName' : '支付信息',
				'formlist'   : [
					[ Dict.payType ],
					[ Dict.transferCertificate ],
				 ],
			},
	]

}
