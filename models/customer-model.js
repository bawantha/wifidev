
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const customerSchema=new Schema({
    customerPhoneNumber:String,            // just to identify user
    shopIds:[],                     // shop IDs are the gateway names of AP ,WE NEED TO CREATE UNIQUE GATEWAY NAMES
})

const Customer=mongoose.model('customer',customerSchema);
module.exports=Customer