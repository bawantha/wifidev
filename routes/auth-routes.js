const router=require('express').Router();
const pasport=require('passport');
router.get("/login",(req,res)=>{
    res.render('login');
})

// passport authentication
router.get("/google",pasport.authenticate('google',{
    scope:['profile']
}))

module.exports=router;