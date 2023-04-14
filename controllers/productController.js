import Category from "../models/Category.js";
import Product from "../models/product.js";

export const getProduct=async(req,res,next)=>{
    
    const productCategory = await Product.find();
    console.log(productCategory);
    res.status(200).send(productCategory);
    /* res.status(200).render("product/viewProducts",{
        title:"ProductList",
        productCategory:productCategory,
    }) */
}


//create and save products 
export const postProduct = async(req,res)=>{
    //validate request 
    if(!req.body){
       res.status(400).send({message: "content can not be empty"})
       return;
    }
    //new product 
      const productName =req.body.productName;
      const productDesc =req.body.productDesc;
      const productPrice= req.body.productPrice;
      const productCategory= req.body.productCategory;
 

    const createProduct = await Product.create({
        productName,
        productDesc,
        productPrice,
        productCategory
      });
 
    res.status(201).json({ createProduct });
}
