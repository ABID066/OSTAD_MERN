const mongoose = require('mongoose');


const DatabaseSchema = mongoose.Schema({
    name: {type: String, required: true},
    roll: {type: String, required: true},
    class: {type: String, required: true},
    contactNumber: {type: String, validate:{
            validator: function(value) {
                return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(value);
            }}, message: props => `your contactNumber:${props.value} is invalid!`},
    email: {type: String, validate:{
            validator: function(value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            }}, message: props => `your email:${props.value} is invalid!`}
},  {timestamps: true, versionKey: false})

const StudentsModel = mongoose.model("Students", DatabaseSchema);
module.exports = StudentsModel;
