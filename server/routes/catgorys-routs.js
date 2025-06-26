const express=require('express');
const router=express.Router();
const catgoreyscontrollere=require('../controllers/catgoreys-controller');
router.get('/all',catgoreyscontrollere.getAllcatgories);
router.get('/one/:id',catgoreyscontrollere.getCatagoryById);
module.exports.router=router;