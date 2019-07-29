const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const Customer = require('../models/customer-model');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Customer.findById(id).then((user) => {
        done(null, user);
    })
});
passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redir',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret

    }, (accessToken, refreshToken, profile, done) => {

        Customer.findOne({
            googleID: profile.id
        }).then((currentCustomer) => {
            if (currentCustomer) {
                done(null, currentCustomer);
            } else {
                // new Customer
                new Customer({
                    customerName: profile.displayName,
                    googleID: profile.id
                }).save().then((nc) => {
                    done(null,nc);
                    // This is the where user should let the internet access
                    
                })
            }
        })

    })
);
