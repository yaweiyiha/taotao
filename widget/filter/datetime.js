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
