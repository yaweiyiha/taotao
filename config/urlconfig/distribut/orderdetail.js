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
					[   Dict.baseDateText('下单时间', 'orderInfoOrderCreateTimeValue'),
						Dict.baseText('订单号', 'orderInfoOrderNo'),
					  
				 	],
				 	[ 
				 		Dict.baseText('订单金额', 'orderInfoTotalAmount'),
					    Dict.baseText('认购金额', 'orderInfoOrderAmount')
				 	],
				 ]
			},
			{	
				'panelName' : '产品信息',
				'formlist'   : [
					[ 	Dict.baseText('产品名称', 'orderInfoProductName'),
						Dict.baseText('认购金额', 'orderInfoOrderAmount'),
					  
				 	],[
					 	 Dict.baseText('期限', 'orderInfoProductTerm'),
				 	],				 
				 ],
			},
			{	
				'panelName' : '投资人基本信息',
				'formlist'   : [
					[	
						Dict.baseText('姓名' ,'investorName'),
						Dict.baseText('性别', 'investorGender'),
				 	],[
					  	Dict.baseDateText('出生日期', 'investorDateOfBirth'),
					  	Dict.baseText('手机', 'investorCellPhone'),
	
				 	],[
				 		Dict.baseText('国籍', 'investorNationalityName'),
					  	Dict.baseText('学历', 'investorDiplomaName')
				 	],[
				 		Dict.baseText('证件类型', 'investorIdTypeName'),
					  	Dict.baseText('证件号码', 'investorIdNumber')
				 	],[
				 		Dict.baseDateText('证件到期日', 'investorIdNumberExpiredDate'),

				 	],[
				 		Dict.baseText('联系地址', 'investorContactAddress'),
					  	Dict.baseText('邮政编码', 'investorPostalCode')
				 	],[
				 		Dict.baseText('工作单位', 'investorWorkPlace'),
					  	Dict.baseText('第三方认证', '')
				 	],[
				 		Dict.baseText('职业', 'investorOccupationName'),
					  	Dict.baseText('居住地址', 'investorResidentialAddressArea')
				 	],[
				 		Dict.baseText('职务', 'investorPosition'),
					  	Dict.baseText('固定电话', 'investorTelephone')
				 	]	 
				 ],
			},
			{	
				'panelName' : '紧急情况',
				'formlist'   : [
					[	
						Dict.baseText('紧急联系人姓名', 'orderInfoEmergencyName'),
						Dict.baseText('紧急联系人关系', 'orderInfoEmergencyRelation'),
				 	],[
					  	Dict.baseText('紧急联系人证件类型', 'orderInfoEmergencyIdType'),
					  	Dict.baseText('紧急联系人证件号码', 'orderInfoEmergencyIdNumber'),
	
				 	],[
				 		Dict.baseText('持卡人姓名', 'paymentBankCardOwner'),
				 	],[
				 		Dict.baseText('银行名称', 'paymentBankBankName'),
					  	Dict.baseText('卡号', 'paymentBankCardNumber')
				 	],[
				 		Dict.baseText('开卡地区', 'paymentBankAreaFullName'),
				 		Dict.baseText('支行信息', 'paymentBankAccountBranch'),

				 	] 
				 ],
			},
			{	
				'panelName' : '汇款银行卡',
				'formlist'   : [
					[	
						Dict.baseText('持卡人姓名', 'paymentBankCardOwner'),
				 	],[
					  	Dict.baseText('银行名称', 'paymentBankBankName'),
					  	Dict.baseText('卡号', 'paymentBankCardNumber'),
	
				 	],[
				 		Dict.baseText('开卡地区', 'paymentBankAreaFullName'),
				 		Dict.baseText('支行信息', 'paymentBankAccountBranch'),
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
