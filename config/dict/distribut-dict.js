export default {

	'consignmentTime'  : { 
		startkey :'offlineStartDate',
		endkey :'offlineEndDate', 
		name : '申请代销时间', 
		wrapperClass : 'col-md-5' , 
		type : 'time',
		validate:{"isrequire":true}
	},

 	'uploadContract'   : { 
 		key :'productName', 
 		name : '上传合同影印件', 
 		wrapperClass : 'col-md-5' , 
 		type : 'button' ,
 		value : '添加图片' ,
 		icon : 'addImg',
 		validate:{"isrequire":true}
 	},

 	'contractCopy'  :   { 
 		key :'attachments0Path', 
 		name : '合同电子影印件', 
 		wrapperClass : 'col-md-5 left-right' , 
 		type : 'img', 
 		src: ''
 	},
 	'distriName'  :   { 
 		key :'productName', 
 		name : '分销方名称', 
 		wrapperClass : 'col-md-2' ,
 		selfStyle: {paddingLeft: '50px'},  
 		type : 'text'
 	},
 	'padNum'  :   { 
 		selfStyle: {paddingLeft: '50px'}, 
 		key :'productName', 
 		name : 'pad数',
 		value : '20', 
 		wrapperClass : 'col-md-2' , 
 		type : 'text'
 	},
 	'distriLogo'  :   { 
 		selfStyle: {paddingLeft: '50px'}, 
 		key :'productName',  
 		wrapperClass : 'col-md-5' , 
 		type : 'img',
 		src: ''
 	},
 	'IdCardPositive'  :   { 
 		key :'identifyUrls身份证正面照片',  
 		name : '身份证正面照片' ,
 		selfStyle: {paddingLeft: '50px'}, 
 		wrapperClass : 'col-md-5 up-down' , 
 		type : 'img'
 	},
 	'IdCardNegative'  :   { 
 		key :'identifyUrls身份证反面照片', 
 		name : '身份证反面照片' , 
 		wrapperClass : 'col-md-5 up-down' , 
 		type : 'img',
 		src: 'static/img/default_user.jpg'
 	},
 	'transferCertificate'  :   { 
 		key :'evidenceUrls0', 
 		name : '转账凭证' , 
 		selfStyle: {paddingLeft: '50px'}, 
 		wrapperClass : 'col-md-5 up-down' , 
 		type : 'img'
 	},

 	//components
 	'commissionType'  :  { type: 'CommType',validate: {isrequire : true} },
 	//component functions
 	'payType'   : (name, key = '', value = '',subtype= '')  =>  ({ key :key, name : name,value : value, subtype: subtype, selfStyle: {paddingLeft: '50px', textAlign: 'left', position: 'relative', left: '-30px'}, wrapperClass : 'col-md-4' , type : 'text'}),
 	'baseDateText'  : (name, key = '', value = '',subtype= '') => ({ key :key, name : name , value: value,subtype: subtype, selfStyle: {textAlign: 'left'}, wrapperClass : 'col-md-6 up-down' , type : 'text', filter: 'datetime'}),
 	'baseText'  : (name, key = '', value = '',subtype= '') => ({ key :key, name : name , value: value,subtype: subtype, selfStyle: {textAlign: 'left'}, wrapperClass : 'col-md-6 up-down' , type : 'text'}),
 	'textList'  : (textArr) => ({  textArr : textArr ,selfStyle: {paddingLeft: '50px', textAlign: 'left'}, wrapperClass : 'col-md-6' , type : 'textList'}),
 	'rejectText': (name, key = '', value = '',subtype= '',classList='') => ({ key :key, name : name , value: value,subtype: subtype,classList:classList, selfStyle: {textAlign: 'left'}, wrapperClass : 'col-md-6 up-down' , type : 'text'}),
 }
