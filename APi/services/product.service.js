const Product = require("../models/ProductSchema");
const mongoose = require("mongoose");
const { throwCustumError } = require("../errors/CustumError");
const { json } = require("express");

class ProductService {
  getAll = async (queryObject) => {
    let queryObj = { ...queryObject };
    const productsQuery = Product.find();
    console.log(queryObj);

    if (queryObj.sort) {
      productsQuery.sort(queryObj.sort);
    }
    if (queryObj.fields) {
      let selectFields = queryObj.fields.split(",").join(" ");
      productsQuery.select(selectFields);
    }
    if (queryObj.category) {
      if (queryObj.category === "all") {
        productsQuery.find({});
      } else {
        // let excludeProps = ["page", "sort", "limit", "fields"];
        // excludeProps.forEach((element) => delete queryObj[element]);
        productsQuery.find({ category: queryObj.category });
      }
    }
    console.log(queryObj);
    if (queryObj.page) {
      let page = parseInt(queryObj.page) || 1;
      let limit = parseInt(queryObj.limit) || 14;
      let skip = (page - 1) * limit;
      productsQuery.skip(skip).limit(limit);
    }
    return await productsQuery;
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
    const product = await this.getCertain(id);
    const keywords = [...product.keywords];
    const query = Product.find({
      keywords: { $in: keywords },
      _id: { $nin: id },
    });
    return await query;
  };
  getAllCategories = async () => {
    const data = await Product.find().distinct("category");
    return ["all", ...data];
  };
}

const validateMongoId = async (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = ProductService;
