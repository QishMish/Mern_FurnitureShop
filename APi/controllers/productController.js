const asyncHandler = require("express-async-handler");
const ProductService = require("../services/product.service");

//service instance
const ProductServiceInstance = new ProductService();

exports.getAllProduct = asyncHandler(async (req, res) => {
  let queryObject;
  if (req.query) {
    queryObject = req.query;
  }
  const products = await ProductServiceInstance.getAll(queryObject);
  res.status(200).json(products);
});
exports.getCertanProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await ProductServiceInstance.getCertain(id);
  res.status(200).json(product);
});
exports.createNewProduct = asyncHandler(async (req, res) => {
  const newProduct = await ProductServiceInstance.addNewProduct(req.body);
  res.status(201).json(newProduct);
});
exports.updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await ProductServiceInstance.updateProduct(
    id,
    req.body
  );
  res.status(204).json(updatedProduct);
});
exports.deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id)
  const deletedProduct = await ProductServiceInstance.deleteProduct(id);
  res.status(202).json(deletedProduct);
});
exports.getRelatedProducts = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const relatedProducts = await ProductServiceInstance.getRelatedProducts(id);
  res.status(200).json(relatedProducts);
});
exports.getAllcategories = asyncHandler(async (req, res) => {
  const categories = await ProductServiceInstance.getAllCategories();
  res.status(200).json(categories);
});

