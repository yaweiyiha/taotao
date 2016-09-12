import Dict from 'config/dict/product-dict'

urlConfig['distributor/add'] =
{
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {'name': '查看', url : '#main/distributors/maintenance' }, 
		'thirdTitle' : '新增发行商',
		'key' : '产品维护',
	},

	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'descTitle' : '(全部填写)',
				'formlist'   : [
					[   Dict.distirName, Dict.distirPhone ],
					[   Dict.distirFullName , Dict.distirAddr ],
					[   Dict.paymentTransferCardOwner ,Dict.paymentTransferBankId],
					[   Dict.paymentTransferBranch],
					[   Dict.paymentTransferCardNumber,Dict.paymentTransferCardNumberAgain],
					[	Dict.paymentTransferIntroduction]
				],
			},
		]

	],
	'buttons': [
		{name : '确认新增',classList : 'primary', type : 'button', evt : 'submit', selfStyle: {position:'fixed', bottom:'70px'}},
	],
	'submiturl' : 'publisher/add',
	'backPage' : '#main/distributors/maintenance',
	'successMgs' : '添加发行商成功'

}

urlConfig['distributor/view'] =
{
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {'name': '查看', url : '#main/distributors/maintenance' }, 
		'thirdTitle' : '发行商查看',
		'key' : '产品维护',
	},
	'options' : {
		disable: true
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'formlist'   : [
					[   Dict.baseInput({key: 'name' , name: '名称', value: "小众赢", readonly: true}), Dict.baseInput({key:'telephone', name: '发行商固定电话', value: "021-99999999", readonly: true}) ],
					[   Dict.baseInput({key: 'fullName' , name: '发行商全称', value: "上海小众赢投资有限公司", readonly: true}), Dict.baseInput({key: 'address' ,name: '发行商地址', value: "上海南京西路201号12F", readonly: true}) ],
				
					[   Dict.paymentTransferCardOwner ,Dict.paymentTransferBankId],
					[   Dict.paymentTransferBranch ,Dict.paymentTransferCardNumber],
					[   Dict.paymentTransferIntroduction],
				],
			},
		]

	],
	'url' : 'publisher/detail',
}

urlConfig['distributor/edit'] =
{
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {'name': '查看', url : '#main/distributors/maintenance' }, 
		'thirdTitle' : '发行商查看',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'formlist'   : [
					[   Dict.baseInput({key: 'name' ,name: '名称', value: "", readonly: false}), Dict.baseInput({key:'telephone',name: '发行商固定电话', value: "", readonly: false}) ],
					[   Dict.baseInput({key: 'fullName' ,name: '发行商全称', value: "", readonly: false}), Dict.baseInput({key: 'address' ,name: '发行商地址', value: "", readonly: false}) ],
					[   Dict.paymentTransferCardOwner ,Dict.paymentTransferBankId ],
					[   Dict.paymentTransferBranch ,Dict.paymentTransferCardNumber ],
				],
			},
		]
	],
	'buttons': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'submit' ,},
	],
	'url' : 'publisher/detail',
	'submiturl' : 'publisher/edit',
	 'backPage' : "#main/distributors/maintenance",
	'param' : 'id',
}