const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
passport.use(
    new GoogleStrategy({
    callbackURL:'/auth/google/redir',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clienetSecret,

}, () => {
    // passport callback functionm
})
);
