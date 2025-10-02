let formEl = document.getElementById('movieForm');
let inputEl = document.getElementById('movieInput');
let displayEl = document.getElementById('movieDisplay');
const APIkeys = "8dccd3adfe5180eaeb6ee68440f24b02";

async function getMovie(movie){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${movieName}`;

    const response = await fetch(url);
    console.log(response);

    if(!response){
        throw new Error("Cant fetch data")
    }

    return response.json();
}

