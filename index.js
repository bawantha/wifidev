const express=require('express');
const app=express();


// impors routs
const authRoutes=require('./routes/auth-routes');

// set views engine
app.set('view engine','pug');
app.set('views','./views');

// set up routes
app.use(authRoutes);


// GET
app.get('/',(req,res)=>{
    res.render('home');
})


//set ports
app.listen(3000,()=>{
    console.log("app on port 3000");
})