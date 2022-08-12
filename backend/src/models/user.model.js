const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
<<<<<<< HEAD
=======
        name: {type: String, required: true},
        species: {type: String, required: true},
        breed: {type: String, required: true},
        age: {type: Number, required: true},
        weight: {type: Number, required: true},
        gender: {type: String, required: true},
        chip: {type: String, required: true},
        foodbrand: {type: String, required: true},
        characteristic: {type: String, required: true},
        sterilized: {type: String, required: true},
        specialCondition: {type: String, required: true},
        whichSpecialCondition: {type: String, required: true},
        medicines: {type: String, required: true},
        whichMedicines:{type: String, required: true},
        vaccines: {type: String, required: true},
        whichVaccines: {type: String, required: true},
>>>>>>> laura
        userName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        confirmPassword: {type: String, required: true},
        human: {type: String, required: true},
        cellphone: {type: String, required: true},
        address: {type: String, required: true},
        humanAut: {type: String, required: true},
        cellphoneAut: {type: String, required: true},
        role: {type: String, default: "client"}  
        
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)
