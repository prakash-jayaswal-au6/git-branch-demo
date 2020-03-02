var express = require('express')
var auth = require('./middleware/authenticate')
var app = express();

function basicLogger(req,res,next){
    console.log(req.url)
    next()
}

app.get('/',basicLogger,function(Req,res){
    res.send("hello world")
})

app.get('/users',basicLogger,auth,function(req,res){
    res.send("users Route")
})
app.listen(1234,function(){
    console.log("server started at port 1234")
})