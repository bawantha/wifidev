const router=require('express').Router();
const passport=require('passport');
router.get("/login",(req,res)=>{
  if(req.user){
    res.send(req.user);
  }else{
    res.render('login');
  }
   
  
})

// passport authentication
router.get("/google",passport.authenticate('google',{
    scope:['profile']
}))

router.get("/google/redir", passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.send(req.user);
})

module.exports=router;