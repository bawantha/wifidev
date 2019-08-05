let twilio_otp = require('../../services/twilio-otp');
const customer = require('../../models/customer-model');
//const conditional = require('express-conditional-middleware')
//const nds = require('../config/nds');
let pn;
let _otp = twilio_otp.otp;
module.exports = {
    numberAuth(req, res, next) {

        if (typeof req.body.otp !== 'undefined') {
            // your code here
            if (_otp == req.body.otp) {

                // console.log(pn);
                // new customer add
                var newCustomer = new customer({
                    customerPhoneNumber: pn + ""
                })
                newCustomer.save();
                res.locals.pn = pn + "";
                next();
            }

        } else {

            var _phoneNumber = req.body.phonenumber;
            pn = _phoneNumber;
            _otp = twilio_otp.otp;
            customer.findOne({ customerPhoneNumber: _phoneNumber }, (err, data) => {
                if (data == null) {
                    twilio_otp.sendOTP(_phoneNumber, _otp);
                    res.render('otp-enter')

                } else {
                    res.locals.pn = pn + "";

                    next();

                }

            }
            )

        }



    }
}

