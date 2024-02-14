require("dotenv").config()

const mongoose=require("mongoose")
const connectDB= async ()=>{
    try{
       
        await mongoose.connect("mongodb+srv://Mohan_Kumar:mohan01012005@cluster0.sdsvsnw.mongodb.net/admission_adventures")
        console.log("DataBase have been succesfully Connected")

    }catch(error){
        console.log("error:",error)
        console.log("DataBase have Disconnected ,Please check the errors.")         
    }
}                       

module.exports=connectDB;