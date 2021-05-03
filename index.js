const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path")
const seedDB = require("./seed")
const productRoutes = require('./routes/product');
const methodOverride = require("method-override");

mongoose.connect('mongodb://localhost:27017/ecommerceDB', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log("Error occurecting")
    console.log(err);
})
  
// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({encoded:true}))
app.use(methodOverride('_method'))

app.use(productRoutes);

app.get("/",(req,res)=>{
    res.send("Landing page")
})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})

