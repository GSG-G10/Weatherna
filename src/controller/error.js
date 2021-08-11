const path = require('path');

const serverError = (err,req,res) => {
    res.status(500).sendFile(path.join(__dirname , "..", "puplic","500.html"));
}
const clientError = (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname , "..", "puplic","404.html"));
}
module.exports = {
    serverError,
    clientError
};