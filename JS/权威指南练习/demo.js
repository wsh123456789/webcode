window.addEventListener('load', function () {
    // 1. 获取元素
    var cloud = document.querySelector('.cloud');
    var nav = document.querySelector('.nav');
    var lis = nav.querySelectorAll('li');
    // 2. 给所有的小li绑定事件
    // 这个current作为筋斗云的起始位置
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        // 鼠标经过，把当前小li的位置作为目标值
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft);
        })
        // 鼠标离开，回到起始位置
        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, current);
        })
        // 当鼠标点击，就把当前定位作为目标值（把点击的目标当做筋斗云起始位置）
        lis[i].addEventListener('click', function () {
            current = this.offsetLeft;
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';
        })
    }
})