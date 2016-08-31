
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
		{name : '完成签约',classList : 'primary', type : 'button', evt : 'finishSigned' ,alt : '允许分销方开始代销'},
		{name : '拒绝签约',classList : 'default',type : 'button',evt:'rejectSigned'},
	],
	'url' : 'agentsales/detail'

}

urlConfig['sign/done'] =
{
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {'name': '分销签约管理', url : '' }, 
		'thirdTitle' : '代销已签约',
	},
	'forms' : [
			{	
				'panelName' : '线上申请内容',
				'formlist'   : [
					[ Dict.textList([
						{name : '申请代销产品名称' ,key : 'productName'},	
						{name : '发行公司' ,key : 'publisherName'},	
						{name : '佣金类型' ,key : 'commisionType'},	
						{name : '佣金比例' ,key : 'fixedCommission'},	
						{name : '代销时间' ,key : 'applyStartDate,applyEndDate'},	
						{name : '代销额度' ,key : 'applyQuota'},	
						{name : '申请代销时间 ' ,key : 'createTime'},	
					])  , Dict.contractCopy ]
				 ],
			},
	],
	'url' : 'agentsales/detail'

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
				'panelName' : '基本信息',
				'formlist'   : [
					[ Dict.baseText('申请代销产品名称','','productName')],
					[ Dict.baseText('申请分销商','','productName')],
					[ Dict.baseText('申请代销时间','')],
					[ Dict.baseText('申请代销额度','','applyQuota')],
				 ],
			},
			{	
				'panelName' : '支付信息',
				'formlist'   : [
					[ Dict.baseText('签约状态','','applyState')],
					[ Dict.baseText('拒绝原因','','rejectReason')],
				 ],
			},
	],
	'url' : 'agentsales/detail'

}