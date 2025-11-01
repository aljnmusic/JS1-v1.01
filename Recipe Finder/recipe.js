let recipe = document.getElementById('recipeName')
let searchBtn = document.getElementById('search')
let clearBtn = document.getElementById('clear')
let mainGrid = document.getElementById('main')
let displayEl = document.getElementById('recipesDisplay')

async function fetchRecipes() {
    const query = recipe.value.trim()

    if(!query) {
        console.log("Enter a recipe name.")
        return
    }

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`

    try {
        const response = await fetch(url);
        const data = await response.json()
        allMenu = data;
        displayRecipe(data)
        console.log(data)
    } catch (error) {
        console.log(error);
    }


}

function displayRecipe(data) {
    displayEl.className = 'p-4 w-full text-center'

    displayEl.innerHTML = ''


    if(!data.meals){
        displayEl.textContent = 'No recipe have been found.'
        return
    }

    data.meals.forEach(meal => {
        let name = document.createElement('p')

        name.className = 'my-2 p-2 border-2 rounded bg-white hover:bg-red-50'
        name.textContent = `${meal.strMeal}`
        name.dataset.value = meal.idMeal
        displayEl.appendChild(name)

        name.addEventListener(`click`, (event) => {
            event.preventDefault()

            const meal_id = event.target.dataset.value
            console.log(meal_id)

            const selectedMeal = data.meals.find(m => m.idMeal === meal_id)

            showFullRecipe(selectedMeal)

        })
    })
}

let allMenu = null

function showFullRecipe(meal) {
    console.log(meal.strMeal);          // name
    console.log(meal.strInstructions);


    let mealName = document.createElement('p')
    let instruction =  document.createElement('p')

    instruction.innerHTML = meal.strInstructions.replace(/\r\n|\n/g, '<br><br>');
    let backBtn = document.createElement('button')
    let backContainer = document.createElement('div')

    backContainer.style.display = 'flex'
    backContainer.style.justifyContent = 'flex-start'
    backContainer.appendChild(backBtn)
    backBtn.className = 'bg-red-500 w-32 border rounded p-1'
    backBtn.textContent = 'Back To Meals'

    mealName.className = 'mb-2 mt-2 text-left'
    mealName.textContent = `Meal: ${meal.strMeal}`

    instruction.className = 'text-left '
    // instruction.textContent = `${meal.strInstructions}`


    displayEl.innerHTML = ''

    backBtn.addEventListener('click', (event) => {
        displayRecipe(allMenu)
    })

    displayEl.appendChild(backContainer)
    displayEl.appendChild(mealName)
    displayEl.appendChild(instruction)
}

searchBtn.addEventListener('click', fetchRecipes);
recipe.addEventListener('keydown', fetchRecipes);


//when name is clicked must display the recipe
//must create a function showFullRecipe() to display full recipe after clicked and call that function inside the loop with event listener