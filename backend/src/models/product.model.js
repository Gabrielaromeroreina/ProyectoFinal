const mongoose = require('mongoose')
const {Schema} = mongoose

// crear esquema
const productSchema = new Schema(
    {
        code: {type: String, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, default: "El usuario no añadio ninguna descripción"},
        stock: {type: Number, required: true},
        image: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

// exportar modelo de la coleccion
module.exports = mongoose.model("Product", productSchema)