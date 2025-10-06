    let formEl = document.getElementById('currForm')
    let inputEl = document.getElementById('currInput')
    let convertBtn = document.getElementById('convertButton')
    let clearBtn = document.getElementById('clearButton')
    let dropdownEl =  document.getElementById('dropdownContent')
    let selected = document.getElementById('selected')


    formEl.addEventListener('submit', (event)=>{
        event.preventDefault()

        let selectedCurrency = selected.textContent

        if(selectedCurrency === 'Select Currency') {
            alert("Please Select a Currency!")
            return;
        }

        let amount = Number(inputEl.value)

        if(selectedCurrency === 'USD') {
            console.log(`Current Amount: ${(amount * 0.01717).toFixed(2)}`)
        }

    })

    dropdownEl.addEventListener('click', (event)=>{
        event.preventDefault()

        let list = document.getElementById('dropdownList')

        if(list.classList.contains('hidden')){
            list.classList.remove('hidden')
        } else {
            list.classList.add('hidden')
        }

        let currencies = document.querySelectorAll('#currencies li')
        currencies.forEach(item => {
            item.addEventListener('click', (event)=>{
                event.preventDefault()

                selected.textContent = item.textContent


            })
        })


        // let currencyItems = document.querySelectorAll('#currencies li')
        //
        // currencyItems.forEach(item => {
        //     let selectedItem = item.textContent
        //
        //     selected.textContent = selectedItem
        //
        //     inputEl.textContent = `Enter amount in ${selectedItem}`
        //
        //     dropdownEl.classList.remove('hidden')
        // })

    })