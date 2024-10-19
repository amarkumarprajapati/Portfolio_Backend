const express = require("express");
const Projectimages = require("../controller/Projectimages");
const router = express.Router();

router.get("/projectimages", Projectimages.getimages);

module.exports = router;
