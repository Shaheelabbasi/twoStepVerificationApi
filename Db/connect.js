require('dotenv').config();

const mongoose=require('mongoose')
const env=require('dotenv')
const DbUrl=process.env.Db_Url
const connect=()=>{
mongoose.connect(DbUrl)
.then(()=>console.log("successfully connected"))
.catch(()=>console.log("Error connecting to the database"))

}

module.exports=connect
