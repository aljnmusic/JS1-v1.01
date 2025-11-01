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
        const data = await response.json();
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

function showFullRecipe(meal) {
    console.log(meal.strMeal);          // name
    console.log(meal.strInstructions);

    let mealName = document.createElement('p')
    let instruction =  document.createElement('p')

    mealName.textContent = `${meal.strMeal}`
    instruction.textContent = `${meal.strInstructions}`

    displayEl.appendChild(mealName)
    displayEl.appendChild(instruction)
}

searchBtn.addEventListener('click', fetchRecipes);
recipe.addEventListener('keydown', fetchRecipes);


//when name is clicked must display the recipe
//must create a function showFullRecipe() to display full recipe after clicked and call that function inside the loop with event listener