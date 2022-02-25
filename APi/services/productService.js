const Product = require("../models/ProductSchema");
const mongoose = require("mongoose");
const { throwCustumError } = require("../errors/CustumError");

class ProductService {
  static ProductServiceInstance;
  getInstance = () => {
    if (this.ProductServiceInstance) {
      return ProductServiceInstance;
    }
    this.ProductServiceInstance = new ProductService();
    return this.ProductServiceInstance;
  };
  getAll = async () => {
    const products = await Product.find({});
    return products;
  };
  getCertain = async (id) => {
    const isValid = validateMongoId(id);
    if (!id) {
      throwCustumError("You Must Provide Product Id", 400);
    }
    if (!isValid) {
      throwCustumError("You Must Provide Valid Product Id", 400);
    }
    const product = await Product.findById(id);
    return product;
  };
  addNewProduct = async (product) => {
    if (!product) {
      throwCustumError("You Must Provide Product Object", 401);
    }
    const newProduct = await new Product(product);
    newProduct.save();
    return newProduct;
  };
  updateProduct = async (id, product) => {
    const isValid = validateMongoId(id);
    if (!id) {
      throwCustumError("You Must Provide Product Id", 400);
    }
    if (!isValid) {
      throwCustumError("You Must Provide Valid Product Id", 400);
    }
    if (!product) {
      throwCustumError("You Must Provide Product Object", 401);
    }
    const newProduct = await Product.findOneAndUpdate({ _id: id }, product, {
      new: true,
      runValidators: true,
    });
    newProduct.save();
    return newProduct;
  };
  deleteProduct = async (id) => {
    const isValid = validateMongoId(id);
    if (!id) {
      throwCustumError("You Must Provide Product Id", 400);
    }
    if (!isValid) {
      throwCustumError("You Must Provide Valid Product Id", 400);
    }
    const deletedProduct = await Product.deleteOne({ id });
    return deletedProduct;
  };
  getRelatedProducts = async (id) => {
    const product = dateJson.products.find((item) => item.id == req.params.id);
    let relatedProducts = product.related_products.map((relatedItem) => {
      return dateJson.products.find((item) => item.id == relatedItem.id);
    });
    return relatedProducts;
  };
}

const validateMongoId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = ProductService;
