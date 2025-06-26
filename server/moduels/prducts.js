const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, 'you have to enter a valid number'],
    },
    productSku:
    {
        type: String,
        required: [true, 'you have to enter a valid string']
    },
    productName: {
        type: String,
        required: [true, 'you have to enter a valid string']
    },
    productPrice: {
        type: Number,
        required: [true, 'you have to enter a valid number']
    },
    productShortName: {
        type: String,
        required: [true, 'you have to enter a valid string']
    },
    productDescription:
        {
            type: String,
            required: [true, 'you have to enter a valid string']
        },
    createdDate: String,
    deliveryTimeSpan: String,
    categoryId: Number,
    productImageUrl: String,
    categoryName: String
})
module.exports.productmodul = mongoose.model('project-products', productschema);
