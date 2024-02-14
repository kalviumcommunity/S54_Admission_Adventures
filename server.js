const express=require('express')
require("dotenv").config()
const cors=require("cors")
const router=require("./route")
const app=express()
app.use(express.json())
app.use(cors())
PORT=process.env.PORT||3001
const connectDB = require( './mongoDB');
connectDB()
app.use("/",router)
app.get("/",(req,res)=>{
  res.send("My server is started ")
  console.log('My server is started');
  
})
app.get('/ping',(req,res)=>{
  res.send('pong')
})



app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}/`);
  
})
