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
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

searchBtn.addEventListener('click', fetchRecipes);