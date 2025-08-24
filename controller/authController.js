
const predefinedUser=require("../model/userModel.json")


const getLoginpage=(req,res)=>{
     if(req.session.user)
       return res.redirect('/home')

    res.render('login')
}

const postLogin=(req,res,next)=>{
    const {username,password}=req.body
    console.log(req.body)
    const foundUser=predefinedUser.find(person=>person.username===username)
    
    console.log(foundUser) 
    if(foundUser?.password===password){
        req.session.user={username:username}
    }
    else
    {
        res.render('login',{error:"Incorrect username or password"})
    }
}

const getHomePage=(req,res)=>{
    if(!req.session.user)
    {
        return res.redirect('/login')   
    }
    res.render('home',{user:req.session.user})

}
    
const postLogout=(req,res)=>{
   req.session.destroy((err)=>{
    if(err){
       return res.redirect('/home')
    }

    res.redirect(['/login'])
   })
}


module.exports={
    getLoginpage,
    postLogin,
    getHomePage,
    postLogout
}