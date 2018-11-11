/////////////////////////////////////////////////////////////////////////////
///////////Code By: Harsh Jain 27-08-2017////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();
//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-HeadersHeaders", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.use(express.static(__dirname + '/src'));

app.get('/', function(req,res){
    res.redirect('/index.html');
});

app.listen(process.env.PORT ||'4220',()=>{
    console.log('Server started on port 4220');    
});