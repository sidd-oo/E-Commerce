const express = require('express')
const router = express.Router();
const Product = require('../models/product')

//Display all the products
router.get('/products',async(req,res)=>{
    const products = await Product.find({});
    res.render('products/index',{products});
})

//Get the form for the product
router.get('/products/new',(req,res)=>{
    res.render('products/new')
})

//Create a new product
router.post('/products',async(req, res)=>{
    await Product.create(req.body.product);
    res.redirect('/products');
})

//Show a particular product
router.get('/products/:id',async(req, res)=>{
    const product = await Product.findById(req.params.id);
    res.render('products/show', {product});
})

//Editing the particular product
router.get('/products/:id/edit',async(req, res)=>{
    const product = await Product.findById(req.params.id);
    res.render('products/edit', {product});
})

//Updating a particular product
router.patch('/products/:id', async(req, res)=>{
    await Product.findByIdAndUpdate(req.params.id, req.body.product)
    res.redirect(`/products/${req.params.id}`)
})

//Deleting a particular product
router.delete('/products/:id',async(req, res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
})




module.exports = router;