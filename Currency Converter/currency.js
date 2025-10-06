let formEl = document.getElementById('currForm')
let inputEl = document.getElementById('currInput')
let convertBtn = document.getElementById('convertButton')
let clearBtn = document.getElementById('clearButton')
let dropdownEl =  document.getElementById('dropdownContent')


formEl.addEventListener('submit', (event)=>{
    event.preventDefault()



})

dropdownEl.addEventListener('click', (event)=>{
    event.preventDefault()

    let list = document.getElementById('dropdownList')

    if(list.classList.contains('hidden')){
        list.classList.remove('hidden')
    } else {
        list.classList.add('hidden')
    }

    let currencyItems = document.querySelectorAll('#currencies li')

    currencyItems.forEach(item => {
        let selectedItem = item.textContent
        let selected = document.getElementById('selected')

        selected.textContent = selectedItem
    })

})