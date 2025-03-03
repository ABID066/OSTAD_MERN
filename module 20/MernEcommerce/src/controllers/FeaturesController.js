const {FeaturesListServices} = require("../services/FeaturesServices");

exports.FeaturesList = async (req, res) => {
    let result = await FeaturesListServices(req)
    return res.status(200).json(result)
}