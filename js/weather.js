//openweathermap API 활용
const API_KEY = ""; 

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(URL).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

if (API_KEY === "") {
    console.log("If you wanna show weather data, set openweathermap API KEY.(js/weather.js)");
} else {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}