let focusBtn = document.getElementById('focus-btn');
let shortBreakBtn = document.getElementById('shortBreak-btn');
let longBreakBtn = document.getElementById('longBreak-btn');
let timeEl =  document.getElementById('time');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let currentMode
let FocusTimeLeft = 1500
let shortBreakLeft = 300
let longBreakLeft = 600
let minutes
let seconds
let interval

function setTimerText(text){
    timeEl.textContent = text
}

function currentModeState(text){
    currentMode = text
}

focusBtn.addEventListener('click', () => {
    currentModeState('focus')
    setTimerText('25:00')
    FocusTimeLeft = 1500
    pauseBtn.disabled = true

})

shortBreakBtn.addEventListener('click', () => {
    currentModeState('shortBreak')
    setTimerText('5:00')
    shortBreakLeft = 300
    pauseBtn.disabled = true
})

longBreakBtn.addEventListener('click', () => {
    currentModeState('longBreak')
    setTimerText('10:00')
    longBreakLeft = 300
    pauseBtn.disabled = true

})

function focusUI(){
    focusBtn.style.backgroundColor = colors.red
    startBtn.style.backgroundColor = colors.white
    startBtn.style.color = colors.black
    setButtonStyle(pauseBtn, true)
}

function shortBreakIU(){
    shortBreakBtn.style.backgroundColor = colors.green
    startBtn.style.backgroundColor = colors.white
    startBtn.style.color = colors.black
    setButtonStyle(pauseBtn, true)
}

function longBreakUI(){
    longBreakBtn.style.backgroundColor = colors.red
    startBtn.style.backgroundColor = colors.white
    startBtn.style.color = colors.black
    setButtonStyle(pauseBtn, true)
}

startBtn.addEventListener('click', () => {
    if (currentMode === 'focus') {
        if(!interval) {
            interval = setInterval(FocusTimer, 1000)
            focusUI()
            shortBreakBtn.disabled = true
            longBreakBtn.disabled = true

            focusBtn.disabled = true
            pauseBtn.disabled = false

        }
    } else if(currentMode === 'shortBreak'){
        if(!interval){
            interval = setInterval(shortBreakTimer, 1000)
            shortBreakIU()
            focusBtn.disabled = true
            longBreakBtn.disabled = true

            pauseBtn.disabled = false
            shortBreakBtn.disabled = true
        }
    } else if(currentMode === 'longBreak'){
        if(!interval){
            interval = setInterval(longBreakTimer, 1000)
            longBreakUI()
            focusBtn.disabled = true
            shortBreakBtn.disabled = true

            pauseBtn.disabled = false
            longBreakBtn.disabled = true
        }
    } else {
        alert("Select a Mode")
    }
})

function longBreakTimer(){
    longBreakLeft = longBreakLeft - 1
    minutes = Math.floor(longBreakLeft / 60)
    seconds = longBreakLeft % 60
    timeEl.textContent = minutes + ':' + seconds.toString().padStart(2, "0")

    if(longBreakLeft === 0){
        clearInterval(interval)
        focusBtn.disabled = false
        shortBreakBtn.disabled = false
        longBreakBtn.disabled = false
        interval = null
    }
}

function shortBreakTimer(){
    shortBreakLeft = shortBreakLeft - 1
    minutes = Math.floor(shortBreakLeft / 60)
    seconds = shortBreakLeft % 60
    timeEl.textContent = minutes + ':' + seconds.toString().padStart(2, "0")

    if(shortBreakLeft === 0){
        clearInterval(interval)
        focusBtn.disabled = false
        shortBreakBtn.disabled = false
        longBreakBtn.disabled = false
        interval = null
    }
}

function FocusTimer(){
    FocusTimeLeft = FocusTimeLeft - 1
    minutes = Math.floor(FocusTimeLeft / 60)
    seconds = FocusTimeLeft % 60
    timeEl.textContent = minutes + ':' + seconds.toString().padStart(2, "0")

    if(FocusTimeLeft === 0){
        clearInterval(interval)
        focusBtn.disabled = false
        shortBreakBtn.disabled = false
        longBreakBtn.disabled = false
        interval = null
    }
}

pauseBtn.addEventListener('click', () => {
    pauseTimer()
})

function pauseTimer(){
    setButtonStyle(pauseBtn, colors.white)
    setButtonStyle(pauseBtn, true, colors.black)
    setButtonStyle(startBtn)
    setButtonStyle(startBtn, true)
    startBtn.textContent = 'RESUME'
    clearInterval(interval)
    interval = null
}

resetBtn.addEventListener('click', () => {
    resetTimer()
})

const colors = {
    bgGray: '#6b7280',
    textGray: '#e5e7eb',
    black: 'black',
    white: 'white',
    red: 'red',
    green: 'green'
}

function setButtonStyle(btn, withText = false, textColor = colors.textGray){
    btn.style.backgroundColor = colors.bgGray
    if(withText) btn.style.color = textColor
}

function resetTimer(){
    timeEl.textContent = '00:00'
    setButtonStyle(startBtn, true)
    setButtonStyle(focusBtn)
    setButtonStyle(shortBreakBtn)
    setButtonStyle(longBreakBtn)
    setButtonStyle(pauseBtn, true)
    clearInterval(interval)
    interval = null

    FocusTimeLeft = 1500
    shortBreakLeft = 300
    longBreakLeft = 600

    focusBtn.disabled = false
    shortBreakBtn.disabled = false
    longBreakBtn.disabled = false

    startBtn.textContent = "START"
}
