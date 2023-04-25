import mongoose, { Schema } from "mongoose";
import Category from "../models/Category.js";
//import mongoose from "mongoose";
//const {Scehma}=mongoose;
const productSchema=new Schema({
    productName:{
        type:String,
        required:true
    },
    productDesc : {
        type : String,
    },
    productPrice: {
        type : Number,
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'}

});
const Product=mongoose.model('product',productSchema);

export default Product;