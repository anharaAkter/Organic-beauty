import Category from "../models/category.js"

// Get All Categories
export const getCategories = (req, res, next) => {
    res.render("category/getCategories", {
      title: "CategoryList",
    });
  };
  //create category 
  export const postCategory = async(req,res,next) =>{
    //send
    const categoryName = req.body.categoryName;
    //
    const category = await Category.create({
        categoryName,
    })
    console.log(category);
    //res.status(201)
    res.status(201).send("Categoris created : ",category)
    
  }