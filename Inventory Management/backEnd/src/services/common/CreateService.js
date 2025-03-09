

const CreateService = async (req, DataModel) => {
    try {
        let PostBody = req.body;
        PostBody.email = req.headers["email"]
        let data = await DataModel.create(PostBody)
        return {status:"success", data: data}
    } catch (e) {
        return { status: "fail", message: e.toString() };
    }
}

module.exports = CreateService;