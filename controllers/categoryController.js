import Category from "../models/Category.js";

export const getCategories = async(req,res,next)=>{
 
  const categories = await Category.find();
  console.log(categories);
  res.status(201).render("category/getCategories",{
    title : "CategoryList",
    categories: categories
  })
}

// Post Category
export const postCategory = async (req, res, next) => {
  // Send categoryName to the req.body
  const categoryName = req.body.categoryName;
  const categoryDescription = req.body.categoryDescription;

  // create new category with mongoose 
  const category = await Category.create({
    categoryName,
    categoryDescription,

  });
  
  //   res.status(201).redirect("/categories");
    res.status(201).json({ category });
};


//delete Category
 export const deleteCategoryById = async (req, res, next) => {

  // Send categoryName to the req.body
  const _id = req.body._id;
 

  // find category by Id from mongoose 
  const category = await Category.findByIdAndDelete({_id})
  console.log(category)
  
  //   res.status(201).redirect("/categories");
    res.status(201).json({ category });
}; 


//update Category
export const updateCategoryById = async (req,res) => {

  // Send categoryName to the req.body
  const _id = req.body._id;
  const categoryName = req.body.categoryName;
  const categoryDescription = req.body.categoryDescription;
 

  // find category by Id from mongoose 
  const category = await Category.findByIdAndUpdate(_id,{categoryName,categoryDescription})
  console.log(category)
  
  //   res.status(201).redirect("/categories");
    res.status(201).json({ category });
}; 



