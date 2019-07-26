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

        Customer.findOne({
            googleID: profile.id
        }).then((currentCustomer) => {
            if (currentCustomer) {
                // customer already registerd with our service
            } else {
                // new Customer
                new Customer({
                    customerName:profile.displayName,
                    googleID:profile.id
                }).save().then((nc)=>{
                   console.log ('new user created'+nc);
                }) 
            }
        })

    })
);
