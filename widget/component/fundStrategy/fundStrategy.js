let style = __inline('./fundStrategy.inline.less');
let tpl = __inline('./fundStrategy.tpl');

require.loadCss({
    name: 'admin-widget-fundStrategy-style',
    content: style
});

export default Vue.component('fund-strategy', {
 	template: tpl,
 	props: {
 		disable: 		{default: false},
 		fundtype : 		{default: '60'},
 		fundsubtype : 	{default: ''},
 	},
 	data: () => ({
 		fundTypeFk: '',
 		StaffCommUnit: '元',
		items : [],
		equityStrategy: [
			{key : 100 ,value : '股票多头'},
 			{key : 110 ,value : '股票多空'},
 			{key : 120 ,value : '股票量化'},
 			{key : 130 ,value : '行业策略'},
 			{key : 140 ,value : '套利策略'},
 			{key : 150 ,value : '事件驱动'},
 			{key : 160 ,value : '套利策略'},
		],
		futuresStrategy : [
			{key : 170 ,value : '主管交易'},
 			{key : 180 ,value : '程序化交易'},
 			{key : 190 ,value : '套利策略'},
 			{key : 200 ,value : '复合策略'},
		],

		BondStrategy : [],
		otherStrategy : [
			{key : 210 ,value : '股权投资'},
 			{key : 220 ,value : '另类投资'},
 			{key : 230 ,value : '宏观对冲'},
 			{key : 240 ,value : '组合基金'},
		]

 	}),


});