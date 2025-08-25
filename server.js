const express=require('express')
const session=require('express-session')
const path=require('path')
const authRoute=require("./router/authRoute")
const app=express();

const PORT=3500

// app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:"my-long-string",
    resave:false,
    saveUninitialized:true

}))    
app.use("/",authRoute)

app.listen(PORT,()=>{
    console.log(`server listen on ${PORT} `)
})