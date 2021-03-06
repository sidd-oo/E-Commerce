const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    desc: {
        type: String
    }
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product