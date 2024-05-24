
const express = require("express")
const { PlantsController } = require("../controllers/Plants.controller")
const router = express.Router()

router.get("/", PlantsController.getAll)
router.get("/:id", PlantsController.getById)
router.post("/", PlantsController.add)
router.delete("/:id", PlantsController.delete)
router.put("/:id", PlantsController.edit)

module.exports = router 
