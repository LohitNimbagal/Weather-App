const inputBox = document.querySelector('inputBox');
const searchBtn = document.getElementById('searchButton');
const weatherImg  = document.querySelector('.weatherImg');
const temperature  = document.querySelector('.temperature');
const description  = document.querySelector('.description');
const humidity  = document.querySelector('humidity');
const windspeed  = document.querySelector('windspeed');
    
async function checkWeather(city){
    const apiKey = "921737e48b030dc8a213b843f99f2d40";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());

    console.log(weatherData);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.valu);
});