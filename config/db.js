const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://nimda:9Zsnh39q6WzOsR2r@cluster0.lbp9pdf.mongodb.net/Ecom",
    { useNewUrlParser: true }
  );
};

module.exports = connect;
 