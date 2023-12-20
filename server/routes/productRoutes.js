import express from "express";
import { addProduct, getAllProduct, getById, removeProduct, updateProduct } from "../controllers/productController.js";
 
const router = express.Router();

router.get("/all",getAllProduct)
router.get("/:id",getById)
router.post("/post",addProduct)
router.put("/update/:id",updateProduct)
router.delete('/remove/:id', removeProduct);


export default router