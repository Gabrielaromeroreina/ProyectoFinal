const dotenv = require('dotenv')
const mongoose= require('mongoose')

dotenv.config()

// URI de la Base de datos
const uri= process.env.MONGO_ATLAS


//conexion hacia la base de datos
mongoose.connect(uri, {useUnifiedTopology: true})
  .then( ()=> console.log('Conectado a la BD'))
  .catch( (error) => console.log(error))

//exportacion 
module.exports = mongoose