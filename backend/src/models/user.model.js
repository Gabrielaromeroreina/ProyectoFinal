const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: {type: String, required: true},
        species: {type: String, required: true},
        breed: {type: String, required: true},
        age: {type: Number, required: true},
        weight: {type: Number, required: true},
        gender: {type: String, required: true},
        chip: {type: String, required: false},
        foodbrand: {type: String, required: false},
        characteristic: {type: String, required: false},
    },
    {
        sterilized: {type: Boolean, required: true},
        specialCondition: {type: Boolean, required: true},
        medicines: {type: Boolean, required: true},
        vaccines: {type: String, required: true},
    },
    {
        userName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        confirmPassword: {type: String, required: true},
        isActive: {type: Boolean, default: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)