const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    ten: { type: String, required: true },
    mssv: { type: String, required: true }
});

module.exports = mongoose.model("Model", schema);