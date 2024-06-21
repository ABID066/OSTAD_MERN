const TaskModel = require("../models/TaskModel");

exports.createTask = async (req, res) => {
    try {
        let reqBody = req.body;
        reqBody.email =req.headers.email
        reqBody.status="UP-COMING"
        await TaskModel.create(reqBody);
        res.json({ status: "success", message: "TASK creation Complete" });
    } catch (err) {
        res.json({ status: "fail", message: err.toString() });
    }
};
exports.updateTask = async (req, res) =>{
    try {
        let email = req.headers.email;
        let {id} = req.params;
        let reqBody = req.body;

        await TaskModel.updateOne({email:email, _id:id}, reqBody);
        res.json({ status: "success", message: "TASK update Complete" });
    } catch (err) {
        res.json({ status: "fail", message: err.toString() });
    }
}
exports.readTask =async (req, res) =>{
    try {
        let email = req.headers.email;
        let data = await TaskModel.find({email:email});
        res.json({ status: "success", message: data });
    } catch (err) {
        res.json({ status: "fail", message: err.toString() });
    }
}
exports.deleteTask = async (req, res) =>{
    try {
        let email = req.headers.email;
        let {id} = req.params;

        await TaskModel.deleteOne({email:email, _id:id});
        res.json({ status: "success", message: "TASK delete Complete" });
    } catch (err) {
        res.json({ status: "fail", message: err.toString() });
    }
}
exports.filteringByStatus =async (req, res) =>{
    try {
        let email = req.headers.email;
        let {status} = req.params
        let data = await TaskModel.find({email:email, status:status} );
        res.json({ status: "success", message: data });
    } catch (err) {
        res.json({ status: "fail", message: err.toString() });
    }
}
exports.filteringByDate = async (req, res) => {
    try {
        let email = req.headers.email;
        let { FromDate, ToDate } = req.body;

        // Log the input dates for debugging
        console.log(`Email: ${email}, FromDate: ${FromDate}, ToDate: ${ToDate}`);

        // Ensure dates are parsed correctly
        let fromDate = new Date(FromDate);
        let toDate = new Date(ToDate);

        // Log the parsed dates
        console.log(`Parsed FromDate: ${fromDate}, Parsed ToDate: ${toDate}`);

        let data = await TaskModel.find({
            email: email,
            createdAt: { $gte: fromDate, $lte: toDate }
        });

        res.json({ status: "success", message: data });
    } catch (err) {
        console.error(err);
        res.json({ status: "fail", message: err.toString() });
    }
};
