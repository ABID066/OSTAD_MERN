const BrandModel = require("../models/BrandModel.js");
const CategoryModel = require("../models/CategoryModel.js");
const ProductSliderModel = require("../models/ProductSliderModel.js");
const ProductModel = require("../models/ProductModel.js");
const ProductDetailsModel = require("../models/ProductDetailsModel.js");
const ReviewModel = require("../models/ReviewModel.js");
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;


const BrandListService = async ()=>{
    try {
        let data= await BrandModel.find();
        return {status: "success", data: data}
    } catch (err) {
        return {status: "error", data: err}
    }
}

const CategoryListService = async () => {
    try {
        let data= await CategoryModel.find();
        return {status: "success", data: data}
    } catch (err) {
        return {status: "error", data: err}
    }
}

const SliderListService = async () => {
    try {
        let data= await ProductSliderModel.find();
        return {status: "success", data: data}
    } catch (err) {
        return {status: "error", data: err}
    }
}



const ListByBrandService = async (req) => {
    try {
        let BrandID = new ObjectId(req.params.brandID)
        let MatchStage = {$match: {brandID: BrandID}}

        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand"
            }
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category"
            }
        };

        let UnwindBrandStage = {$unwind: "$brand"}
        let UnwindCategoryStage = {$unwind: "$category"}

        let ProjectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID:":0, "brandID":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,
            ProjectionStage
        ])
        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

const ListByCategoryService = async (req) => {
    try {
        let CategoryID = new ObjectId(req.params.categoryID)
        let MatchStage = {$match: {categoryID: CategoryID}}

        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand"
            }
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category"
            }
        };

        let UnwindBrandStage = {$unwind: "$brand"}
        let UnwindCategoryStage = {$unwind: "$category"}

        let ProjectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID:":0, "brandID":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,
            ProjectionStage
        ])
        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

const ListBySmilierService = async (req) => {
    try {
        let Category = new ObjectId(req.params.categoryID)
        let MatchStage = {$match: {categoryID: Category}}
        let LimitStage={$limit: 8}

        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand"
            }
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category"
            }
        };

        let UnwindBrandStage = {$unwind: "$brand"}
        let UnwindCategoryStage = {$unwind: "$category"}

        let ProjectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID:":0, "brandID":0}}

        let data = await ProductModel.aggregate([
            MatchStage,LimitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,
            ProjectionStage
        ])
        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

const ListByKeywordService = async (req) => {
    try {
        let SearchRegex= {"$regex":req.params.keyword, "$options":"i"}
        let SearchParams =[{title: SearchRegex},{shortDes:SearchRegex}];
        let SearchQuery = {$or: SearchParams};

        let MatchStage = {$match: SearchQuery};
        let JoinWithBrandStage5 = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand"
            }
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category"
            }
        };

        let UnwindBrandStage = {$unwind: "$brand"}
        let UnwindCategoryStage = {$unwind: "$category"}

        let ProjectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID:":0, "brandID":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage5,
            JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,
            ProjectionStage
    ])

        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err.toString()}
    }
}

const ListByRemarkService = async (req) => {
    try {
        let Remark = req.params.remark;
        let MatchStage = {$match: {remark: Remark}}

        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand"
            }
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category"
            }
        };

        let UnwindBrandStage = {$unwind: "$brand"}
        let UnwindCategoryStage = {$unwind: "$category"}

        let ProjectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID:":0, "brandID":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,
            ProjectionStage
        ])
        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

const DetailsService = async (req) => {
    try {
        let ProductID = new ObjectId(req.params.productID);
        let MatchStage = {$match: {_id: ProductID}}

        let JoinWithBrandStage4 = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand"
            }
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category"
            }
        };
        let JoinWithProductDetailsStage = {
            $lookup: {
                from: "productdetails",
                localField: "_id",
                foreignField: "productID",
                as: "details"
            }
        };

        let UnwindBrandStage = {$unwind: "$brand"}
        let UnwindCategoryStage = {$unwind: "$category"}
        let UnwindDetailsStage = {$unwind: "$details"}

        let ProjectionStage ={$project: {"brand._id":0, "category._id":0, "categoryID:":0, "brandID":0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage4,
            JoinWithCategoryStage,
            JoinWithProductDetailsStage,
            UnwindBrandStage,UnwindCategoryStage,UnwindDetailsStage,
            ProjectionStage
        ])

        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }
}

const ReviewListService = async (req) => {
    try {
        let ProductID = new ObjectId(req.params.productID);
        let MatchStage = {$match:{productID:ProductID}};
        let JoinWithUserProfileStage = {
            $lookup: {
                from: "profiles",
                localField: "userID",
                foreignField: "userID",
                as: "profile"
            }
        }
        let UnwindProfileStage = {$unwind: "$profile"}
        let ProjectionStage = {$project:{
                "des": 1,
                "rating": 1,
                "profile.cus_name": 1
            }
        }
        let data = await ReviewModel.aggregate([
            MatchStage,
            JoinWithUserProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])
        return {status: "success", data: data};
    } catch (err) {
        return {status: "error", data: err}
    }

}

module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    ListBySmilierService,
    ListByKeywordService,
    DetailsService,
    ReviewListService
}

