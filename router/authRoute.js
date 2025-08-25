const authController=require("../controller/authController")
const express=require("express")
const router=express.Router();
const verifySession=require("../middleware/verifySession")
const path=require('path')


router.get('/',authController.getLoginpage)
router.get('/login',authController.getLoginpage)

router.post("/login",authController.postLogin)

router.get('/home',verifySession,authController.getHomePage)

router.post('/logout',authController.postLogout)

module.exports=router   