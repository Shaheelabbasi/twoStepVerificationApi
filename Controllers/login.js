require('dotenv').config()
const usermodel=require('../Models/usermodel')
const bcrypt=require('bcrypt')
const nodemailer=require("nodemailer")
const jwt=require('jsonwebtoken')
const login=async (req,res)=>{

   

    const loginStatus= await usermodel.findOne({email:req.body.email})
    
    if(!loginStatus)
    {
        res.json({message:"no user found"})
    }
    else
    {

       const result= await bcrypt.compare(req.body.password,loginStatus.password)
       if(result)
       {

      //  const token=jwt.sign({id:loginStatus._id},process.env.JWT_SECRET_KEY,{expiresIn:'2m'})

      const verificationCode=Math.floor(Math.random()*90+10000)

      usermodel.findOneAndUpdate({email:loginStatus.email},{code:verificationCode}).then((msg)=>console.log("stored ")).
      catch(err=>console.log(err))
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'shaheelabbasi456@gmail.com',
              pass: 'user passwords'
            }
          });
          
          var mailOptions = {
            from: 'shaheelabbasi456@gmail.com',
            to: 'pofawet574@fashlend.com',
            subject: 'Verification Code for Login ',
            text: `please enter this code ${verificationCode}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

       }
       else
       {
        res.json({msg:"error logging in"})
       }
    }


    

    
}

const verifycode=async(req,res)=>{
const{email,code}=req.body

const user=await usermodel.findOne({email:email})
console.log("the db code is ",user.code)
if(user.code == code)
{
  res.json({message:"logged in successfully"})
}
else
{
  res.json({message:"incorrect code"})
}


}


module.exports={login,verifycode}