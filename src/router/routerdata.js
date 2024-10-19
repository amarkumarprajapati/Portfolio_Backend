const express = require("express");
const employeeController = require("../controller/Portfolio");
const router = express.Router();

router.post("/adddatanew", employeeController.adddata);
router.get("/getall", employeeController.getdataalldata);
router.post("/enteruser", employeeController.userEnter);
router.post("/downloadcv", employeeController.downloadcv);
router.get("/getservice", employeeController.contentdata);
router.get("/herosection", employeeController.getherosection);

module.exports = router;
