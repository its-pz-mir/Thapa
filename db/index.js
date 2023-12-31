const mongoose = require("mongoose");
require("dotenv").config();

const db_Uri = process.env.MONGO_URI;

const dbConnect = async () => {
  try {
    mongoose.connect(db_Uri).then(() => {
      console.log("DB has been connected");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;