const express=require('express');
const router=express.Router();
const cartcontrollere=require('../controllers/cartcontrollers');
router.post('/addtocart',cartcontrollere.addtocart)
router.get('/search',cartcontrollere.searchbyCustId)
router.delete('/delete/:id',cartcontrollere.deleteFormCart)
module.exports.router=router;