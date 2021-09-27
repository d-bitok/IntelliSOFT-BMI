const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let IntelliSOFT_BMI_Data = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    dob_date: {
        type: Number
    },
    current_date: {
        tpye: Number
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    BMI : {
        type: Number
    },
    health: {
        type: Boolean,
    },
    on_diet: {
        type: Boolean,
    },
    on_prescription: {
        type: Boolean,
    },
    comments: {
        type: String
    },
    bmi_status: {
        type: String
    },
    age: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model("IntelliSOFT_BMI_Data", IntelliSOFT_BMI_Data);