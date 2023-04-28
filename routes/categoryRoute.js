import express from "express";
import { getCategories, postCategory ,deleteCategoryById, updateCategoryById} from "../controllers/categoryController.js";

const router = express.Router();


router.get("/categories", getCategories);

router.post("/create-category",postCategory);
router.post("/delete-categories",deleteCategoryById);
router.post("/update-categories",updateCategoryById);


export default router;