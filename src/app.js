
const express = require("express");
const path = require("path");
const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.set('port' , process.env.PORT || 3000);

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,"..","public"))
})
// app.post("/" , (req,res) => {
//     res.sendFile(path.jonin(__direname,"..","public" , "index.html"));
// })

module.exports=app;


