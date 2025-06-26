const express=require('express');
const router=express.Router();
const productcontrollere=require('../controllers/productcontroller');
router.get('/all',productcontrollere.getAllproducts);
router.get('/one/:id',productcontrollere.getProductById)
router.get('/serche',productcontrollere.search);
router.post('/add',productcontrollere.addproducts);
router.put('/update/:id',productcontrollere.updatProduct);
router.delete('/delete/:id',productcontrollere.deleteProduct)

module.exports.router=router;