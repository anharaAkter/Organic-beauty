import mongoose from "mongoose"

/* const {Schema} = mongoose;
const categorySchema = new Schema({
    categoryName: {
        type : String,
        required : true,
    },
})
const Category = mongoose.model("category",categorySchema);
export default Category; */
//const mongooseDB = require('mongoose');
const {Schema} = mongoose;
const categorySchema = new Schema({
    categoryName: {
        type : String,
        required : true,
    },
    categoryDescription:{
        type: String,
    }
})
const Category = mongoose.model("category",categorySchema);

export default Category;