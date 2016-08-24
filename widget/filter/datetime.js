Vue.filter('datetime', function (n) {

    var date = new Date(n);
    
    let timeArr = [Y,M,D] = [date.getFullYear() , 
    (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ,
    date.getDate()];

    return timeArr.join('-');

})