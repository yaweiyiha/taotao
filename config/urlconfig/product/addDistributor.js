import Dict from 'config/dict/product-dict'

urlConfig['distributor/add'] =
{
	'topbanner' : {
		'title' : '产品管理',
		'subtitle' : {'name': '产品维护', url : '#main/product/maintenance' }, 
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
	'submiturl' : 'publisher/add'

}

urlConfig['distributor/view'] =
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
					[   Dict.baseInput({key: 'name' , name: '名称', value: "小众赢", readonly: true}), Dict.baseInput({key:'telephone', name: '发行商固定电话', value: "021-99999999", readonly: true}) ],
					[   Dict.baseInput({key: 'fullName' , name: '发行商全称', value: "上海小众赢投资有限公司", readonly: true}), Dict.baseInput({key: 'address' ,name: '发行地址', value: "上海南京西路201号12F", readonly: true}) ],
				],
			},
		]

	],
	'url' : 'publisher/detail'
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
					[   Dict.baseInput({key: 'fullName' ,name: '发行商全称', value: "", readonly: false}), Dict.baseInput({key: 'address' ,name: '发行地址', value: "", readonly: false}) ],
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
	'useProcessData' : false,
}