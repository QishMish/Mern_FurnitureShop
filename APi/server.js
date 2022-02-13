const express = require('express');
const app = express();
const cors = require("cors");
const port = 8080;
const dateJson = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(dateJson);
});
app.get("/:id", (req, res) => {
  const item = dateJson.filter((item) => item.id == req.params.id);
  res.status(200).json(item);
});
app.listen(port, () => {
  console.log("App Is Running On Port", port);
});
