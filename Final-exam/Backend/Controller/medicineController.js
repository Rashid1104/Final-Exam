const MedicineModel = require("../Model/medicineModel")

const getAllMedicines = async (req,res)=>{
    try {
        const medicines = await MedicineModel.find({})
        res.status(200).json({
            medicines,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Medicines not found!!!"
        })
    }
}
const getMedicineById = async (req,res)=>{
    try {
        const {id} = req.params;
        const medicine = await MedicineModel.findById(id)
        res.status(200).json({
            medicine,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Medicine not found!!!"
        })
    }
}
const DeleteMedicine = async (req,res)=>{
    try {
        const {id} = req.params;
        const Delmedicine = await MedicineModel.findByIdAndDelete(id)
        res.status(200).json({
            Delmedicine,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Medicine not found!!!"
        })
    }
}
const AddMedicine = async (req,res)=>{
    try {
        const Newmedicines = MedicineModel({...req.body})
        await Newmedicines.save()
        res.status(201).json({
            Newmedicines,
            message: "Successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "Medicine not found!!!"
        })
    }
}

module.exports = {
    getAllMedicines,
    getMedicineById,
    DeleteMedicine,
    AddMedicine,
}