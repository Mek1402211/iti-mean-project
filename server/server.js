
const express = require('express')
const expressapp = express()
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Sunshine')
expressapp.use(express.json());
const connection = mongoose.connection;
const prductroutes=require('./routes/product-routs.js')
const catgoreysroutes=require('./routes/catgorys-routs.js')
const cartroutes=require('./routes/cart-routs.js')

connection.once('open', () => console.log('connecte to database'));
connection.on('error', (err) => console.error(err));

expressapp.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
        return res.status(200).json({});
    }
    next();
});

expressapp.use('/products',prductroutes.router);
expressapp.use('/catgoreys',catgoreysroutes.router);
expressapp.use('/cart',cartroutes.router);
expressapp.listen(4000,console.log("hi"))
