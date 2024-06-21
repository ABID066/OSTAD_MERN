import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    Name: {type:String, required: true},
    Roll: {type: String, unique: true},
    Class: {type:String, required: true},
    Remarks: {type: String, default: "NO Remarks"},
    Serial: {type: Number, min:1, max: 66},
    MobileNumber: {
        type: String,
        validate: {
            validator: function (value) {
                return /^(\+8801|8801|01)[3-9]\d{8}$/.test(value)
            },
            message: props => `${props.value} is Invalid Bangladeshi Mobile Number"`
        }
    }
}, {
    timestamps: true,
    versionKey: false
    });

const StudentsModel = mongoose.model("newstudents", DataSchema);

export default StudentsModel;
