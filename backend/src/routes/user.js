const express = require('express')
const router= express.Router()
const bcryptjs= require('bcryptjs')
const jwt = require('jsonwebtoken')


//modelo de users
const User = require('../models/user.model')

//rutas
//crear un usuario
router.post("/signup", async(request,response)=>{
    try{
        
        const isExist = await User.find({email: request.body.email})
        console.log(isExist)

        if(isExist.length > 0){
            return response.status(400).json({status: "El correo ya fue registrado"})
        }

        
        const hash= await bcryptjs.hash(request.body.password, 10)

        
        const newUser= new User({... request.body, password: hash})
        newUser.save()

        return response.status(201).json({status: "Usuario creado correctamente", newUser})

    }catch(error){
        console.log(error)
        return response.status(400).json({status: "Code Error"})
    }
})

// login 

router.post('/login', async(request,response)=>{

    try{


        const user = await User.findOne({email:request.body.email})

        if (user){
            const isPass = await bcryptjs.compare(request.body.password, user.password)

            if (isPass){

                let data= user._doc 
                delete data.password

                const token = jwt.sign(data, "llaveSecreta")

                return response.status(200).json({token})
            }

            return response.status(400).json({status:"Contraseña incorrecta"})
        }
       
        return response.status(400).json({status:"Usuario no existe"})

    }catch(error){
      console.log(error)
      return response.status(400).json ({status:"Code Error"})
    }
})


//obtener usuario por el id 

router.get("/:id", async(request, response)=>{
    
    try{
     
     const id= request.params.id

     const user =  await User.findById(id)
     return response.status(200).json({user})

    }catch(error){
        console.log("Error:", error)
        return response.status(400).json({msg:"Code error"})
    }
})

// actualizar usuario

router.put("/update-user/:id", async(request,response)=>{
     try{

        const id= request.params.id
        const body= request.body

        await User.findByIdAndUpdate(id, {$set: body})

        return response.status(201).json({status:"Usuario Actualizado"})
     
     }catch (error){
       console.log(error)
       return response.status(400).json ({status:"code error"})
     }
})


// eliminar usuario 

router.delete("/delete-user/:id", async(request,response)=>{
   try{
      const id = request.params.id
      await User.findByIdAndRemove(id)

      return response.status(200).json({status:"Usuario Eliminado"}) 

   }catch(error){
    console.log(error)
    return response.status(400).json ({status:"code error"})
   }
})


module.exports= router