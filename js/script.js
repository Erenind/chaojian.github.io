var Flipper = /** @class */ (function() {
    // 定义Flipper类，用于控制翻牌动画
    function Flipper(node, currentTime, nextTime) {
        this.isFlipping = false; // 是否正在翻转
        this.duration = 600; // 翻转动画持续时间
        this.flipNode = node; // 翻转节点
        this.frontNode = node.querySelector(".front"); // 前节点
        this.backNode = node.querySelector(".back"); // 后节点
        this.setFrontTime(currentTime); // 设置前节点的时间
        // console.log(currentTime);
        this.setBackTime(nextTime); // 设置后节点的时间
        // console.log(nextTime);
    }
    // 设置前节点的时间
    Flipper.prototype.setFrontTime = function(time) {
        this.frontNode.dataset.number = time;
        // console.log(this.frontNode.dataset.number);
    };
    // 设置后节点的时间
    Flipper.prototype.setBackTime = function(time) {
        this.backNode.dataset.number = time;
    };
    // 执行翻转动画
    Flipper.prototype.flipDown = function(currentTime, nextTime) {
        var _this = this;
        if (this.isFlipping) {
            return false;
        }
        this.isFlipping = true;
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
        this.flipNode.classList.add("running");
        setTimeout(function() {
            _this.flipNode.classList.remove("running");
            _this.isFlipping = false;
            _this.setFrontTime(nextTime);
        }, this.duration);
    };
    return Flipper;
}());

var getTimeFromDate = function(date) {
    // 将日期对象转换为时间字符串，并提取前8个字符，然后去除冒号
    return date
        .toTimeString()
        .slice(0, 8)
        .split(":")
        .join("");
};

var flips = document.querySelectorAll(".flip");
var now = new Date();
var nowTimeStr = countDown();
var nextTimeStr = countDown2();
var flippers = Array.from(flips).map(function(flip, i) {
    // 为每个翻转元素创建一个Flipper实例
    return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
});
setInterval(function() {
    var now = new Date();
    // 获取当前时间前一秒的时间字符串
    var nowTimeStr = countDown();
    // 获取当前时间的时间字符串
    var nextTimeStr = countDown2();
    for (var i = 0; i < flippers.length; i++) {
        // console.log(nowTimeStr[i], nextTimeStr[i]);
        // 如果当前时间字符与下一时间字符相同，则跳过
        if (nowTimeStr[i] === nextTimeStr[i]) {
            continue;
        }
        
        // 否则，执行翻转操作
        flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
    }
}, 1000);


function countDown() {
    let date = new Date();
    let date1 = +new Date();
    let time = '2026-6-7';
    let date2 = +new Date(time);
    let timeOut = (date2 - date1) / 1000;
    
    let s = parseInt(timeOut % 60);
    s = s < 10 ? '0' + s : s;
    let m = parseInt(timeOut / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let h = parseInt(timeOut / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let d = parseInt(timeOut / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    return d + '' +  h + m  + s;
}
function countDown2() {
    let date = new Date();
    let date1 = +new Date();
    let time = '2026-6-7';
    let date2 = +new Date(time);
    let timeOut = (date2 - date1 - 1000) / 1000;
    
    let s = parseInt(timeOut % 60);
    s = s < 10 ? '0' + s : s;
    let m = parseInt(timeOut / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let h = parseInt(timeOut / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let d = parseInt(timeOut / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    return d + '' +  h + m  + s;
}

// menu菜单栏
let menuBotton = document.querySelector('.menu');
let menuBox = document.querySelector('.menu-box');
let closeBotton = document.querySelector('.close');
menuBotton.addEventListener('click', function() {
    menuBox.style.display = 'block';
})
closeBotton.addEventListener('click',function(){
    menuBox.style.display = 'none';
})