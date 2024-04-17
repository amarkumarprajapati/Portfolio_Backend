const express = require('express')
require('dotenv').config()
let dbconnect = require('./src/middleware/db.mongo')
let addtdatanew = require('./src/router/routerdata')
const app = express()
const bodyParser = require('body-parser');

const port = process.env.port;

app.use(bodyParser.json());

// api
app.use('/api', addtdatanew)

// Database
dbconnect()

// start server
app.listen(port, () => {
    console.log(`Connected to server ${port}`);
  });

