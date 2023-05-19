import express from "express";

import { getCategories,deleteCategoryById,createCategory,addCategory, updateCategory,update_category } from "../controllers/categoryController.js";

const router = express.Router();


/**
 *  @description add category
 *  @method GET /add-category
 */
router.get('/add-category',addCategory);

/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-category', update_category)


router.post("/add-category",createCategory);
router.get("/category", getCategories);
router.put('/update-category/:id', updateCategory);
router.delete("/category/:id",deleteCategoryById);
/* 
router.post("/delete-categories",deleteCategoryById);
router.post("/update-categories",updateCategoryById); */


export default router;