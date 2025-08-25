
const predefinedUser=require("../model/userModel.json")
console.log(predefinedUser)

const getLoginpage=(req,res)=>{
     if(req.session.user)
       return res.redirect('/home')  

     console.log(req.url)
    res.render('login')

}

const postLogin=(req,res,next)=>{

    const {username,password}=req.body
    console.log(req.body)
     if(!username && !password){
        return  res.render('login',{error:"Password and Username is required"})
    }
     if(!username){
        return  res.render('login',{error:"Username is required"})
    }

    if(!password){  
        return  res.render('login',{error:"Password is required"})
    }
    const foundUser=predefinedUser.find(person=>person.username===username)
    
    console.log(foundUser) 
    if(foundUser?.password===password){
        req.session.user={username:username}
        res.redirect('/home')
    }
    else
    {
        res.render('login',{error:"Incorrect username or password"})
    }
}

const getHomePage=(req,res)=>{
         console.log(req.url)
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


module.exports={getLoginpage,postLogin,getHomePage,postLogout}