urlConfig['distributors/maintenance'] =
 {
	'form' : {
		'tabs' : [],
		'head' : {
			subList : [
				{'key' : '待审核' },
				{'key' : '审核通过' },
				{'key' : '审核不通过' },
			]
		},

		'formlist' :[
			[ 	
				{ key :'name' ,name : '发行商名称', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入要搜索的发行商名称关键字'},
				{ key :'telephone' ,name : '发行商电话', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入要搜索的发行商电话关键字'},
				{ key :'address' ,name : '发行商地址', wrapperClass : 'col-sm-4' ,   type : 'input' ,placeholder : '请输入要搜索的发行商地址关键字'},
				
			],
			[
				{ name : '搜索', wrapperClass: 'tac', classList : '',type : 'button', evt : 'submit'},
			]
		],

		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'发行商名称', width:"8%" ,key : 'name',type:'nomal'},
			{ name :'发行商全称', width:"8%",key : 'fullName' ,type:'nomal'},
			{ name :'发行商固定电话', width:"8%" ,key : 'telephone',type:'nomal'},
			{ name :'发行商地址', width:"8%" ,key : 'address',type:'nomal'},
			{ name :'状态', width:"8%" ,key : 'status',type:'distributorStatus'},
			{ name :'创建者', width:"8%" ,key: 'creatorName',type:'nomal'},
			{ name :'创建时间', width:"8%" ,key : 'createTime',type:'time'},
			{ name :'操作', width:"10%" ,key: 'operater', type: 'operater'},
		],
		'operater' :{
			statusDict: {
		 		'1': '停用',
		 		'0': '启用'
			},
			operaterList: [
				[
					{
			 			content: {
				 			name: ['详情'],
				 			url: ['#addPro/distributor/view?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
					}
				],
				[
					{
			 			content: {
				 			name: ['编辑'],
				 			url: ['#addPro/distributor/edit?id=', '{{ INTERFACE_DATA(id) }}']
			 			},
					}
				],
				[
					{
			 			content: {
				 			name: ['{{ DICT(status, statusDict) }}'],
				 			url: ['javascript:;'],
				 			evt: ['statusDistriChange'],
				 			par: [' {{ INTERFACE_DATA(id) }}'],
				 			val: [' {{ INTERFACE_DATA(status) }}'],
			 			},
					}
				]
			]
		},
		'url' : "publisher/list",
		'param' : { 
			"name": null, "telephone": null, "address": null,"status": null,"pageNo": 1, "pageSize": 10
		 }
	},
	'topbanner' : {
		'title' : '发行商管理',
		'subtitle' : {name : '查看' ,url : ''},
		'key' : '产品维护',
		'subFun' : [{'key' : '新增发行商' , url :'#addPro/distributor/add' ,code : 'add'}],
	},
	'filters' : [
		{ key :'status', name : '只看', wrapperClass : 'col-sm-6' , 
		  	options : ['全部','停用','启用'], values: [-1, 0, 1], type : 'filter' },
	],
}
