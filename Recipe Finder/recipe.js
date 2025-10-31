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
    displayEl.className = 'p-4 bg-red-100 '

    displayEl.innerHTML = ''


    // instruction.className = 'mt-2'

    if(!data.meals){
        displayEl.textContent = 'No recipe have been found.'
        return
    }

    data.meals.forEach(meal => {
        let name = document.createElement('p')
        // let instruction = document.createElement('p')

        name.textContent = `${meal.strMeal}`
        // instruction.textContent = `Instruction: ${meal.strInstructions}`
        displayEl.appendChild(name)
        // displayEl.appendChild(instruction)
    })
}

searchBtn.addEventListener('click', fetchRecipes);


//when name is clicked must display the recipe
//must create a function showFullRecipe() to display full recipe after clicked and call that function inside the loop with event listener