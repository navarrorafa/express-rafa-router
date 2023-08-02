const {Schema, model} = require('mongoose')


const instalacionesSchema = new Schema ({
  
    nombre:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    alt:{
        type:String
    }
})

module.exports=model('instalation',instalacionesSchema)