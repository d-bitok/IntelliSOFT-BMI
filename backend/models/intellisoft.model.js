const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let IntelliSOFT_BMI_Data = new Schema({}, { timestamps: true });

module.exports = mongoose.model("IntelliSOFT_BMI_Data", IntelliSOFT_BMI_Data);