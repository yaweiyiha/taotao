window.menusConfig = {
	menus: [
		{
			key: '1',
			url: '', 
			classStyle:'icon-pro-manager', 
			name:' 产品管理',
			level2List: [
				{ name:'产品维护', url:'#main/product/maintenance', mark:"product:list" },
				
				{ name:'发行商管理', url:'#main/distributors/maintenance', mark:"publisher:list" }
				
			]
		}, 
		{
			key: '2',
			url: '', 
			classStyle:'icon-distri-manager', 
			name:'分销管理',
			level2List: [
				{ name:'分销签约管理', url:'#main/distribut/maintenance', mark:"agentsales:list" },
			]
		},
		{
			key: '3',
			url: '', 
			classStyle:'icon-report-manager', 
			name: '报表管理',
			level2List: [
				{ name:'分销产品销售报表', url:'#main/distripro/report', mark:"salesreport:list" },

			]
		}
	]
}