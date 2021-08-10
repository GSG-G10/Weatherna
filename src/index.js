
const app = require('./app');
const port = app.get('port');

app.listen(port,()=>{
    console.log(`we are running on port : http.//localhost:${port} `)
});

