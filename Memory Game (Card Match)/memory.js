let gridEl = document.getElementById('grid');
let playEl = document.getElementById('play');
let resetBtn = document.getElementById('reset');

let cardsData = ['images/5.jpg', 'images/ad.jpg', 'images/f1.png', 'images/f4.png', 'images/kel.jpg', 'images/we.jpg']

let cards = []
let flippedCards = []
let matchedCards = 0
let lockBoard = false

function shuffleCards(array){
    return array.sort(() => Math.random() - 0.5)
}