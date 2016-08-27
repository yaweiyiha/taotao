
import Dict from 'config/dict/distribut-dict'

urlConfig['sign/validate'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增基金产品',
		'key' : '产品维护',
	},
	'forms' : [
			{	
				'panelName' : '线上申请内容',
				'formlist'   : [
					[ Dict.appProName ],
					[ Dict.appDistri ],
					[ Dict.appTime ],
					[ Dict.appAmount ],
				 ],
			},

			{	
				'panelName' : '分销佣金',
				'descTitle' : '(全部必填，且按合同规定填写)',
				'formlist'   : [
					[	Dict.commissionType ],
				],
			},
			{	
				'panelName' : '线下分销签约实际内容',
				'descTitle' : '(全部必填)',
				'formlist'   : [
					[	Dict.consignmentTime ],
					[	Dict.uploadContract ]
				]
			}

	],
	'buttonlist': [
		{name : '完成签约',classList : 'primary', type : 'button', evt : 'save' ,alt : '允许分销方开始代销'},
		{name : '决绝签约',classList : 'default',type : 'button',evt:'republic'},
	],

}

urlConfig['sign/done'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
		'thirdTitle' : '新增基金产品',
		'key' : '产品维护',
	},
	'forms' : [
			{	
				'panelName' : '线上申请内容',
				'formlist'   : [
					[ Dict.textList([
						{name : '申请代销产品名称' ,value : '小众赢1号'},	
						{name : '发行公司' ,value : '固定佣金'},	
						{name : '佣金比例' ,value : '2%'},	
						{name : '代销时间' ,value : '2016-10-08至2016-12-10'},	
						{name : '代销额度' ,value : ' 200万'},	
						{name : '申请代销时间 ' ,value : '2016-10-08至2016-12-10'},	
					])  , Dict.contractCopy ]
				 ],
			},
	]

}

urlConfig['sign/reject'] =
{
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {'name': '分销签约管理', url : '' }, 
		'thirdTitle' : '拒绝代销签约',
	},
	'forms' : [
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