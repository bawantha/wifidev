const router=require('express').Router();
const passport=require('passport');
router.get("/login",(req,res)=>{
    res.render('login');
})

// passport authentication
router.get("/google",passport.authenticate('google',{
    scope:['profile']
}))

router.get("/google/redir", passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
})

module.exports=router;