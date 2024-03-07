const usermodel=require('../Models/usermodel')
const bcrypt=require('bcrypt')
const Signup=async (req,res)=>{




const existingUser= await usermodel.findOne({email:req.body.email})
if(existingUser)
{
    res.json("user already exists")
}
else
{
    const{password}=req.body
   const hashpwd=await bcrypt.hash(password,10)
   console.log("hashed password is ",hashpwd)

    usermodel.create({email:req.body.email,password:hashpwd})
    .then((status)=>res.json("user created successfully"))
    .catch(err=>res.json("error in creating user "+err))
}

}

module.exports={
    Signup,
}