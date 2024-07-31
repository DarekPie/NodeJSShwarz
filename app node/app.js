// const http = require('http');
// const routes = require('./route');  - wywalamy bo express
const express = require('express');  


// function rqListener(req, res){
// }
// const server = http.createServer((req,res) => {
//     console.log(req, req.method, req.headers);
// });

const app = express();

app.use((req,res, next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello from express</h1>');
    //
});


server.listen(3000);