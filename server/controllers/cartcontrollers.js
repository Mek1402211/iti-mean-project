const res = require("express/lib/response");

cartmod=require("../moduels/catr");
const addtocart=async(req,res)=>{
    const newcaritem = new cartmod.cartmodule({
      cartId:req.body.cartId,
      custId: req.body.custId,
      productId: req.body.productId,
      quantity: req.body.quantity,
      productShortName: req.body.productShortName,
      productName: req.body.productName,
      categoryName: req.body.categoryName,
      productImageUrl: req.body.productImageUrl,
      productPrice: req.body.productPrice
    })
    try {
        const saveditem = await newcaritem.save();
        res.status(201).json({
            message: "item added successfully",
            savedproduct: saveditem
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const searchbyCustId = async (req, res) => {//req.query.name =>http://localhost:3000/products/search?name=s
    try {
        let searchresult = undefined;
        if (req.query.custId ) {
            searchresult = await cartmod.cartmodule.find({
                'custId': req.query.custId ,
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
const deleteFormCart=async(req,res)=>{
    try {
        let deleteditem=undefined;
        if(req.params.id){
            deleteditem=await cartmod.cartmodule.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "item deleted successfully",
                deleteditem: deleteditem
            })
        }else{
            res.status(400).json({
                message: "Id is required"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
module.exports.addtocart=addtocart;
module.exports.searchbyCustId=searchbyCustId;
module.exports.deleteFormCart=deleteFormCart;