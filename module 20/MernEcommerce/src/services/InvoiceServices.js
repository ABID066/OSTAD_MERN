const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ProfileModel = require("../models/ProfileModel");
const InvoiceModel = require("../models/InvoiceModel");
const InvoiceProductModel = require("../models/InvoiceProductModel");
const PaymentSettingModel = require("../models/PaymentSettingModel");
const axios = require("axios");
const ObjectID = mongoose.Types.ObjectId;

const CreateInvoiceService = async (req) => {
    try {
        let user_id =new ObjectID(req.headers.user_id);
        let cus_email = req.headers.email;

//========= Step 01 : calculate total payable + vat
        let matchStage= {$match:{userID: user_id}}
        let JoinStageProduct = {$lookup:{from: "products",localField: "productID", foreignField: "_id", as: "product"}}
        let unwindProductStage = {$unwind: "$product"}

        let CartProducts = await CartModel.aggregate([matchStage, JoinStageProduct, unwindProductStage])

        let totalAmount=0;
        CartProducts.forEach((element)=>{
            let price;
            if(element["product"]["discount"]){
                price=parseFloat(element["product"]["discountPrice"])
            } else {
                price=parseFloat(element["product"]["price"])
            }
            totalAmount += parseFloat(element["qty"])*price
        })

        let vat = totalAmount*0.05;
        let payable=totalAmount+vat;



//========= Step 02 : Prepare customer details
        let Profile = await ProfileModel.aggregate([matchStage])
        let cus_details= `Name: ${Profile[0]["cus_name"]}, Email: ${cus_email}, Address: ${Profile[0]["cus_add"]}, Phone: ${Profile[0]["cus_phone"]}`

        let ship_details= `Name: ${Profile[0]["ship_name"]}, City: ${Profile[0]["ship_city"]}, Address: ${Profile[0]["ship_add"]}, Phone: ${Profile[0]["ship_phone"]}`



//========= Step 03 : Transaction & Other's ID
        let tran_id=Math.floor(10000000+Math.random()*900000000);
        let val_id = 0;
        let delivery_status = "pending"
        let payment_status = "pending"


//========= Step 04 : Create Invoice
        let createInvoice = await InvoiceModel.create({
            userID:user_id,
            payable:payable,
            cus_details:cus_details,
            ship_details:ship_details,
            tran_id:tran_id,
            val_id:val_id,
            delivery_status:delivery_status,
            payment_status:payment_status,
            total:totalAmount,
            vat:vat
        })


//========= Step 05 : Create Invoice Product
        let invoice_id = createInvoice["_id"];

        CartProducts.forEach(async (element)=>{
            await InvoiceProductModel.create({
                userID:user_id,
                invoiceID:invoice_id,
                productID:element["productID"],
                qty:element["qty"],
                price:element["product"]["discount"]?element["product"]["discountPrice"]:element["product"]["price"],
                color:element["color"],
                size:element["size"],
            })
        })


//========= Step 06 : Remove Cart
        await CartModel.deleteMany({userID: user_id})


//========= Step 07 : Prepare SSL Payment
        let PaymentSettings = await PaymentSettingModel.findOne({}).lean();


        const form = new FormData();
        form.append("store_id", PaymentSettings["store_id"])
        form.append("store_passwd", PaymentSettings["store_passwd"])
        form.append("total_amount", payable.toString())
        form.append("currency", PaymentSettings["currency"])
        form.append("tran_id", tran_id)
        form.append("success_url", `${PaymentSettings["success_url"]}/${tran_id}`)
        form.append("fail_url", `${PaymentSettings["fail_url"]}/${tran_id}`)
        form.append("cancel_url", `${PaymentSettings["cancel_url"]}/${tran_id}`)
        form.append("ipn_url", `${PaymentSettings["ipn_id"]}/${tran_id}`)
        form.append("emi_option",0)

        form.append("cus_name", Profile[0]["cus_name"])
        form.append("cus_email", cus_email)
        form.append("cus_add1", Profile[0]["cus_add"])
        form.append("cus_add2", Profile[0]["cus_add"])
        form.append("cus_city", Profile[0]["cus_city"])
        form.append("cus_state", Profile[0]["cus_state"])
        form.append("cus_postcode", Profile[0]["cus_postcode"])
        form.append("cus_country", Profile[0]["cus_country"])
        form.append("cus_phone", Profile[0]["cus_phone"])
        form.append("cus_fax", Profile[0]["cus_phone"])

        form.append("shipping_method", "YES")
        form.append("num_of_item", 1)
        form.append("weight_of_items", 0.5)
        form.append("logistic_pickup_id", "ds")
        form.append("logistic_delivery_type", "ds")



        form.append("ship_name", Profile[0]["ship_name"])
        form.append("ship_add1", Profile[0]["ship_add"])
        form.append("ship_add2", Profile[0]["ship_add"])
        form.append("ship_city", Profile[0]["ship_city"])
        form.append("ship_state", Profile[0]["ship_state"])
        form.append("ship_country", Profile[0]["ship_country"])
        form.append("ship_postcode", Profile[0]["ship_postcode"])
        form.append("product_name", "MERN Ecommerce - check invoice")
        form.append("product_category", "MERN Ecommerce - check invoice")
        form.append("product_profile", "MERN Ecommerce - check invoice")
        form.append("product_amount", "MERN Ecommerce - check invoice")

        let init_url= "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";
        let SSLRes = await axios.post(init_url,form);

        return {status: "success", data: SSLRes.data}
    } catch (e) {
        console.log(e)
        return {status: "error", data: e}
    }
}
const PaymentSuccessService = async (req) => {
    try {
        let trxID= req.params.trxID;
        let data = await InvoiceModel.updateOne({tran_id: trxID}, {payment_status: "success"})
        return {status: "payment success", data: data}
    } catch (err) {
        return {status:"fail", data: err}
    }
}

