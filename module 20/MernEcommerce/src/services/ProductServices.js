const BrandModel = require("../models/BrandModel.js");
const CategoryModel = require("../models/CategoryModel.js");
const ProductSliderModel = require("../models/ProductSliderModel.js");
const ProductModel = require("../models/ProductModel.js");
const ProductDetailsModel = require("../models/ProductDetailsModel.js");
const ReviewModel = require("../models/ReviewModel.js");


const BrandListService = async ()=>{
    try {
        let data= await BrandModel.find();
        return {status: "success", data: data}
    } catch (err) {
        return {status: "error", data: err}.toString()
    }
}

const CategoryListService = async (req, res) => {
    try {
        let data= await CategoryModel.find();
        return {status: "success", data: data}
    } catch (err) {
        return {status: "error", data: err}.toString()
    }
}

const SliderListService = async (req, res) => {
    try {
        let data= await ProductSliderModel.find();
        return {status: "success", data: data}
    } catch (err) {
        return {status: "error", data: err}.toString()
    }
}

const ListByBrandService = async (req, res) => {

}

const ListByCategoryService = async (req, res) => {

}

const ListBySmilierService = async (req, res) => {

}

const ListByKeywordService = async (req, res) => {

}

const ListByRemarkService = async (req, res) => {

}

const DetailsService = async (req, res) => {

}

const ReviewListService = async (req, res) => {


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

