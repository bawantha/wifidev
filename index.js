const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const nds = require('./config/nds');

mongoose.set('useFindAndModify', false);
// impors routs
const authRoutes = require('./routes/auth-routes');


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set views engine
app.set('view engine', 'pug');
app.set('views', './views');

// db connect
mongoose.connect(keys.mongoDb.connectionURI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection establish succefully");
})





// set up routes
app.use('/auth', authRoutes);



// GET
app.get('/', (req, res) => {
    nds._authaction=req.query.authaction;
    nds._gatewayname=req.query.gatewayname;
    nds._redir=req.query.redir;
    nds._tok=req.query.tok;
    res.render('home');
})


//set ports
app.listen(process.env.PORT || 3000, () => {
    console.log("app on port 3000");
})