let twilio_otp = require('../../services/twilio-otp');
const customer = require('../../models/customer-model');
//const conditional = require('express-conditional-middleware')
//const nds = require('../config/nds');

module.exports = {
    numberAuth(req, res, next) {
        var otp = twilio_otp.otp;


        if (typeof req.body.otp !== 'undefined') {
            // your code here
            if (otp == req.body.otp) {
                
                // new customer
                next();
            }

        } else {

            const phoneNumber = req.body.phonenumber;
            customer.findOne({ customerPhoneNumber: phoneNumber }, (err, data) => {
                if (data == null) {
                    //=otp;
                    twilio_otp.sendOTP(phoneNumber, otp);
                    res.render('otp-enter')

                } else {
                    next();

                }

            }
            )

        }



    }
}

