const router=require('express').Router();

router.get("/login",(req,res)=>{
    res.render('login');
})

router.get("/google",(req,res)=>{
    res.send("login with google");
})

module.exports=router;