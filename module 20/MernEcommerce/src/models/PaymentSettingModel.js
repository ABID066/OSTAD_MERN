const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({

    store_id:{type:String,required:true},
    store_password:{type:String,required:true},
    currency:{type:String,required:true},
    success_url:{type:String,required:true},
    fail_url:{type:String,required:true},
    cancel_url:{type:String,required:true},
    inp_url:{type:String,required:true},
    init_url:{type:Number,required:true}

}, { timestamps: true , versionKey:false});

const PaymentSettingModel=mongoose.model('paymentSettings', DataSchema);

module.exports = PaymentSettingModel;

