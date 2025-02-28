const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const CreateInvoiceService = async (req) => {
    let user_id = ObjectID(req.headers.user_id);
    let cus_email = req.headers.email;

    //calculate total payable % vat
    let matchStage= {$match:{userID: user_id}}
    let JoinStageProduct = {}







}

const PaymentSuccessService = async (req) => {

}

const PaymentFailService = async (req) => {

}

const PaymentCancelService = async (req) => {

}

const PaymentIPNService = async (req) => {

}

const InvoiceListService = async (req) => {

}

const InvoiceProductListService = async (req) => {

}


module.exports = {CreateInvoiceService, PaymentSuccessService, PaymentFailService,
    PaymentCancelService, PaymentIPNService, InvoiceListService, InvoiceProductListService}
