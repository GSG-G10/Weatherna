const fetch = require('node-fetch');
const { request } = require('../app').request;
const getWeather = (req,res) => {
    const data = req.body.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4`
    fetch(url)
    .then(res => res.json())
    .then(body => res.json(body));
}

module.exports = getWeather;