const DropDownService = async (req, DataModel, Projection)=>{
    try {
        let email = req.headers.email;
        let data = await DataModel.aggregate([
            {$match: {email: email}},
            {$project: Projection}
        ]);
        return {status:"success", data: data}

    } catch (e) {
        return { status: "fail", message: e.toString() };
    }
}

module.exports = DropDownService;