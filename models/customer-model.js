const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const customerSchema=new Schema({
    customerName:String,            // just to identify user
    googleID:String,                // googleID can be used to create  uniqe collection 
    emailAddress:String,            // for email marketing 
    shopIDs:[],                     // shop IDs are the gateway names of AP ,WE NEED TO CREATE UNIQUE GATEWAY NAMES
})

const Customer=mongoose.model('customer',customerSchema);
module.exports=Customer