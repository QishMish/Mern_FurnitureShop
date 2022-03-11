const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "you must provide product title"],
      trim: true,
    },
    price: {
      type: String,
      require: [true, "you must provide product price"],
      trim: true,
    },
    category: {
      type: String,
      require: [true, "you must provide product category"],
      trim: true,
    },
    images: {
      type: Array,
      require: [true, "you must provide product images"],
    },
    description: {
      type: String,
      require: [true, "you must provide product description"],
      trim: true,
    },
    keywords: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
