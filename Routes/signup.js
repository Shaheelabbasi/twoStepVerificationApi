const express=require('express')
const{Signup}=require('../Controllers/signup')
const Router=express.Router()


Router.post("/",Signup);

module.exports=Router




