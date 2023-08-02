const {Schema,model} = require('mongoose');

const profSchema = new Schema ({
   matricula:{
    type:Number,
    required:true,
    unique:true
   },
   nombre:{
    type:String,
    required:true
   },
   apellido:{
    type:String,
    required:true
   },
   prof:{
     type:String
   },
   correo:{
    type:String,
    required:true,
    unique:true
   },
   alt:{
    type:String,
   },
   url:{
    type:String
   }
})

module.exports= model('Profesores',profSchema)
