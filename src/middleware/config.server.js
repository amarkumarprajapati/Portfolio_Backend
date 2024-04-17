let express = require("express");
let dotenv = require("dotenv");
let app = express();
require("dotenv").config();

const port = process.env.port;

const connection = () => {
  app.listen(port, () => {
    console.log(`Connected to server ${port}`);
  });
};

module.exports = connection;
