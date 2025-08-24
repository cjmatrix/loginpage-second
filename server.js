const express=require('express')
const session=require('express-session')
const path=require('path')
const authRoute=require("./router/authRoute")
const app=express();

const PORT=3500


app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:"my-long-string",
    resave:false,
    saveUninitialized:true

}))     
// app.get('/',(req,res)=>{
//     if(req.session.user)
//         return res.redirect('/home')

//     res.redirect('/login')
// })   
    
app.use("/",authRoute)
app.listen(PORT,()=>{
    console.log(`server listen on ${PORT} `)
})