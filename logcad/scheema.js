const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const scheemaSchema = new Schema({
    user: {
    type: String,
    required: true  
    },

    user: {
        type: String,
        required: true  
        }
})

module.exports = mongoose.model("Scheema", scheemaschema)