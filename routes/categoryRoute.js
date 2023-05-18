import express from "express";
import { getCategories,deleteCategoryById} from "../controllers/categoryController.js";

const router = express.Router();


router.get("/category", getCategories);
router.delete("/category/:id",deleteCategoryById);
/* 
router.post("/create-category",postCategory);
router.post("/delete-categories",deleteCategoryById);
router.post("/update-categories",updateCategoryById); */


export default router;