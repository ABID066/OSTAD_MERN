
const ListOneJoinService = async (req, DataModel, SearchArray, JoinStage) => {
    try {
        let pageNo = parseInt(req.params.pageNO, 10);
        let perPage = parseInt(req.params.perPage, 10);
        let searchValue = req.params.searchKeyword;
        let email = req.headers["email"];

        // Ensure valid values
        if (isNaN(pageNo) || pageNo < 1) pageNo = 1;
        if (isNaN(perPage) || perPage < 1) perPage = 10;

        let skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue) {
            let SearchQuery = { $or: SearchArray };

            data = await DataModel.aggregate([
                { $match: { email: email } },
                JoinStage,
                { $match: SearchQuery },
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skipRow }, { $limit: perPage }],
                    },
                },
            ]);
        } else {
            data = await DataModel.aggregate([
                { $match: { email: email } },
                JoinStage,
                {
                    $facet: {
                        Total: [{ $count: "count" }],
                        Rows: [{ $skip: skipRow }, { $limit: perPage }],
                    },
                },
            ]);
        }

        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", error: e.message };
    }
};

module.exports = ListOneJoinService;
