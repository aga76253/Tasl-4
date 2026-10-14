import { Router } from "express";
import productController from "../controllers/products.controller.js"

const router = Router();

router.post('/api/product/create', productController.createProduct);
router.get('/api/product/get', productController.getProduct);
router.patch('/api/product/edit', productController.editProduct);
router.delete('/api/product/delete', productController.deleteProduct);

export def


