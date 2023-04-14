import express from "express";
import {getProduct,postProduct} from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.get("/products", getProduct);

productRouter.post("/create-products",postProduct);

export default productRouter;


