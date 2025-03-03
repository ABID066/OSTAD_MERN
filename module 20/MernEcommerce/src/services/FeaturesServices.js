const FeaturesModel = require("../models/FeaturesModel");


const FeaturesListServices = async () => {
    try {
        let data = await FeaturesModel.find();
        return {status: 'success', data: data};
    } catch (e) {
        return {status: 'error', data: e};
    }
}

module.exports = {
    FeaturesListServices
}