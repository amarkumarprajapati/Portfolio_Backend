const express = require("express");
require("dotenv").config();
let dbconnect = require("./src/middleware/db.mongo");
let addtdatanew = require("./src/router/routerdata");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
let projectimages = require("./src/router/getProjectimages");
const { config } = require("dotenv");
let dotenv = config()


const port = process.env.port || 2000;

app.use(bodyParser.json());
app.use(cors());

// server sgtarting

app.get("/", (req, res) => {
  res.send("Server is running");
});

// api
app.use("/api", addtdatanew);
app.use("/api/image", projectimages);

// Database
dbconnect();

// start server
app.listen(port, () => {
  console.log(`Connected to server ${port}`);
});
