const mongoose = require("mongoose");

const DeleteParentChildService = async (req, ParentModel, ChildModel, JoinProperty) => {

    const session = await mongoose.startSession();

    try {
        // Start Transaction
        session.startTransaction();

        let DeleteID = req.params.id;
        let email = req.headers.email;

        let ChildQueryObject = {};
        ChildQueryObject[JoinProperty] = DeleteID;
        ChildQueryObject["email"] = email;

        let ParentQueryObject = {};
        ParentQueryObject["_id"] = DeleteID;
        ParentQueryObject["email"] = email;

        // Delete Children First
        let ChildDeleted = await ChildModel.deleteMany(ChildQueryObject, { session });

        // Delete Parent After
        let ParentDeleted = await ParentModel.deleteOne(ParentQueryObject, { session });

        // Commit Transaction
        await session.commitTransaction();
        await session.endSession();

        return { status: "success", Parent: ParentDeleted, Child: ChildDeleted };

    } catch (e) {
        // Rollback Transaction on Failure
        await session.abortTransaction();
        await session.endSession();
        return { status: "fail", error: e.toString() };
    }
};

module.exports = DeleteParentChildService;
