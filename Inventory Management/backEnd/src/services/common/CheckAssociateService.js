
const CheckAssociateService = async (QueryObj, AssociateModel) => {
    try {
        let data = await AssociateModel.aggregate([
            {$match: QueryObj}
        ])
        return data.length > 0;

    } catch (e) {
        return false;
    }
}

module.exports = CheckAssociateService;