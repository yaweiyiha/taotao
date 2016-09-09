Vue.filter('gender', function (value) {
    
    let genderArr = {
        1 : '男',
        2 : '女',
    }

    return genderArr[value];
})