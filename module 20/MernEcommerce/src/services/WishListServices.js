const WishModel = require("../models/WishModel");

const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const WishListServices = async (req) => {
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
                "_id":0,"userID":0,"createdAt":0,"updatedAt":0,"product._id":0,"product.categoryID":0,
                "product.brandID":0,"product.createdAt":0,"product.updatedAt":0,"brand.createdAt":0,
                "brand.updatedAt":0,"category.createdAt":0,"category.updatedAt":0
            }}

        let data = await WishModel.aggregate([
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

const SaveWishListServices = async (req) => {
    try {
        
        let user_id = req.headers['user_id']
        
        if (!user_id) return { status: "fail", message: "User ID is required" };

        let reqBody = req.body;
        reqBody.userID = user_id;

        let data = await WishModel.updateOne(query, {$set:reqBody}, {upsert:true} )

        return {status: "success", message: "Added to the wishlist", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

const RemoveWishListServices = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.user_id = user_id;
        let data = await WishModel.deleteOne(reqBody)
        return {status: "success", message: "Added to the wishlist", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

module.exports = {WishListServices, SaveWishListServices, RemoveWishListServices}