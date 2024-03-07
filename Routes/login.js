const express=require('express')
const Router=express.Router();
const{login,verifycode}=require("../Controllers/login")

Router.post("/",login)
Router.post("/verifycode",verifycode)
module.exports=Router