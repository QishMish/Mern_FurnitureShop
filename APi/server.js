const express = require("express");
const app = express();
const connection = require("./db/connection");
const cors = require("cors");
const dateJson = require("./Data.json");
const routes = require("./routes");
const { globalErrorHandler } = require("./middlewares/globalExceptionHandler");
const { upload } = require("./middlewares/UploadImage");
require("dotenv").config();

//variables
const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/", routes);
app.use(globalErrorHandler);

/*
! deprecated
*/

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.json("dada");
});
app.get("/products", (req, res) => {
  res.status(200).json(dateJson);
  console.log(fetch);
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

/*
! deprecated
*/

const startServer = async () => {
  try {
    await connection(mongoURL);
    app.listen(port, () => {
      console.log("App Is Running On Port", port);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

// const express = require("express");
// const app = express();
// const connection = require("./db/connection");

// const startServer = async (mongoURL, port) => {
//   try {
//     await connection(mongoURL);
//     app.listen(port, () => {
//       console.log("App Is Running On Port", port);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports = {
//   startServer,
// };
