const mongoose = require("mongoose")

const { Schema } = mongoose

const MedicineSchema = new Schema({
    img: { type: String },
    name: { type: String },
    price: { type: Number },
})

const MedicineModel = mongoose.model("medicine",MedicineSchema)

module.exports = MedicineModel