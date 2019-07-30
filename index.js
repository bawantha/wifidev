const express = require('express');
const app = express();
const passportservices = require('./services/passport-setup');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const ndsvaribles = require('./config/nds');


// create cookies
app.use(cookieSession({
    maxAge: 365 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSessionKey]
}))

// intialize passport session
app.use(passport.initialize())
app.use(passport.session());

// impors routs
const authRoutes = require('./routes/auth-routes');

// set views engine
app.set('view engine', 'pug');
app.set('views', './views');

// connnet to mongodb
mongoose.connect(keys.mongoDb.connectionURI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection establish succefully");
})



// set up routes
app.use('/auth', authRoutes);


// GET
app.get('/', (req, res) => {
    ndsvaribles._authaction = req.query['authaction'];
    ndsvaribles._tok = req.query['tok'];
    ndsvaribles._gatewayname = req.query['gatewayname'];
    ndsvaribles._redir = req.query['redir'];
    res.render('home',);
})


//set ports
app.listen(process.env.PORT || 3000, () => {
    console.log("app on port 3000");
})