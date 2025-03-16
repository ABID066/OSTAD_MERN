const mongoose = require("mongoose");
const CreateParentChildService = async (req, ParentModel, ChildrenModel, JoinPropertyName)=> {

    //Create transaction session
    const session = await mongoose.startSession();

    try {
        //transaction start
        await session.startTransaction();

        //create parentData
        let Parent = req.body["parent"];
        Parent.email = req.headers["email"];
        let ParentData = await ParentModel.create([Parent], {session});

        //create childData
        let Children =req.body["children"]
        await Children.forEach((element) => {
            element[JoinPropertyName] = ParentData[0]["_id"];
            element["email"]= req.headers["email"];
        });

        let ChildrenData = await ChildrenModel.insertMany(Children,{session});

        //Transaction success
        await session.commitTransaction();
        await session.endSession();

        return {status:"success", Parent:ParentData, Children: ChildrenData}


    } catch (e) {

        //roll back transaction if fail
        await session.abortTransaction();
        await session.endSession();

        return { status: "fail", error: e.toString() };
    } finally {
        await session.endSession();
    }
}

module.exports = CreateParentChildService;