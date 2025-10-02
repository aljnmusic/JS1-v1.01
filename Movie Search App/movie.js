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
            console.log(movieData);

            displayEl.innerHTML = '';

            movieData.forEach(movieResult => {
                const { title, overview, release_date, poster_path, vote_average } = movieResult;


                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movieDiv', 'p-4', 'bg-white', 'mb-4', 'rounded', 'shadow-lg');

                movieDiv.innerHTML = `
                    <h3 class="font-bold">${title}</h3>
                    <p class="italic">${overview}</p>
                    <p class="font-bold">Realease Date: ${release_date}</p>
                    <p class="font-bold">Vote: ${vote_average}</p>
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
                    
                
                `;

                displayEl.appendChild(movieDiv);

            })

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

    const data = await response.json();

    return data.results;
}

// function displayMovieInfo(movie){
//     const {}
// }

