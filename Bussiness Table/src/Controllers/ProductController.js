const ProductsModel = require("../Models/ProductModel")
const {query} = require("express");


exports.ProductList = async (req, res) => {
    
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        const skipRow = (pageNo - 1) * perPage;

        let data;


        if(searchValue){
            let SearchRgx = {"$regex":searchValue, "$options":"i"};
            let SearchQuery = {$or: [
                {title: SearchRgx},{category: SearchRgx},{subcategory: SearchRgx},
                    {brand: SearchRgx},{remark: SearchRgx}]};

            data = await ProductsModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[{$match: SearchQuery},{$skip:skipRow},{$limit:perPage}]
                }
            }])
        } else {
            data = await ProductsModel.aggregate([{
                $facet:{
                    Total:[{$count: "count"}],
                    Rows:[{$skip:skipRow},{$limit:perPage}]
                }
            }])
        }

        res.status(200).json({status:"success",data:data});

    } catch (e) {
        res.status(404).json({status:"fail", error: e});
    }
    
}