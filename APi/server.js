const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const dateJson = require("./Data.json");

app.use(cors());

app.get("/products", (req, res) => {
  res.status(200).json(dateJson);
});
app.get("/products/:id", (req, res) => {
  const item = dateJson.products.filter((item) => item.id == req.params.id);
  res.status(200).json(item);
});
app.get("/related_products/:id", (req, res) => {
  const product = dateJson.products.find((item) => item.id == req.params.id);
  let relatedProductObjects = product.related_products.map((relatedItem) => {
    return dateJson.products.find((item) => item.id == relatedItem.id);
  });
  res.status(200).json(relatedProductObjects);
});

app.listen(port, () => {
  console.log("App Is Running On Port", port);
});
