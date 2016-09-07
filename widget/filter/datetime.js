Vue.filter('datetime', function (n) {

	if(!n){
		return;
	}
    var date = new Date(n);
    
    let timeArr = [YYYY,MM,DD] = [date.getFullYear() , 
    (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ,
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()];

    return timeArr.join('-');

});

Vue.filter('detailtime', function (n) {

	if(!n){
		return;
	}
    var date = new Date(n);
    
    let timeArr = [YYYY,MM,DD] = [date.getFullYear() , 
    (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ,
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()];

    let hourArr = [
    	date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    	date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    	date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
    ];

    return `${timeArr.join('-')} ${hourArr.join(':')}`;

});
