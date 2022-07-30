function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画，也就是停止定时器
            clearInterval(obj.timer);
            //回调函数，当动画执行完成后在调用这个函
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 30);

}