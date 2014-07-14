(function () {
    var a = -1, b = 2, c;

    //Way 1//
    var flag = true;
    c = !flag * a + flag * b;

    flag = false;
    c = !flag * a + flag * b;

    //Way 2//
    var array = [a, b];

    flag = true;
    c = array[+flag];

    flag = false;
    c = array[+flag];
})();