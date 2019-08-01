let twilio = require('twilio');
let otpGenerator = require('otp-generator');
const keys=require('../config/keys');



var accountSid = keys.twilio.accountID; // Your Account SID from www.twilio.com/console
var authToken = keys.twilio.authToken;   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

module.exports.otp= otpGenerator.generate(4, { upperCase: false, specialChars: false })

module.exports.sendOTP =function(number,otp){client.messages.create({
    body: 'Your FreeWifi verification Code: '+otp,
    to: number,  // Text this number
    from: '+12055576067' // From a valid Twilio number
})
.then((message) => console.log(message.sid))};
