var express = require('express')

var app = express();

app.get('/',function(Req,res){
    res.send("hello world")
})

app.get('/users',function(req,res){
    res.send("users Route")
})
app.listen(1234,function(){
    console.log("server started at port 1234")
})