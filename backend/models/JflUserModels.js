const {Schema,model} = require('mongoose');

const userSchema = new Schema({
  user:{
    type:String,
    required:true,
    unique:true,
  },
  password: {
    type:Number,
    require:true
  },
  date: {
    type:Date,
    default:Date.now
  }
})

module.exports= model("user",userSchema)



