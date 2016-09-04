Vue.filter('datetime', function (n) {

    var date = new Date(n);
    
    let timeArr = [YYYY,MM,DD] = [date.getFullYear() , 
    (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ,
    date.getDate()];

    return timeArr.join('-');

})