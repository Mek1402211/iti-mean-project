const mongoose = require('mongoose');
const cartschema = new mongoose.Schema({
      cartId: Number,
      custId: Number,
      productId:mongoose.Schema.Types.ObjectId,
      quantity: Number,
      productShortName: String,
      addedDate:{ type: Date, default: Date.now },
      productName: String,
      categoryName: String,
      productImageUrl: String,
      productPrice: Number
})
module.exports.cartmodule=mongoose.model('project-cart',cartschema)