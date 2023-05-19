import express from "express";
import {services} from "../services/render.js"
import { getCategories,deleteCategoryById,createCategory} from "../controllers/categoryController.js";

const router = express.Router();

/**
 *  @description add category
 *  @method GET /add-category
 */
router.get('/add-category', services.add_category);


router.get("/category", getCategories);
router.post("/add-category",createCategory);
router.delete("/category/:id",deleteCategoryById);
/* 
router.post("/delete-categories",deleteCategoryById);
router.post("/update-categories",updateCategoryById); */


export default router;