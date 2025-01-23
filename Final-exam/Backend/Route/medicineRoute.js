const express = require('express')
const { getAllMedicines, getMedicineById, DeleteMedicine, AddMedicine } = require('../Controller/medicineController')

const router = express.Router()

router.get("/",getAllMedicines)
router.get("/:id",getMedicineById)
router.delete("/:id",DeleteMedicine)
router.post("/",AddMedicine)

module.exports = router