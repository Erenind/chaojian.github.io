// 创建一个包含12个月的数组
let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
       
//获取当前年份
let date = new Date();
let presentYear = date.getFullYear();

//获取ul(calendarBody)
let calendarBody = document.querySelector(".calendarBody");

//根据星期创建空白li
let janOneDay = new Date(presentYear, 0)
let janOneDayWeek = janOneDay.getDay();
for (i=0;i < janOneDayWeek;i++) {
  let li = document.createElement('li');
  calendarBody.appendChild(li);
}

//创建和增加liNumbers
let liNumber = 0;
liNumber += janOneDayWeek

//获取某月的天数
function getMonthDays(monthNumber){
  //获取该月的第一天
  let firstDay = new Date(presentYear, monthNumber);
  // 获取该月的最后一天
  let lastDay = new Date(presentYear, firstDay.getMonth() + 1, 0);
  return lastDay.getDate();
}

//创建li
for (i=0;i < months.length;i++) {
  //增加liNmuber
  liNumber += getMonthDays(i);
  
  //创建li
  let getMonthDayNumber = getMonthDays(i);
  for (j=0;j < getMonthDayNumber;j++) {
    let li = document.createElement('li');
    li.id = months[i] + (j + 1);
    li.innerHTML = j + 1;
    //1号添加月份
    if (j == 0) {
      let span = document.createElement('span');
      span.innerHTML = months[i];
      li.appendChild(span);
    }
    calendarBody.appendChild(li);
  }
}

//增加末尾空白li
for (i=0;i < 7 - liNumber % 7;i++) {
  let li = document.createElement('li');
  calendarBody.appendChild(li);
}

// 当天突出显示
//获取当天的ID
let id = months[date.getMonth()] + '' + date.getDate();
let presentDay = calendarBody.querySelector('#' + id)
presentDay.classList.add('present');