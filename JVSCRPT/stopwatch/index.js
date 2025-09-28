// const display = document.getElementById("display");
// let timer = null;
// let starttime = 0;
// let elapsetime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         starttime = Date.now() - elapsetime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop(){
//     if(isRunning){
//         clearInterval(timer);
//         elapsetime = Date.now() - starttime;
//         isRunning = false;
//     }
// }

// function reset(){
//     clearInterval(timer);
//     starttime = 0;
//     elapsetime = 0;
//     isRunning = false;
//     display.textContent = "Miss you ii";

// }

// function update(){

//     const currenttime = Date.now();
//     elapsetime = currenttime - starttime;

//     let hours = Math.floor(elapsetime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsetime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsetime / (1000 % 60 ));
//     let milliseconds = Math.floor(elapsetime % 1000 / 10);

//     hours = hours.toString().padStart(2, 0);
//     minutes = minutes.toString().padStart(2, 0);
//     seconds = seconds.toString().padStart(2, 0);
//     milliseconds = milliseconds.toString().padStart(2, 0);


//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsetime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        starttime = Date.now() - elapsetime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        starttime = Date.now() - elapsetime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsetime = 0;
    isRunning = false;

    display.textContent = "00:00:00:00";
}

function update(){
    const currenttime = Date.now();
    elapsetime = currenttime - starttime;

    let hours = Math.floor(elapsetime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsetime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsetime / (1000 % 60 ));
    let milliseconds = Math.floor(elapsetime % 1000 / 10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    milliseconds = milliseconds.toString().padStart(2, 0);
    

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}