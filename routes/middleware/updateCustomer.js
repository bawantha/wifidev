const customer = require('../../models/customer-model');
const nds = require('../../config/nds');

module.exports = {
    updateCustomerInfo(req, res, next) {
        var { pn } = res.locals;
        console.log(pn);
        customer.findOne({ customerPhoneNumber: pn+"" }, (err, data) => {
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
                        // console.log(auth);
                        res.locals.authURI = auth;
                        next();
                    }
                }
            )
        }


        )
    }
}
