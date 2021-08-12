const fetch = require('node-fetch');
const getWeather = (req,res) => {
    const data = req.body.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&apikey=${process.env.API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(body => res.json(body));
}

module.exports = getWeather;