const express=require('express')
const app=express()
app.listen(432)
app.get('/ping',(req,res)=>{
  res.send('pong')
})
const express=require('express')
const app2=express()
app.listen(432)
app.get('/ping',(req,res)=>{
  res.send('pong')
})