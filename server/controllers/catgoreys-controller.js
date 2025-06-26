const express=require("express");
const catgoriesmod=require('../moduels/catgories');
const getAllcatgories=async(req,res)=>{
    try {
        const cotgorieys = await catgoriesmod.categorymodul.find();
        res.status(200).json(cotgorieys);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const getCatagoryById=async(req,res)=>{
    try {
        const cat=await catgoriesmod.categorymodul.findById(req.params.id);
        res.status(200).json(cat);
    } catch (err) {
        res.status(500).json({ error: err.message });        
    }
};

module.exports.getAllcatgories=getAllcatgories;
module.exports.getCatagoryById=getCatagoryById;