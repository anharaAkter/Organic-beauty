import express from "express";
import { getCategories, postCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getCategories);

router.post("/add-category",postCategory);

export default router;