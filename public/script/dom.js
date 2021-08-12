const eror = document.querySelector("#eror");
const city = document.getElementById("countryName");
const search = document.getElementById("searchButton");
const countryName = document.getElementById("country-name");
const temp = document.getElementById("temp");
const weatherStatus = document.getElementById("weather-status");
const windSpeed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const weatherDev = document.getElementById("weatherDev");
const flag = document.getElementById("flag");

fetching({ value: "palestine" });
const fetchWeather = (weatherData) => {
  if (weatherData.cod == 404) {
    eror.textContent = weatherData.message;
    weatherDev.style.display = "none";
  } else if (weatherData.cod == 200) {
    weatherDev.style.display = "flex";
    countryName.innerText =  weatherData.name;
    temp.innerText = "Temperature " + weatherData.main.temp + "C°";
    weatherStatus.innerText =
      "Weather Status: " + weatherData.weather[0].description;
    windSpeed.innerText = "Wind Speed: " + weatherData.wind.speed + "m/s";
    humidity.innerText = "Humidity: " + weatherData.main.humidity + "%";
    flag.src = `https://www.countryflags.io/${weatherData.sys.country}/shiny/64.png`
  }
};

search.addEventListener("click", (event) => {
  const value = city.value;
  if (value === "" || (value.startsWith(" ") && value.endsWith(" "))) {
    eror.textContent = "Insert valid country and search again";
    weatherDev.style.display = "none";
  } else {
    eror.textContent = "";
    const data = { value: value.trim() };
    fetching(data);
    
  }
  event.preventDefault();
});
