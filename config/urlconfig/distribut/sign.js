
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
					[ Dict.appProName , Dict.contractCopy],
					[ Dict.distriCompany ],
					[ Dict.distriTime ],
					[ Dict.distriAmount ],
					[ Dict.commissionTypeText ],
					[ Dict.appTime ],
				 ],
			},
	]

}

