const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productId: { type: String, required:true, unique:true },
    productname: { type: String, required:true, unique:true},
    productdesc:{ type: String, required:true},
    img:{ type : String, required:true},
    categories : { type : Array },
    size : { type : String },
    color : { type : String },
    price : { type : String, required:true },
    inventory : { type : String, required:true },
    },
    {timestamps: true}
);

module.exports =mongoose.model("Product, ProductSchema");

//categories can be multi so array- why img string?
//bur stock-inventory ?? isue type:Number? or string