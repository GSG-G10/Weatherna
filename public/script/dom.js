const inputBar = document.getElementById("input");
const searchButton = document.getElementById("btn");
const countryName = document.getElementById("country-name");
const temp = document.getElementById("temp");
const weatherStatus = document.getElementById("weather-status");
const windSpeed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const badInput = document.getElementById("bad-input");
fetching({value:'palestine'});
const fetchWeather = (weatherData)=>{
    console.log(weatherData);
    countryName.innerText = ("Country Name: "+ weatherData.name)
    temp.innerText = ("Temperature " + weatherData.main.temp) + "C°";
    weatherStatus.innerText = ("Weather Status: "+ weatherData.weather[0].description)
    windSpeed.innerText = ("Wind Speed: "+ weatherData.wind.speed +"m/s")
    humidity.innerText = ("Humidity: " + weatherData.main.humidity + "%")
}   

searchButton.addEventListener('click', ()=>{
    const value = inputBar.value;
        const data={value: value.trim()}
        fetching(data);
    }
)

