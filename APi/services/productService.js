/** @format */

const Product = require('../models/ProductSchema');
const mongoose = require('mongoose');
const { throwCustumError } = require('../errors/CustumError');

class ProductService {
  static ProductServiceInstance;
  getInstance = () => {
    if (this.ProductServiceInstance) {
      return ProductServiceInstance;
    }
    this.ProductServiceInstance = new ProductService();
    return this.ProductServiceInstance;
  };
  getAll = async query => {
    let productQuery = Product.find();
    if (query.category) {
      let category = { ...{ category: query.category } };
      return await productQuery.find(category);
    }else{
      return await productQuery
    }
    
    if(query.sort){
      return await productQuery.sort(query.sort);
    }else{
      return await productQuery.sort("field -price")
    }
    
  };
  getCertain = async id => {
    const isValid = validateMongoId(id);
    if (!id) {
      throwCustumError('You Must Provide Product Id', 400);
    }
    if (!isValid) {
      throwCustumError('You Must Provide Valid Product Id', 400);
    }
    const product = await Product.findById(id);
    return product;
  };
  addNewProduct = async product => {
    if (!product) {
      throwCustumError('You Must Provide Product Object', 401);
    }
    const newProduct = await new Product(product);
    newProduct.save();
    return newProduct;
  };
  updateProduct = async (id, product) => {
    const isValid = validateMongoId(id);
    if (!id) {
      throwCustumError('You Must Provide Product Id', 400);
    }
    if (!isValid) {
      throwCustumError('You Must Provide Valid Product Id', 400);
    }
    if (!product) {
      throwCustumError('You Must Provide Product Object', 401);
    }
    const newProduct = await Product.findOneAndUpdate({ _id: id }, product, {
      new: true,
      runValidators: true,
    });
    newProduct.save();
    return newProduct;
  };
  deleteProduct = async id => {
    const isValid = validateMongoId(id);
    if (!id) {
      throwCustumError('You Must Provide Product Id', 400);
    }
    if (!isValid) {
      throwCustumError('You Must Provide Valid Product Id', 400);
    }
    const deletedProduct = await Product.deleteOne({ id });
    return deletedProduct;
  };
  getRelatedProducts = async id => {
    const product = await this.getCertain(id);
    const relatedProductIds = product.related_products;

    const relatedProducts = [];

    for (const key in relatedProductIds) {
      const item = await this.getCertain(relatedProductIds[key].id);
      relatedProducts.push(item);
    }
    return await relatedProducts;
  };
}

const validateMongoId = id => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = ProductService;
