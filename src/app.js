
const express = require("express");
const path = require("path");
const getWeather = require("./controller/getWeather")
const handeleError = require('./controller/error')
require("dotenv").config();

const app = express();

app.set('port' , process.env.PORT || 4000);

app.disable('x-powered-by');

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));


app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname,"..","public", "index.html"));
})
app.post('/search' ,getWeather);


module.exports=app;


