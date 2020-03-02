<<<<<<< HEAD
=======
module.exports = function(req,res,next){
    if(req.query.name==="prakash") return next()
    return res.send("sorry u are not")
}
>>>>>>> feature-users
