const CartModel = require("../models/CartModel");

const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const CartListServices = async (req) => {
    try{
        let user_id=new ObjectID(req.headers.user_id)
        let matchStage= {$match:{userID:user_id}}

        let JoinStageProduct = {$lookup:{
                from: "products",
                localField: "productID",
                foreignField: "_id",
                as: "product"
            }}
        let JoinStageBrand = {$lookup:{
                from: "brands",
                localField: "product.brandID",
                foreignField: "_id",
                as: "brand"
            }}
        let JoinStageCategory = {$lookup:{
                from: "categories",
                localField: "product.categoryID",
                foreignField: "_id",
                as: "category"
            }}
        let unwindProductStage = {$unwind: "$product"}
        let unwindBrandStage = {$unwind: "$brand"}
        let unwindCategoryStage = {$unwind: "$category"}

        let projectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID":0,
                "userID":0,"createdAt":0,"updatedAt":0,"product._id":0,"product.categoryID":0,
                "product.brandID":0,"product.createdAt":0,"product.updatedAt":0,"brand.createdAt":0,
                "brand.updatedAt":0,"category.createdAt":0,"category.updatedAt":0
            }}

        let data = await CartModel.aggregate([
            matchStage,
            JoinStageProduct, unwindProductStage,
            JoinStageBrand, unwindBrandStage,
            JoinStageCategory, unwindCategoryStage,
            projectionStage
        ])
        return {status: "success", data: data}

    } catch (err) {
        return {status: "error", data: err}
    }
}

const SaveCartListServices = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        let data = await CartModel.create(reqBody);

        return {status:"success",message:"Cart List successfully created", data: data};

    } catch (err) {
        return {status:"error", data: err}
    }
}

const UpdateCartListServices = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let cartID = req.params.CartID;
        let reqBody = req.body;

        let data = await CartModel.updateOne({_id: cartID, userID:user_id}, {$set:reqBody});

        return {status:"success",message:"Cart Update successfully updated", data: data}
    } catch (err) {
        return {status:"error", data: err}
    }
}

const RemoveCartListServices = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;
        let data = await CartModel.deleteOne(reqBody)

        return {status: "success", message: "Remove from cartList", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}


module.exports = {SaveCartListServices, UpdateCartListServices,
    RemoveCartListServices, CartListServices}