const PaymentFailService = async (req) => {
    try {
        let trxID= req.params.trxID;
        let data = await InvoiceModel.updateOne({tran_id: trxID}, {payment_status: "fail"})
        return {status: "payment failed", data: data}
    } catch (err) {
        return {status:"fail", data: err}
    }
}

const PaymentCancelService = async (req) => {
    try {
        let trxID= req.params.trxID;
        let data = await InvoiceModel.updateOne({tran_id: trxID}, {payment_status: "cancel"})
        return {status: "payment canceled", data: data}
    } catch (err) {
        return {status:"fail", data: err}
    }
}

const PaymentIPNService = async (req) => {
    try {
        let trxID= req.params.trxID;
        let status= req.body["status"];

        let data = await InvoiceModel.updateOne({tran_id: trxID}, {payment_status: status})
        return {status: "payment canceled", data: data}
    } catch (err) {
        return {status:"fail", data: err}
    }
}

const InvoiceListService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let invoice = await InvoiceModel.find({userID:user_id});
        return {status: "success", data: invoice}
    } catch (err) {
        return {status:"fail", data: err}
    }
}

const InvoiceProductListService = async (req) => {
    try {
        let user_id =new ObjectID(req.headers.user_id);
        let invoice_id = new ObjectID(req.params.invoiceID);

        let matchStage= {$match:{userID: user_id, invoiceID: invoice_id}}
        let JoinStageProduct = {$lookup:{from: "products",localField: "productID", foreignField: "_id", as: "product"}}
        let unwindProductStage = {$unwind: "$product"}

        let product = await InvoiceProductModel.aggregate([
            matchStage,
            JoinStageProduct, unwindProductStage
        ])

        return {status: "success", data: product};
    } catch (err) {
        return {status:"fail", data: err}
    }
}


module.exports = {CreateInvoiceService, PaymentSuccessService, PaymentFailService,
    PaymentCancelService, PaymentIPNService, InvoiceListService, InvoiceProductListService}
