let mongoose = require("mongoose");
let dotenv = require("dotenv");
require("dotenv").config();

let connectionstring = "mongodb+srv://amardatabase:amardatabase@cluster0.gjuunff.mongodb.net/portfolio"

const database = () => {
  mongoose
    .connect(connectionstring)
    .then(() => {
      console.log(`conneted to ${connectionstring}`);
    })
    .catch(() => {
      console.log(`error ${connectionstring}`);
    });
    mongoose.set("debug",true)
};
module.exports = database;
