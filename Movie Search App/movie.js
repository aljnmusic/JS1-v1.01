let formEl = document.getElementById('movieForm');
let inputEl = document.getElementById('movieInput');
let displayEl = document.getElementById('movieDisplay');
const APIkeys = "8dccd3adfe5180eaeb6ee68440f24b02";



formEl.addEventListener("submit", async event  => {
    event.preventDefault();

    const movie = inputEl.value;

    if(movie){
        try{
            const movieData = await getMovie(movie);
            console.log("Submitted");
        } catch(e){
            console.error(e);

        }
    } else {
        throw new Error("Error encountered");
    }
})

async function getMovie(movie){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkeys}&query=${movie}`;

    const response = await fetch(url);
    console.log(response);

    if(!response.ok){
        throw new Error("Cant fetch data")
    }

    return response.json();
}

