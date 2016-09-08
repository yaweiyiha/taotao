
import Dict from 'config/dict/distribut-dict'

urlConfig['sign/validate'] =
{
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {'name': '分销签约管理', url : '#main/distribut/maintenance' }, 
		'thirdTitle' : '签约审核',
		'key' : '产品维护',
	},	
	'forms' : [
			{	
				'panelName' : '线上申请内容',
				'formlist'   : [
					[ Dict.baseText('申请代销产品名称','productName','','text')],
					[ Dict.baseText('申请分销商','agentName','','text')],
					[ Dict.baseText('申请代销时间' ,['applyStartDate','applyEndDate'],'','doubleTime')],
					[ Dict.baseText('申请代销额度','applyQuota','','applyQuota')],
				 ],
			},

			{	
				'panelName' : '分销佣金',
				'formlist'   : [
					[	Dict.commissionType ],
				],
			},
			{	
				'panelName' : '线下分销签约实际内容',
				'formlist'   : [
					[	Dict.consignmentTime ],
					[	Dict.uploadContract ]
				]
			}

	],
	'buttonlist': [
		{name : '完成签约',classList : 'primary', type : 'button', evt : 'finishSigned' ,alt : '(允许分销方开始代销)' , needAlt : true},
		{name : '拒绝签约',classList : 'default',type : 'button',evt:'rejectSigned'},
	],
	'url' : 'agentsales/detail'

}

urlConfig['sign/done'] =
{
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {'name': '分销签约管理', url : '#main/distribut/maintenance' }, 
		'thirdTitle' : '代销已签约',
	},
	'forms' : [
			{	
				'panelName' : '线上申请内容',
				'formlist'   : [
					[ Dict.textList([
						{name : '申请代销产品名称' , key : 'productName' ,subtype : 'text'},	
						{name : '发行公司' ,key : 'agentName' ,subtype : 'text'},	
						{name : '佣金类型' ,key : 'commisionType',subtype : 'commisionType'},	
						{name : '佣金比例' ,key : 'fixedCommission',subtype : 'percent'},	
						{name : '代销时间' ,key : ['offlineStartDate','offlineEndDate']  ,subtype:'doubleTime' },	
						{name : '代销额度' ,key : 'applyQuota',subtype: 'applyQuota' },	
						{name : '申请代销时间 ' ,key : 'createTime' ,subtype: 'singleTime'},	
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
		'subtitle' : {'name': '分销签约管理', url : '#main/distribut/maintenance' }, 
		'thirdTitle' : '拒绝代销签约',
	},
	'forms' : [
			{	
				'panelName' : '线上申请内容',
				'formlist'   : [
					[ Dict.baseText('申请代销产品名称','productName','','text')],
					[ Dict.baseText('申请分销商','agentName','','text')],
					[ Dict.baseText('申请代销时间' ,['applyStartDate','applyEndDate'],'','doubleTime')],
					[ Dict.baseText('申请代销额度','applyQuota','','applyQuota')],
				 ],
			},
			{	
				'panelName' : '状态',
				'formlist'   : [
					[ Dict.baseText('签约状态','applyState','','applyState')],
					[ Dict.baseText('拒绝原因','rejectReason','','text')],
				 ],
			},
	],
	'url' : 'agentsales/detail'

}