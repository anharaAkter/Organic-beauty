import express from "express";
import {getProducts,getProduct,postProduct,deleteProductById,updateProductById} from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.get("/product/:id", getProduct);

productRouter.post("/create-products",postProduct);
productRouter.post("/delete-product",deleteProductById);
productRouter.post("/update-product",updateProductById);


export default productRouter;


