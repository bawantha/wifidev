const router=require('express').Router();
let twilio_otp=require('../services/twilio-otp');

router.get("/login",(req,res)=>{
    res.render('login');
})

router.get("/phone",(req,res,next)=>{
    twilio_otp.sendOTP(req.query.phonenumber,twilio_otp.otp );
    next();
},(req,res)=>{
    res.send("login with google");
})

module.exports=router;