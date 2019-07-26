const express=require('express');
const app=express();
const passportservices=require('./services/passport-setup');
const mongoose=require('mongoose');
const keys=require('./config/keys');


// impors routs
const authRoutes=require('./routes/auth-routes');

// set views engine
app.set('view engine','pug');
app.set('views','./views');

// connnet to mongodb
mongoose.connect(keys.mongoDb.connectionURI, {useNewUrlParser: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Connection establish succefully");
})



// set up routes
app.use('/auth',authRoutes);


// GET
app.get('/',(req,res)=>{
    res.render('home');
})


//set ports
app.listen(3000,()=>{
    console.log("app on port 3000");
})