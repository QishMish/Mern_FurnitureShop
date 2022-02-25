const mongoose = require("mongoose");

const connectToDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDB;
