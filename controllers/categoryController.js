import Category from "../models/Category.js";


//create category POST


//get one or all categories 
export const getCategories = async(req,res,next)=>{
  try {
    if (req.query.id) {
      const id = req.query.id;

      const idCategory = await Category.findById(id);

      if (!idCategory) {
        res.status(404).send({ message: "Not found user with id " + id });
      } else {
        res.send(idCategory);
      }
    } else {
      const categories = await Category.find();
      res.render("getCategories", { categories },); 
    }
  } catch (err) {
    res.status(500).send({ message: err.message || "Error occurred while retrieving category information" });
  }
}


//delete Category
 export const deleteCategoryById = async (req, res, next) => {
  try{
    const id = req.params.id;
  

    // find category by Id from mongoose 
    const category = await Category.findByIdAndDelete(id)
    console.log(category)
    if(!category){
      res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
    }else{
        res.send({
            message : `Category with  ${id} was deleted successfully!`
        })
    }

  }
  catch (err) {
    res.status(500).send({ message: "Could not delete category with id=" + id });
  }
}
  
   


/*   const categories = await Category.findById(id);
  if(!categories){
    res.status(404).send({ message : "Not found category with id "+ id})
  }else{
    res.send(categories);
}
  console.log(categories);
  res.status(201).render("category/getCategories",{
    title : "CategoryList",
    categories: categories
  }) */

/* // Post Category
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
}; */


/* //delete Category
 export const deleteCategoryById = async (req, res, next) => {

  // Send categoryName to the req.body
  const _id = req.body._id;
 

  // find category by Id from mongoose 
  const category = await Category.findByIdAndDelete({_id})
  console.log(category)
  
  //   res.status(201).redirect("/categories");
    res.status(201).json({ category });
};  */


/* //update Category
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
};  */



