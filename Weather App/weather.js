let cityInput = document.getElementById('cityInput');
let searchBtn = document.getElementById('searchButton');
let weatherDisplay = document.getElementById('weatherDisplay');
let weatherForm = document.getElementById('weatherForm');
const APIkeys = "18b91061574008796645bad5f9ec0ecb";


weatherForm.addEventListener('submit', async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try {
            const weatherData = await getWeather(city);
            displayWeatherInfo(weatherData);
        } catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        throw new Error("Please enter your city");
    }


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

function displayWeatherInfo(data) {
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
}