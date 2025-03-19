const DeleteService = async (req, DataModel) => {
    try {
        let DeleteID = req.params.id;
        let email = req.headers["email"];

        let QueryObj = {}
        QueryObj["email"] = email;
        QueryObj["_id"] = DeleteID;

        let Delete  = await DataModel.deleteOne(QueryObj);

        return {status:"success", data: Delete}
    } catch (e) {
        return { status: "fail", message: e.toString() };
    }
}

module.exports = DeleteService;