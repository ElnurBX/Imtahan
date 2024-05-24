
const mongoose = require("mongoose")

const Plants = mongoose.model("Plants", new mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number
    },
    subtitle: {
        type: String
    },
    discrip: {
        type: String
    }
}))

module.exports = { Plants }
