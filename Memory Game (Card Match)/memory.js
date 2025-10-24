let gridEl = document.getElementById('grid')
let playEl =  document.getElementById('play')
let resetBtn = document.getElementById('reset')

let cardsData = ['images/5.jpg', 'images/ad.jpg', 'images/f1.png', 'images/f4.png', 'images/kel.jpg', 'images/we.jpg'];

let cards = []
let flippedCards = []
let matchedCards = 0
let lockBoard = false

function shuffleCards(array){
    return array.sort(() => Math.random() - 0.5)
}

function createCards(){
    cards = shuffleCards([...cardsData, ...cardsData])
    gridEl.innerHTML = ''

    cards.forEach(() => {
        const card = document.createElement('div')
        card.className = 'bg-gray-200 h-24 flex items-center justify-center cursor-pointer rounded shadow select-none'
        card.textContent = '?'
        card.dataset.value = value
        card.addEventListener('click', flipCard())
        gridEl.appendChild(card)
    })

    flippedCards = []
    matchedCards = 0
    lockBoard = false
}

function flipCard(){
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

    if(value.endsWith('.jpg') || value.endsWith('.png')){
        card.innerHTML = `<img src=${value} class="h-full w-full object-cover rounded" alt="card images" />`
    } else {
        card.textContent = '?'
    }

    flippedCards.push(card)

    if(card.length === 2){
        checkMatch()
    }
}