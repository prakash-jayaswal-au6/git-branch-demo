var express = require('express')
var auth = require('./middleware/authenticate')
var app = express();

app.get('/',function(Req,res){
    res.send("hello world")
})

app.listen(1234,function(){
    console.log("server started at port 1234")
})