var express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const productRoutes = require("./product");

router.use("/product", productRoutes);
router.use("/auth", authRoutes);

module.exports = router
