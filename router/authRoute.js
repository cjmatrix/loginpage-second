const authController=require("../controller/authController")
const express=require("express")
const router=express.Router();
const verifySession=require("../middileware/verifySession")

router.get('/login',authController.getHomePage)

router.post("login",verifySession,authController.postLogin)

router.get('/home',authController.getHomePage)

router.post('/home',authController.postLogout)

module.exports=router