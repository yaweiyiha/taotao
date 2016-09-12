import Dict from 'config/dict/distribut-dict'

urlConfig['order/detail'] =
{
	'topbanner' : {
		'title' : '报表管理',
		'subtitle' : {'name': ' 分销产品销售报表', url : '#main/distripro/report' }, 
		'thirdTitle' : '订单详情',
	},
	'forms' : [
			{	
				'panelName' : '订单信息',
				'formlist'   : [
					[   Dict.baseDateText('下单时间', 'orderInfoOrderCreateTimeValue','','detailtime'),
						Dict.baseText('订单号', 'orderInfoOrderNo','','text'),
					  
				 	],
				 	[ 
				 		Dict.baseText('订单金额', 'orderInfoTotalAmount','','applyQuota'),
					    Dict.baseText('认购金额', 'orderInfoOrderAmount','','applyQuota')
				 	],
				 ]
			},
			{	
				'panelName' : '产品信息',
				'formlist'   : [
					[ 	Dict.baseText('产品名称', 'orderInfoProductName','','text'),
						Dict.baseText('认购金额', 'orderInfoOrderAmount','','text'),
					  
				 	],[
					 	 Dict.baseText('期限', 'orderInfoProductTerm','','day'),
				 	],				 
				 ],
			},
			{	
				'panelName' : '投资人基本信息',
				'formlist'   : [
					[	
						Dict.baseText('姓名' ,'investorName','','text'),
						Dict.baseText('性别', 'investorGender','','gender'),
				 	],[
					  	Dict.baseDateText('出生日期', 'investorDateOfBirth','','text'),
					  	Dict.baseText('手机', 'investorCellPhone','','text'),
	
				 	],[
				 		Dict.baseText('国籍', 'investorNationalityName','','text'),
					  	Dict.baseText('学历', 'investorDiplomaName','','text')
				 	],[
				 		Dict.baseText('证件类型', 'investorIdTypeName','','text'),
					  	Dict.baseText('证件号码', 'investorIdNumber','','text')
				 	],[
				 		Dict.baseDateText('证件到期日', 'investorIdNumberExpiredDate','','text'),

				 	],[
				 		Dict.baseText('联系地址', 'investorContactAddress','','text'),
					  	Dict.baseText('邮政编码', 'investorPostalCode','','text')
				 	],[
				 		Dict.baseText('工作单位', 'investorWorkPlace','','text'),
					  	Dict.baseText('第三方认证', '','','text')
				 	],[
				 		Dict.baseText('职业', 'investorOccupationName','','text'),
					  	Dict.baseText('居住地址', 'investorResidentialAddressArea','','text')
				 	],[
				 		Dict.baseText('职务', 'investorPosition','','text'),
					  	Dict.baseText('固定电话', 'investorTelephone','','text')
				 	]	 
				 ],
			},
			{	
				'panelName' : '紧急情况',
				'formlist'   : [
					[	
						Dict.baseText('紧急联系人姓名', 'orderInfoEmergencyName','','text'),
						Dict.baseText('紧急联系人关系', 'orderInfoEmergencyRelation','','text'),
				 	],[
					  	Dict.baseText('紧急联系人证件类型', 'orderInfoEmergencyIdType','','text'),
					  	Dict.baseText('紧急联系人证件号码', 'orderInfoEmergencyIdNumber','','text'),
	
				 	],[
				 		Dict.baseText('持卡人姓名', 'paymentBankCardOwner','','text'),
				 	],[
				 		Dict.baseText('银行名称', 'paymentBankBankName','','text'),
					  	Dict.baseText('卡号', 'paymentBankCardNumber','','text')
				 	],[
				 		Dict.baseText('开卡地区', 'paymentBankAreaFullName','','text'),
				 		Dict.baseText('支行信息', 'paymentBankAccountBranch','','text'),

				 	] 
				 ],
			},
			{	
				'panelName' : '汇款银行卡',
				'formlist'   : [
					[	
						Dict.baseText('持卡人姓名', 'paymentBankCardOwner','','text'),
				 	],[
					  	Dict.baseText('银行名称', 'paymentBankBankName','','text'),
					  	Dict.baseText('卡号', 'paymentBankCardNumber','','text'),
	
				 	],[
				 		Dict.baseText('开卡地区', 'paymentBankAreaFullName','','text'),
				 		Dict.baseText('支行信息', 'paymentBankAccountBranch','','text'),
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
