Vue.filter('emergency', function (value) {
    
    let emergencyArr = {
        1 : '身份证',
        2 : '户口簿',
        3 : '护照',
        4 : '军官证',
        5 : '士兵证',
        6 : '港澳通行证',
        7 : '台胞证',
        8 : '临时身份证',
        9 : '外国人居留证',
        10 : '警官证',
        11 : '其他'
    }

    return emergencyArr[value];
})