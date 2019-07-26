const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const Customer = require('../models/customer-model');
passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redir',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret

    }, (accessToken, refreshToken, profile, cb) => {
        new Customer({
            customerName:profile.displayName,
            googleID:profile.id
        }).save().then((nc)=>{
           console.log ('new user created'+nc);
        })
    })
);
