const router = require("express").Router();
const {
  getAllProduct,
  getCertanProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getRelatedProducts
} = require("../controllers/productController");

router
  .get("/", getAllProduct)
  .get("/:id", getCertanProduct)
  .get("/related_products/:id", getRelatedProducts)
  .post("/", createNewProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

module.exports = router;
