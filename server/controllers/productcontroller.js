const express=require("express");
const prductmod=require('../moduels/prducts');
const { add } = require("mongoose/lib/helpers/specialProperties");
const getAllproducts=async(req,res)=>{
    try {
        const products = await prductmod.productmodul.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const getProductById = async (req, res) => {
    try {
        const product = await prductmod.productmodul.findById(req.params.id);//req.params.id =>http://localhost:3000/products/one/66f9830f3ef82fac2661057b
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};// get 
const addproducts=async(req,res)=>{
    const newproducts = new prductmod.productmodul({
        productId: req.body.productId,
        productSku: req.body.productSku,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productShortName: req.body.productShortName,
        productDescription:req.body.productDescription,
        createdDate: req.body.createdDate,
        deliveryTimeSpan:req.body.deliveryTimeSpan,
        categoryId: req.body.categoryId,
        productImageUrl: req.body.productImageUrl,
        categoryName: req.body.categoryName
    })
    try {
        const savedproduct = await newproducts.save();
        res.status(201).json({
            message: "product added successfully",
            savedproduct: savedproduct
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const updatProduct = async (req, res) => {
    try {
        const product = await prductmod.productmodul.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            res.status(404).json({
                error: "product not found"
            })
            return;
        }
        const updatedproduct = await prductmod.productmodul.findById(req.params.id);
        res.status(200).json({
            message: "product updated successfully",
            updatedproduct: updatedproduct
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}//update
const deleteProduct = async (req, res) => { // :  reprsent paramater 
    try {
        const deletedproduct = await prductmod.productmodul.findByIdAndDelete(req.params.id)
        if (!deletedproduct) {
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({
            message: "product deleted successfully",
            deletedproduct: deletedproduct
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};//delete
const search = async (req, res) => {//req.query.name =>http://localhost:3000/products/search?name=s
    try {
        let searchresult = undefined;
        if (req.query.categoryId ) {
            searchresult = await prductmod.productmodul.find({
                'categoryId': req.query.categoryId ,
            });
            res.status(200).json({
                'message': 'product found',
                'data': searchresult
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
module.exports.getAllproducts=getAllproducts;
module.exports.addproducts=addproducts;
module.exports.updatProduct=updatProduct;
module.exports.deleteProduct=deleteProduct;
module.exports.getProductById=getProductById;
module.exports.search=search;