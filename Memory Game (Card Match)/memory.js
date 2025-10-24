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

function createCards(){
    cards = shuffleCards([...cardsData, ...cardsData])
    gridEl.innerHTML = '';

    cards.forEach(value => {
        const card = document.createElement('div');
        card.className = 'bg-gray-200 h-24 flex items-center justify-center cursor-pointer rounded shadow text-3xl font-bold select-none'
        card.textContent = '?'
        card.dataset.value = value;
        card.addEventListener('click', () => flipCard(card))
        gridEl.appendChild(card);
    })

    flippedCards = []
    matchedCards = 0
    lockBoard = false
}

function flipCard(card){
    if(lockBoard){
        return
    }

    if(flippedCards.includes(card)){
        return
    }

    if(card.textContent !== '?'){
        return
    }

    const value = card.dataset.value
    flippedCards.push(value)

    if(flippedCards.length === 2){
        checkMatch()
    }

}

function checkMatch(){
    const { card1 , card2 } = flippedCards

    if(card1.dataset.value === card2.dataset.value){
        matchedCards += 2
        flippedCards = []

        if(matchedCards.length === cards.length){
            setTimeout(() => alert('You won'), 500)
        }
    } else {
        lockBoard = true
        setTimeout(() => {
            flippedCards.forEach(card => (card.textContent = '?'))
            flippedCards = []
            lockBoard = false
            }, 1000
        )
    }
}