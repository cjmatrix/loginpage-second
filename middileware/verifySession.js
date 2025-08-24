
const verifySession=(req,res,next)=>{
    if(req.session.user){
        res.redirect("/home")
        next()
    }
    else
    res.redirect("/login")
}

module.exports=verifySession