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
    displayEl.className = 'p-4'

    displayEl.innerHTML = ''

    if(!data.meals){
        displayEl.textContent = 'No recipe have been found.'
        return
    }

    data.meals.forEach(meal => {
        let p = document.createElement('p')
        p.textContent = meal.strMeal
        displayEl.appendChild(p)
    })
}

searchBtn.addEventListener('click', fetchRecipes);