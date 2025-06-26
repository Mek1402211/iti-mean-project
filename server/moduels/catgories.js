const mongoose = require('mongoose');
const categoryschema = new mongoose.Schema({

    categoryId: Number,
    categoryName: String,
    parentCategoryId: Number,
    userId:String
})
module.exports.categorymodul = mongoose.model('project-catgories', categoryschema);
