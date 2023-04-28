import Category from "../models/Category.js";
import Product from "../models/product.js";


//get all products 
export const getProducts=async(req,res,next)=>{
    
    const productList = await Product.find();
    console.log(productList);
    res.status(200).send(productList);
    /* res.status(200).render("product/viewProducts",{
        title:"ProductList",
        productCategory:productCategory,
    }) */
}

//get product By Id 
export const getProduct = async (req,res,next)=>{
const id = req.query.id;
const productId = await Product.findById(id);
console.log(productId);
//res.status(404).send({message: "not found product Id"})
res.status(200).send(productId);

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

//delete Product
 export const deleteProductById = async (req, res, next) => {

    // Send productName to the req.query
    const id = req.query.id;
   
  
    // find product by Id from mongoose 
    const product = await Product.findByIdAndDelete(id)
    console.log(product)
    
    
      res.status(200).json({ product });
  }; 

  //update product 
  //update Category
export const updateProductById = async (req,res) => {

    // Send categoryName to the req.body
    const id = req.query.id;
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const productPrice = req.body.productPrice;
    
   
  
    // find category by Id from mongoose 
    const product = await Product.findByIdAndUpdate(id,{productName,productDescription,productPrice})
    console.log(product)
    
    //   res.status(201).redirect("/categories");
      res.status(201).json({ product });
  }; 
