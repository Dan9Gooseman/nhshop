import express from "express";
import ProductCtrl from "../controllers/productCtrl.js";

const productRouter = express.Router()
const productController = new ProductCtrl
productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getOneProduct)
// productRouter.get('/featured', productController.getFeaturedProducts)
productRouter.post('/', productController.newProduct)
productRouter.put('/:id', productController.updateProduct)
productRouter.delete('/:id', productController.deleteProduct)

export default productRouter