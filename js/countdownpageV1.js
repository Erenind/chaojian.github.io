let btn = document.querySelector('#fullscreen');
let changeTime = document.querySelector('#changeTime')
let count_down = document.querySelector('.count-down');

//全屏
btn.addEventListener('click', function () {
    count_down.requestFullscreen();
    exit_area.style.display = 'block';
});

//更改时间
changeTime.addEventListener('click', function () {
    let a = prompt('格式：2026-6-7 或 2026 或 2026-6-7 14:00 (英文冒号) ');
    console.log(a);
    if (a == null | a == '') {
        if (localStorage.getItem('time')) {
            a = localStorage.getItem('time')
        } else {
            a = '2026-6-7';
        }
    }
    localStorage.setItem('time', a);
    location.reload();
});


let dates = document.querySelector('.dates');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let reflect = document.querySelector('.reflect');

//获取时间
if (localStorage.getItem('time')) {
    time = localStorage.getItem('time');
} else {
    var time = '2026-6-7';
}

//倒计时
function countDown() {
    let date = new Date();
    let date1 = +new Date();
    let date2 = +new Date(time);
    let timeOut = (date2 - date1) / 1000;

    if (timeOut < 0) {
        reflect.innerHTML = '倒计时结束';
        clearInterval(timer);
    }

    let s = parseInt(timeOut % 60);
    s = s < 10 ? '0' + s : s;
    seconds.innerText = s;

    let m = parseInt(timeOut / 60 % 60);
    m = m < 10 ? '0' + m : m;
    minutes.innerText = m;

    let h = parseInt(timeOut / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    hours.innerText = h;

    let d = parseInt(timeOut / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    dates.innerText = d;
}
countDown();

//开启定时器
let timer = setInterval(countDown, 1000);

// window.addEventListener('resize', function () {
//     if (window.innerWidth > 1000) {
//         dates.style.fontSize = hours.style.fontSize = minutes.style.fontSize = seconds.style.fontSize = '245px';
//         count_down.style.fontSize = '70px';
//     } else if (window.innerWidth > 700) {
//         dates.style.fontSize = hours.style.fontSize = minutes.style.fontSize = seconds.style.fontSize = '130px';
//         count_down.style.fontSize = '50px';
//     } else {
//         dates.style.fontSize = hours.style.fontSize = minutes.style.fontSize = seconds.style.fontSize = '50px';
//         count_down.style.fontSize = '30px';
//     }
// })

//退出全屏
let exit_area = document.querySelector('.count-down .group');
let exit_btn = document.querySelector('.count-down .btn');
exit_area.addEventListener('mouseover', function () {
    exit_btn.style.display = 'block';
});
exit_area.addEventListener('mouseout', function () {
    exit_btn.style.display = 'none';
})

//退出全屏
exit_btn.addEventListener('click', function () {
    document.exitFullscreen();
    exit_area.style.display = 'none';
});