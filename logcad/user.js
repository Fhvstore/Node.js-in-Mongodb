const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userScheema = new Schema({
    user: {
        type: String,
        require: false
    },
    roles: {
        User: {}
    }
})