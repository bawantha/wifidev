const express = require('express');
const app = express();
const passportservices = require('./services/passport-setup');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');






let _authaction = "";             // call back url for authenticated user
let _gatewayname = "";            // GATEWAYNAME can be get as uniqure shoplocation
let _tok = "";                    // to authenticate user
let _redir = "";                  // redirect URL depend on platform( android, iOS)


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
    _authaction = req.query['authaction'];
    _tok = req.query['tok'];
    _gatewayname = req.query['gatewayname'];
    _redir = req.query['redir'];
    res.render('home',{gatewayname:_gatewayname});
})


//set ports
app.listen(3000, () => {
    console.log("app on port 3000");
})