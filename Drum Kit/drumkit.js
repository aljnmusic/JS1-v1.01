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
            clapPad.style.backgroundImage = "url('images/5.jpg')"
            clapPad.style.backgroundSize = "contain"
            clapPad.style.backgroundRepeat = "no-repeat"
            clapPad.style.backgroundColor = "tomato"

            break;
        case '2':
            playSound(cymbalAudio)
            cymbalPad.style.backgroundImage = "url('images/5.jpg')"
            cymbalPad.style.backgroundSize = "contain"
            cymbalPad.style.backgroundRepeat = "no-repeat"
            cymbalPad.style.backgroundColor = "tomato"
            break;
        case '3':
            playSound(hihatAudio)
            hihatPad.style.backgroundImage = "url('images/5.jpg')"
            hihatPad.style.backgroundSize = "contain"
            hihatPad.style.backgroundRepeat = "no-repeat"
            hihatPad.style.backgroundColor = "tomato"
            hihatPad.style.backgroundColor = "tomato";
            break;
        case '4':
            playSound(kickAudio)
            kickPad.style.backgroundImage = "url('images/5.jpg')"
            kickPad.style.backgroundSize = "contain"
            kickPad.style.backgroundRepeat = "no-repeat"
            kickPad.style.backgroundColor = "tomato"
            kickPad.style.backgroundColor = "tomato";
            break;
        case '5':
            playSound(percussionAudio)
            percussionPad.style.backgroundImage = "url('images/5.jpg')"
            percussionPad.style.backgroundSize = "contain"
            percussionPad.style.backgroundRepeat = "no-repeat"
            percussionPad.style.backgroundColor = "tomato"
            percussionPad.style.backgroundColor = "tomato";
            break;
        case '6':
            playSound(rimshotAudio)
            rimshotPad.style.backgroundImage = "url('images/5.jpg')"
            rimshotPad.style.backgroundSize = "contain"
            rimshotPad.style.backgroundRepeat = "no-repeat"
            rimshotPad.style.backgroundColor = "tomato"
            rimshotPad.style.backgroundColor = "tomato";
            break;
        case '7':
            playSound(snapAudio)
            snapPad.style.backgroundImage = "url('images/5.jpg')"
            snapPad.style.backgroundSize = "contain"
            snapPad.style.backgroundRepeat = "no-repeat"
            snapPad.style.backgroundColor = "tomato"
            snapPad.style.backgroundColor = "tomato";
            break;
        case '8':
            playSound(snareAudio)
            snarePad.style.backgroundImage = "url('images/5.jpg')"
            snarePad.style.backgroundSize = "contain"
            snarePad.style.backgroundRepeat = "no-repeat"
            snarePad.style.backgroundColor = "tomato";
            break;
        case '9':
            playSound(stompAudio)
            stompPad.style.backgroundImage = "url('images/5.jpg')"
            stompPad.style.backgroundSize = "contain"
            stompPad.style.backgroundRepeat = "no-repeat"
            stompPad.style.backgroundColor = "tomato";
            break;
        default:
            break;
    }
})

document.addEventListener('keyup', event => {
    switch (event.key) {
        case '1':
            clapPad.style.backgroundImage = '';
            clapPad.style.backgroundColor = '';// Reset background color
            break;
        case '2':
            cymbalPad.style.backgroundImage = '';
            cymbalPad.style.backgroundColor = '';
            break;
        case '3':
            hihatPad.style.backgroundImage = '';
            hihatPad.style.backgroundColor = '';
            break;
        case '4':
            kickPad.style.backgroundImage = '';
            kickPad.style.backgroundColor = '';
            break;
        case '5':
            percussionPad.style.backgroundImage = '';
            percussionPad.style.backgroundColor = '';
            break;
        case '6':
            rimshotPad.style.backgroundImage = '';
            rimshotPad.style.backgroundColor = '';
            break;
        case '7':
            snapPad.style.backgroundImage = '';
            snapPad.style.backgroundColor = '';
            break;
        case '8':
            snarePad.style.backgroundImage = '';
            snarePad.style.backgroundColor = '';
            break;
        case '9':
            stompPad.style.backgroundImage = '';
            stompPad.style.backgroundColor = '';
            break;
        default:
            break;
    }
})
