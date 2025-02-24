const PortfolioModel = require("../models/PortfolioModel");


//create
exports.createPortfolio=async (req, res)=>{
    try {
        let reqBody = req.body;
        reqBody.email = req.headers.email;
        await PortfolioModel.create(reqBody);
        res.status(200).json({status:"success",message:"Portfolio created"});
    }catch(err){
        res.status(400).json({status:"fail",message:err});
    }
}

//read all
exports.readPortfolios=async (req,res)=>{
    try {
        let email= req.headers["email"]

        let data = await PortfolioModel.aggregate( [
            {$match:{email: email}},
            {$project: { _id: 1, title: 1, description: 1, img:1, codeLink: 1, liveLink: 1,
                    createDate: {$dateToString: {date:"$createdAt", format:"%d-%m-%Y"}} }}
        ]);
        res.status(200).json({status:"success",message:data});
    }catch(err){
        res.status(400).json({status:"fail",message:err.toString()});
    }
}

//read one
exports.readOnePortfolio = async (req, res) => {
    try {
        let { id } = req.params;
        let email = req.headers["email"];

        let data = await PortfolioModel.findOne(
            { _id: id, email: email },
            { _id: 1, title: 1, description: 1, img: 1, codeLink: 1, liveLink: 1,
                createDate: {$dateToString: {date:"$createdAt", format:"%d-%m-%Y"}}}
        );

        if (!data) {
            return res.status(404).json({ status: "fail", message: "Portfolio not found" });
        }

        res.status(200).json({ status: "success", message: data });

    } catch (err) {
        res.status(400).json({ status: "fail", message: err.toString() });
    }
};


//update
exports.updatePortfolio = async (req, res) => {
    try {
        let email = req.headers["email"];
        let { id } = req.params;

        let result = await PortfolioModel.updateOne({ _id: id, email: email }, req.body);

        if (result.modifiedCount === 0) {
            return res.status(404).json({ status: "fail", message: "Portfolio not found or no changes made" });
        }

        res.status(200).json({ status: "success", message: "Portfolio updated" });

    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });
    }
};


//delete
exports.deletePortfolio = async (req, res) => {
    try {
        let email = req.headers["email"];
        let { id } = req.params;

        let result = await PortfolioModel.deleteOne({ _id: id, email: email });

        if (result.deletedCount === 0) {
            return res.status(404).json({ status: "fail", message: "Portfolio not found" });
        }

        res.status(200).json({ status: "success", message: "Portfolio deleted" });

    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });
    }
};
