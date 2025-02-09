//elements
let fullscreenButton = document.querySelector('#fullscreenButton');
let countdownText = document.querySelector('.countdownText');
let main = document.querySelector('.main')
let exitFullscreenButton = document.querySelector('#exitFullscreenButton');
let changeTimeButton = document.querySelector('#changeTimeButton');
let infoButton = document.querySelector('#infoButton');
let introductionOutBox = document.querySelector('.introductionOutBox');
let introductionCloseButton = document.querySelector('.introductionCloseButton');
let inputOutBox = document.querySelector('.inputOutBox')
let inputBoxCloseButton = document.querySelector('.inputBoxCloseButton')
let chooseFontColor = document.querySelector('#chooseFontColor')
let fontColorSelectBox = document.querySelector('.fontColorSelectBox')
let fontSizeDecrease = document.querySelector('#fontSizeDecrease')
let colons = document.querySelectorAll('.colon')
let yellow = document.querySelector('#yellow')
let red = document.querySelector('#red')
let green = document.querySelector('#green')
let defaultColor = document.querySelector('#defaultColorSelecter')
let colorInput = document.querySelector('.inputColor')
let root = document.querySelector(':root')
let themeButtons = document.querySelectorAll('#themeButton')
let hiddenTopBarButton = document.querySelector('#hiddenTopBar')
let showTopBarButton = document.querySelector('#showTopBar')
let inputCancelButton = document.querySelector('#inputCancel')
let inputSubmitButton = document.querySelector('#inputSubmit')
let timeInput = document.querySelector('#inputTime')
let dontShowSeconds = document.querySelector('#dontShowSeconds')

//some functions
function hiddenElement(element){
    element.style.display = 'none';
}
function showElement(element, type = 'block'){
    element.style.display = type
}
function changeFontColor(color) {
    document.body.style.setProperty("--fontColor",color)
}
function changeFontSize(size) {
    document.body.style.setProperty("--defaultFontSize",size)
}
function changeColonSize(size) {
    document.body.style.setProperty("--defaultColonSize",size)
}
function setTheme(themeName) {
    root.setAttribute('data-theme',themeName)
}
function changeTimeText(timeText,showSecond) {
    if (showSecond) {
        countdownText.innerHTML = `${timeText[0]}<span class="colon">:</span>${timeText[1]}<span class="colon">:</span>${timeText[2]}<span class="colon">:</span>${timeText[3]}`
    } else {
        countdownText.innerHTML = `${timeText[0]}<span class="colon">:</span>${timeText[1]}<span class="colon">:</span>${timeText[2]}`
    }
}
// Date
function saveDate(name,value) {
    localStorage.setItem(name,value)
}
function getDate(name) {
    return localStorage.getItem(name)
}

// fullscreen
fullscreenButton.addEventListener('click',function(){
    main.requestFullscreen();
    hiddenElement(fullscreenButton)
    showElement(exitFullscreenButton)
});
exitFullscreenButton.addEventListener('click',function(){
    document.exitFullscreen()
    showElement(fullscreenButton)
    hiddenElement(exitFullscreenButton)
});

// showBox changeTime info chooseFontColor
let introductionOutBoxShow = false
infoButton.addEventListener('click',function(){
    if (introductionOutBoxShow) {
        hiddenElement(introductionOutBox)
        introductionOutBoxShow = false
    } else {
        showElement(introductionOutBox)
        introductionOutBoxShow = true
    }
});
let inputOutBoxShow = false
changeTimeButton.addEventListener('click',function(){
    if (inputOutBoxShow) {
        hiddenElement(inputOutBox)
        inputOutBoxShow = false
    } else {
        showElement(inputOutBox)
        inputOutBoxShow = true
    }
});

fontColorSelectBoxShow = false
chooseFontColor.addEventListener('click',function(){
    if (fontColorSelectBoxShow) {
        hiddenElement(fontColorSelectBox)
        fontColorSelectBoxShow = false
        chooseFontColor.parentElement.style.borderBottomLeftRadius = '7px'
        chooseFontColor.parentElement.style.borderBottomRightRadius = '7px'
    } else {
        showElement(fontColorSelectBox);
        chooseFontColor.parentElement.style.borderBottomLeftRadius = 0
        chooseFontColor.parentElement.style.borderBottomRightRadius = 0
        fontColorSelectBoxShow = true
    }
})
countdownText.addEventListener('click',function(){
    if (fontColorSelectBoxShow) {
        hiddenElement(fontColorSelectBox)
        fontColorSelectBoxShow = false
        chooseFontColor.parentElement.style.borderBottomLeftRadius = '7px'
        chooseFontColor.parentElement.style.borderBottomRightRadius = '7px'
    }
})

//closeButton introducionBox inputBox
introductionCloseButton.addEventListener('click',function(){
    hiddenElement(introductionCloseButton.parentElement.parentElement);
    introductionOutBoxShow = false
})
inputBoxCloseButton.addEventListener('click',function(){
    hiddenElement(inputBoxCloseButton.parentElement.parentElement)
    inputOutBoxShow = false
})

//font colon size 
if (getDate('fontSize') && getDate('colonSize')) {
    changeFontSize(getDate('fontSize') + 'px')
    changeColonSize(getDate('colonSize') + 'px')
}

