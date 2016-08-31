import Dict from 'config/dict/product-dict'

urlConfig['distributor/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '' }, 
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
				],
			},
		]

	],
	'buttons': [
		{name : '确认新增',classList : 'primary', type : 'button', evt : 'submit'},
	],
	'url' : 'publisher/add'

}