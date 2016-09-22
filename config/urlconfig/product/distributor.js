/**
 *  three operaters in distributor list tables ; 
 *  includes 'detail' ,'edit' ,'enbale or disable'
 */
import Dict from 'config/dict/product-dict'

urlConfig['distributor/add'] =
{
	'topbanner' : {
		'title'       : '发行商管理',
		'subtitle'    : {'name': '查看', 'url' : '#main/distributors/maintenance' }, 
		'thirdTitle'  : '新增发行商',
	},
	'forms'     : [
		[
			{	
				'panelName'  : '基本信息',
				'descTitle'  : '(全部填写)',
				'formlist'   : [
					[   Dict.distirName                  , Dict.distirPhone                    ],
					[   Dict.distirFullName              , Dict.distirAddr                     ],
					[   Dict.paymentTransferCardOwner    , Dict.paymentTransferBankId          ],
					[   Dict.paymentTransferBranch      ],
					[   Dict.paymentTransferCardNumber   , Dict.paymentTransferCardNumberAgain ],
					[	Dict.paymentTransferIntroduction],
				],
			},
		]

	],
	'buttons' : [
		{'name' : '确认新增', 'classList' : 'primary', 'type' : 'button', 'evt' : 'submit', 'selfStyle': {'position':'fixed', 'bottom':'70px'}},
	],
	'submiturl'  : 'publisher/add',
	'backPage'   : '#main/distributors/maintenance',
	'successMgs' : '添加发行商成功'
}

urlConfig['distributor/view'] =
{
	'topbanner' : {
		'title'      : '发行商管理',
		'subtitle'   : {'name': '查看', 'url' : '#main/distributors/maintenance' }, 
		'thirdTitle' : '发行商查看',
	},
	// switch for readonly, control whole page 
	'options' : {
		'disable'    : true
	},
	'forms' : [
		[
			{	
				'panelName'  : '基本信息',
				'formlist'   : [
					[   Dict.distirName                  , Dict.distirPhone               ],
					[   Dict.distirFullName              , Dict.distirAddr                ],
					[   Dict.paymentTransferCardOwner    , Dict.paymentTransferBankId     ],
					[   Dict.paymentTransferBranch       , Dict.paymentTransferCardNumber ],
					[   Dict.paymentTransferIntroduction],
				],
			},
		]

	],
	'url' : 'publisher/detail',
}

urlConfig['distributor/edit'] =
{
	'topbanner'      : {
		'title'      : '发行商管理',
		'subtitle'   : {'name': '查看', 'url' : '#main/distributors/maintenance' }, 
		'thirdTitle' : '编辑发行商',
	},
	'forms' : [
		[
			{	
				'panelName'  : '基本信息',
				'formlist'   : [
					[   Dict.distirName               , Dict.distirPhone               ],
					[   Dict.distirFullName           , Dict.distirAddr                ],
					[   Dict.paymentTransferCardOwner , Dict.paymentTransferBankId     ],
					[   Dict.paymentTransferBranch    , Dict.paymentTransferCardNumber ],
				],
			},
		]
	],
	'buttons': [
		{ 'name' :'保存', 'classList' :'primary','type' :'button', 'evt' :'submit' },
	],
	'url'       : 'publisher/detail',
	'submiturl' : 'publisher/edit',
	'backPage'  : "#main/distributors/maintenance",
}