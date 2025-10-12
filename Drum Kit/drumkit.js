const clapPad = document.getElementById('clap');
const cymbalPad = document.getElementById('cymbal');
const hihatPad = document.getElementById('hihat');
const kickPad = document.getElementById('kick');
const percussionPad = document.getElementById('percussion');
const rimshotPad = document.getElementById('rimshot');
const snapPad = document.getElementById('snap');
const snarePad = document.getElementById('snare');
const stompPad = document.getElementById('stomp');

const clapAudio = document.getElementById('audio-clap');
const cymbalAudio = document.getElementById('audio-cymbal');
const hihatAudio = document.getElementById('audio-hihat');
const kickAudio = document.getElementById('audio-kick');
const percussionAudio = document.getElementById('audio-percussion');
const rimshotAudio = document.getElementById('audio-rimshot');
const snareAudio = document.getElementById('audio-snare');
const stompAudio = document.getElementById('audio-stomp');
const snapAudio = document.getElementById('audio-snap');

function playSound(audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
}

clapPad.addEventListener('click', () => playSound(clapAudio))
cymbalPad.addEventListener('click', () => playSound(cymbalAudio))
hihatPad.addEventListener('click', () => playSound(hihatAudio))
kickPad.addEventListener('click', () => playSound(kickAudio))
percussionPad.addEventListener('click', () => playSound(percussionAudio))
rimshotPad.addEventListener('click', () => playSound(rimshotAudio))
snapPad.addEventListener('click', () => playSound(snapAudio))
snarePad.addEventListener('click', () => playSound(snareAudio))
stompPad.addEventListener('click', () => playSound(stompAudio))

document.addEventListener('keydown', event => {
    switch (event.key) {
        case '1':
            playSound(clapAudio)
            clapPad.style.backgroundColor = "tomato";
            break;
        case '2':
            playSound(cymbalAudio)
            cymbalPad.style.backgroundColor = "tomato";
            break;
        case '3':
            playSound(hihatAudio)
            hihatPad.style.backgroundColor = "tomato";
            break;
        case '4':
            playSound(kickAudio)
            kickPad.style.backgroundColor = "tomato";
            break;
        case '5':
            playSound(percussionAudio)
            percussionPad.style.backgroundColor = "tomato";
            break;
        case '6':
            playSound(rimshotAudio)
            rimshotPad.style.backgroundColor = "tomato";
            break;
        case '7':
            playSound(snapAudio)
            snapPad.style.backgroundColor = "tomato";
            break;
        case '8':
            playSound(snareAudio)
            snarePad.style.backgroundColor = "tomato";
            break;
        case '9':
            playSound(stompAudio)
            stompPad.style.backgroundColor = "tomato";
            break;
        default:
            break;
    }
})

document.addEventListener('keyup', event => {
    switch (event.key) {
        case '1':
            clapPad.style.backgroundColor = ''; // Reset background color
            break;
        case '2':
            cymbalPad.style.backgroundColor = '';
            break;
        case '3':
            hihatPad.style.backgroundColor = '';
            break;
        case '4':
            kickPad.style.backgroundColor = '';
            break;
        case '5':
            percussionPad.style.backgroundColor = '';
            break;
        case '6':
            rimshotPad.style.backgroundColor = '';
            break;
        case '7':
            snapPad.style.backgroundColor = '';
            break;
        case '8':
            snarePad.style.backgroundColor = '';
            break;
        case '9':
            stompPad.style.backgroundColor = '';
            break;
        default:
            break;
    }
});
