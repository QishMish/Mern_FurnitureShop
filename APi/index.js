const express = require("express");
const app = express();
const cors = require("cors");
const dateJson = require("./Data.json");
const routes = require("./routes");
const { globalErrorHandler } = require("./middlewares/globalExceptionHandler");
const { upload } = require("./middlewares/UploadImage");
require("dotenv").config();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/", routes);
app.use(globalErrorHandler);


module.exports = app;













































// const express = require("express");
// const app = express();
// const cors = require("cors");
// const dateJson = require("./Data.json");
// const routes = require("./routes");
// const { globalErrorHandler } = require("./middlewares/globalExceptionHandler");
// require("dotenv").config();
// const logger = require("./config/Logger");
// const { startServer } = require("./server");

// // starting server
// startServer(mongoURL, port);

// //variables
// const port = process.env.PORT || 5000;
// const mongoURL = process.env.MONGO_URL;

// //middlewares
// app.use(cors());
// app.use(express.json());
// app.use(globalErrorHandler);
// app.use(express.urlencoded({ extended: false }));

// //routes
// app.use("/api/v1/", routes);
// app.get("/", (req, res) => {
//     res.status(200).json("dada");
//   });

// app.get("/products", (req, res) => {
//   logger.error("Hello, Winston logger, the second error!");
//   res.status(200).json(dateJson);
// });
// app.get("/products/:id", (req, res) => {
//   const item = dateJson.products.filter((item) => item.id == req.params.id);
//   res.status(200).json(item);
// });
// app.get("/related_products/:id", (req, res) => {
//   const product = dateJson.products.find((item) => item.id == req.params.id);
//   let relatedProductObjects = product.related_products.map((relatedItem) => {
//     return dateJson.products.find((item) => item.id == relatedItem.id);
//   });
//   res.status(200).json(relatedProductObjects);
// });


