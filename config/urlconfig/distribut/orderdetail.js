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
					[   Dict.baseText('下单时间', '' ,'orderCreateTimeValue'),
						Dict.baseText('订单号', '','orderNo'),
					  
				 	],
				 	[ 
				 		Dict.baseText('订单金额', '','totalAmount'),
					    Dict.baseText('认购金额', '','orderAmount')
				 	],
				 ]
			},
			{	
				'panelName' : '产品信息',
				'formlist'   : [
					[ 	Dict.baseText('产品名称', '','productName'),
						Dict.baseText('认购金额', '' ,'orderAmount'),
					  
				 	],[
					 	 Dict.baseText('期限', '' ,'productTerm'),

				 	],				 
				 ],
			},
			{	
				'panelName' : '投资人基本信息',
				'formlist'   : [
					[	
						Dict.baseText('姓名', '' ,'name'),
						Dict.baseText('性别', ''),
				 	],[
					  	Dict.baseText('出生日期', ''),
					  	Dict.baseText('手机', ''),
	
				 	],[
				 		Dict.baseText('国籍', ''),
					  	Dict.baseText('学历', '')
				 	],[
				 		Dict.baseText('证件类型', ''),
					  	Dict.baseText('证件号码', '')
				 	],[
				 		Dict.baseText('证件到期日', ''),

				 	],[
				 		Dict.baseText('联系地址', ''),
					  	Dict.baseText('邮政编码', '')
				 	],[
				 		Dict.baseText('工作单位', ''),
					  	Dict.baseText('第三方认证', '')
				 	],[
				 		Dict.baseText('职业', ''),
					  	Dict.baseText('居住地址', '')
				 	],[
				 		Dict.baseText('职务', ''),
					  	Dict.baseText('固定电话', '')
				 	]	 
				 ],
			},
			{	
				'panelName' : '紧急情况',
				'formlist'   : [
					[	
						Dict.baseText('紧急联系人姓名', '' ,'name'),
						Dict.baseText('紧急联系人关系', ''),
				 	],[
					  	Dict.baseText('紧急联系人证件类型', ''),
					  	Dict.baseText('紧急联系人证件号码', ''),
	
				 	],[
				 		Dict.baseText('持卡人姓名', ''),
				 	],[
				 		Dict.baseText('银行名称', ''),
					  	Dict.baseText('卡号', '')
				 	],[
				 		Dict.baseText('开卡地区', ''),
				 		Dict.baseText('支行信息', ''),

				 	] 
				 ],
			},


			{	
				'panelName' : '汇款银行卡',
				'formlist'   : [
					[	
						Dict.baseText('持卡人姓名', '' ,'name'),
				 	],[
					  	Dict.baseText('银行名称', ''),
					  	Dict.baseText('卡号', ''),
	
				 	],[
				 		Dict.baseText('开卡地区', ''),
				 		Dict.baseText('支行信息', ''),
				 	]
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
	],
	'buttons': [
		{name : '返回',classList : 'primary', type : 'button', evt : 'back' },
	],
	'url' : 'report/agentsales/detail'

}
