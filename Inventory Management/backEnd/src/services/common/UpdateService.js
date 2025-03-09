

const UpdateService = async (req, DataModel) => {
    try {
        let PostBody = req.body;
        let email = req.headers["email"]
        let id = req.params.id;
        let data = await DataModel.updateOne({_id:id, email:email}, PostBody);
        return {status:"success", data: data}
    } catch (e) {

        return { status: "fail", message: e.toString() };
    }
}

module.exports = UpdateService;