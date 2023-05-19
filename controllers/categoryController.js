import Category from "../models/Category.js";


//create category POST
export const createCategory = async (req, res) => {
  try {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a new category
    const category = new Category({
      categoryName: req.body.categoryName,
      categoryDescription: req.body.categoryDescription,
    });

    // Save the category in the database
    const categoryData = await category.save();
    console.log(categoryData);
    // res.send(data)
    res.redirect('/add-category');
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating a create operation",
    });
  }
};



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
  
//render add-category
export const addCategory = (req, res) =>{
  res.render('add-category');
}


//update category 

export const updateCategory = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Data to update cannot be empty" });
    }

    const id = req.params.id;
    console.log(id);
    const category = await Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    console.log('category ' , category);
    if (!category) {
      return res.status(404).send({ message: `Cannot update category with ${id}. Maybe category not found!` });
    }

    res.send(category);
  } catch (err) {
    res.status(500).send({ message: "Error updating user information" });
  }
};

//fetch category from the end point 
export const update_category = async (req, res) => {
  try {
    const response = await fetch(`http://localhost:8082/update-category?id=${req.query.id}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const categoryData = await response.json();
    res.render("updateCategory", { category: categoryData });
  } catch (err) {
    res.send(err);
  }
};






/* export const updateCategory1 = (req, res) =>{
  axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
      .then(function(userdata){
          res.render("update_user", { user : userdata.data})
      })
      .catch(err =>{
          res.send(err);
      })
} */

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



