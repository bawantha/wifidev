const router = require('express').Router();
const passport = require('passport');
router.get("/login", (req, res) => {
  res.render('login');
})


router.get("/", (req, res) => {
  if (req.user) {
    // db update function
    // redirect to auth URL   
    res.send("Yolla bitchers")
  } else {
    res.redirect('/auth/login');
  }
})

// passport authentication
router.get("/google", passport.authenticate('google', {
  scope: ['profile']
}))

router.get("/google/redir", passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send(req.user);
  })

module.exports = router;