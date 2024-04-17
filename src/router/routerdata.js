const express = require("express");
const employeeController = require("../controller/employee.crud");
const router = express.Router();

router.post("/adddatanew", employeeController.adddata);
router.get("/getall", employeeController.getdata);
router.get("/getsingle/:id", employeeController.getsingledata);
router.patch("/updated/:id", employeeController.updateddata);
router.delete("/deleted/:id", employeeController.deletedata);

module.exports = router;
