const express = require("express");
require("dotenv").config();
let dbconnect = require("./src/middleware/db.mongo");
let addtdatanew = require("./src/router/routerdata");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')

const port = process.env.port;

app.use(bodyParser.json());
app.use(cors())

// server sgtarting

app.get("/api/server", (req, res) => {
  setTimeout(() => {
    const getalldata = res.send("server is starting");
    console.log("check it", getalldata);
  }, 5000);
});

// api
app.use("/api", addtdatanew);

// Database
dbconnect();

// start server
app.listen(port, () => {
  console.log(`Connected to server ${port}`);
});
