
import Dict from 'config/dict/distribut-dict'

urlConfig['distributor/info'] =
{
	'topbanner' : {
		'title' : '分销管理',
		'subtitle' : {'name': '分销签约', url : '' }, 
		'thirdTitle' : '新增基金产品',
		'key' : '分销方信息',
	},
	'forms' : [
			{	
				'panelName' : '基本信息',
				'formlist'   : [
					[ Dict.distriName ],
					[ Dict.padNum ],
				 ],
			},

			{	
				'panelName' : '分销方logo',
				'formlist'   : [
					[	Dict.distriLogo ],
				],
			},

	]

}