currentFontSize = Number(window.getComputedStyle(countdownText).fontSize.split('px')[0])
currentColonSize = Number(window.getComputedStyle(colons[0]).fontSize.split('px')[0]);

fontSizeDecrease.addEventListener("click",function(){
    currentFontSize -= 5
    currentColonSize -= 3
    changeFontSize(currentFontSize + 'px')
    changeColonSize(currentColonSize + 'px')
    saveDate('fontSize',currentFontSize)
    saveDate('colonSize',currentColonSize)
})
fontSizeIncrease.addEventListener("click",function(){
    currentFontSize += 5
    currentColonSize += 3
    changeFontSize(currentFontSize + 'px')
    changeColonSize(currentColonSize + 'px')
    saveDate('fontSize',currentFontSize)
    saveDate('colonSize',currentColonSize)
})

//font color
if (getDate('fontColor')) {
    changeFontColor(getDate('fontColor'))
}
yellow.addEventListener('click',function(){
    changeFontColor(window.getComputedStyle(this).backgroundColor)
    saveDate('fontColor',window.getComputedStyle(this).backgroundColor)
})
red.addEventListener('click',function(){
    changeFontColor(window.getComputedStyle(this).backgroundColor)
    saveDate('fontColor',window.getComputedStyle(this).backgroundColor)
})
green.addEventListener('click',function(){
    changeFontColor(window.getComputedStyle(this).backgroundColor)
    saveDate('fontColor',window.getComputedStyle(this).backgroundColor)
})
defaultColor.addEventListener('click',function(){
    changeFontColor(window.getComputedStyle(this).backgroundColor)
    saveDate('fontColor',window.getComputedStyle(this).backgroundColor)
})
colorInput.addEventListener('focus',function(){
    colorInput.addEventListener('input',function(e){
        changeFontColor(e.target.value)
        saveDate('fontColor',e.target.value)
    })
})

// theme change
if (getDate('themeNumber')) {
    let i = parseInt(getDate('themeNumber'))
    setTheme(themeButtons[i].innerHTML)
    themeButtons[i].style.backgroundColor = 'var(--hoverColor)'
}
for (let i = 0;i<themeButtons.length;i++) {
    themeButtons[i].addEventListener('click',function(){
        setTheme(this.innerHTML)
        for (let i = 0;i<themeButtons.length;i++) {
            themeButtons[i].style.backgroundColor = 'var(--spanColor)'
        }
        this.style.backgroundColor = 'var(--hoverColor)'
        saveDate('themeNumber',i)
    })
} 

// hidden topBar
hiddenTopBarButton.addEventListener('click',function(){
    hiddenElement(this.parentElement.parentElement)
    showTopBarButton.style.display = 'block'
})
showTopBarButton.addEventListener('click',function(){
    showElement(hiddenTopBarButton.parentElement.parentElement,'flex')
    this.style.display = 'none'
})

// don't show seconds
let showSecond
if (getDate('showSecond') == "false") {
    showSecond = false
    dontShowSeconds.innerHTML = '显示秒'
} else {
    showSecond = true
}
dontShowSeconds.addEventListener('click',function(){
    if (showSecond) {
        showSecond = false
        this.innerHTML = '显示秒'
        saveDate('showSecond',showSecond)
    } else {
        showSecond = true
        this.innerHTML = '不显示秒'
        saveDate('showSecond',showSecond)
    }
})

// countdown
let targetDate
if (getDate("targetDate")) {
    targetDate = getDate("targetDate")
} else {
    targetDate = '2026-6-7'
}
let timeText = []

let date = new Date();
let targetDateTimestamp = +new Date(targetDate);

function getTimeText(targetDateTimestamp) {
    let nowDateTimestamp = +new Date();
    let timeRest = (targetDateTimestamp - nowDateTimestamp) / 1000

    let seconds = parseInt(timeRest % 60)
    seconds = seconds < 10 && seconds >= 0 ? '0' + seconds : seconds
    let minutes = parseInt(timeRest / 60 % 60)
    minutes = minutes < 10 && minutes >= 0 ? '0' + minutes : minutes
    let hours = parseInt(timeRest / 60 / 60 % 24)
    hours = hours < 10 && hours >= 0 ? '0' + hours : hours
    let days = parseInt(timeRest / 60 / 60 / 24)
    days = days < 10 && days >= 0 ? '0' + days : days

    timeText = [days,hours,minutes,seconds]
    return timeText
}

let timer = setInterval(function(){
    changeTimeText(getTimeText(targetDateTimestamp),showSecond)
},1000)

// input time
inputCancelButton.addEventListener('click',function(){
    hiddenElement(inputOutBox)
    inputOutBoxShow = false
    timeInput.value = ''
})
inputSubmitButton.addEventListener('click',function(){
    if (timeInput.value == '') {
        return
    } else {
        targetDate = timeInput.value
        targetDateTimestamp = +new Date(targetDate)
        timeInput.value = ''
        hiddenElement(inputOutBox)
        inputOutBoxShow = false
        saveDate('targetDate',targetDate)
    }
})
timeInput.addEventListener('keyup',function(e){
    if (e.key === 'Enter' || e.keyCode === 13) {
        inputSubmitButton.click()
    }
})
