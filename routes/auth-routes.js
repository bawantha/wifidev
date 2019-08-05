const router = require('express').Router();
const {numberAuth}=require('./middleware/numberAuth')
const {updateCustomerInfo}=require('./middleware/updateCustomer')

let twilio_otp = require('../services/twilio-otp');
const customer = require('../models/customer-model');
const conditional = require('express-conditional-middleware')
const nds = require('../config/nds');
router.get("/", (req, res) => {
    res.render('login');
})


router.post('/',numberAuth,updateCustomerInfo , (req,res)=>{
    let {authURI}=res.locals;
    res.redirect(authURI);
    
})




/*
// FInd csutomer

customer.findOne({ customerPhoneNumber: req.query.phonenumber }, (err, data) => {
            if (data == null) {
                var otp = twilio_otp.otp;
                twilio_otp.sendOTP(req.query.phonenumber, otp);
                res.locals=otp;
                // haven't registered before
                res.redirect('/')
            } else {
               
            }








 // registered before update the shopIds
                customer.findByIdAndUpdate(
                    { _id: data.id },
                    { $push: { shopIds: nds._gatewayname } },
                    function (error, success) {
                        if (error) {
                            console.log(error);
                        } else {
                            //console.log(success);
                            console.log("success");
                            var auth = nds._authaction + '&tok=' + nds._tok + '&redir=' + nds._redir;
                            console.log(auth);
                            res.redirect(auth);
                        }
                    }
                )

*/



module.exports = router;