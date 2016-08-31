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

urlConfig['distributor/view'] =
{
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {'name': '查看', url : '' }, 
		'thirdTitle' : '发行商查看',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'formlist'   : [
					[   Dict.baseInput({name: '名称', value: "小众赢", readonly: true}), Dict.baseInput({name: '发行商固定电话', value: "021-99999999", readonly: true}) ],
					[   Dict.baseInput({name: '发行商全称', value: "上海小众赢投资有限公司", readonly: true}), Dict.baseInput({name: '发行地址', value: "上海南京西路201号12F", readonly: true}) ],
				],
			},
		]

	]
}

urlConfig['distributor/edit'] =
{
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {'name': '查看', url : '' }, 
		'thirdTitle' : '发行商查看',
		'key' : '产品维护',
	},
	'forms' : [
		[
			{	
				'panelName' : '基本信息',
				'formlist'   : [
					[   Dict.baseInput({name: '名称', value: "小众赢", readonly: false}), Dict.baseInput({name: '发行商固定电话', value: "021-99999999", readonly: false}) ],
					[   Dict.baseInput({name: '发行商全称', value: "上海小众赢投资有限公司", readonly: false}), Dict.baseInput({name: '发行地址', value: "上海南京西路201号12F", readonly: false}) ],
				],
			},
		]
	],
	'buttonlist': [
		{name : '保存',classList : 'primary', type : 'button', evt : 'save'},
	],

}