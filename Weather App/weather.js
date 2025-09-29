let cityInput = document.getElementById('cityInput');
let searchBtn = document.getElementById('searchButton');
let weatherDisplay = document.getElementById('weatherDisplay');
let weatherForm = document.getElementById('weatherForm');
const APIkeys = "18b91061574008796645bad5f9ec0ecb";


weatherForm.addEventListener('submit', async event => {
    event.preventDefault();



})

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkeys}`;

    const response = await fetch(url);
    console.log(response);

    if(!response){
        throw new Error("Cant fetch data!");
    }

    return response.json();
}