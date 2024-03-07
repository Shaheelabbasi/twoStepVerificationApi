const mongoose =require('mongoose')

const UserSchema=mongoose.Schema({

    email:{
        type:String,
         required:true
    },
    password:{
        type:String,
        required:true
    },
    code:
    {
        type:String,
        default:null
    }
})
const usermodel=mongoose.model('twostepauth',UserSchema) // collection name 

module.exports=usermodel

