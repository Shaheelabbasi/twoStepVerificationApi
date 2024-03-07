const express=require('express')

const app=express()

const Db=require('./Db/connect')

Db(); // connecting to the database/

app.use(express.json()) 
const signup=require('./Routes/signup')






const login=require('./Routes/login')
app.use("/signup",signup)
app.use("/login",login)

app.listen(5000,()=>{
    console.log('Server is running on the port 5000')
})

