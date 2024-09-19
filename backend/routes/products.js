const express = require("express");
const { GetAllProducts, DeleteProduct, GetProductDetails } = require("../controllers/product.controller");
const router = express.Router();

router.get("/products", GetAllProducts);
router.delete("/deleteProduct", DeleteProduct)
router.get("/products/:productId", GetProductDetails);

module.exports = router;
