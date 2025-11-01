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

        name.className = 'my-2 p-2 border-2 rounded bg-white'
        name.textContent = `${meal.strMeal}`
        displayEl.appendChild(name)
    })
}

searchBtn.addEventListener('click', fetchRecipes);
recipe.addEventListener('keydown', fetchRecipes);


//when name is clicked must display the recipe
//must create a function showFullRecipe() to display full recipe after clicked and call that function inside the loop with event listener