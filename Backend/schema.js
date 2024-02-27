const mongoose=require("mongoose")
const collageData=new mongoose.Schema({
  state:{
    type:String,
    require:true
  },
  name:{
    type:String,
    require:true
  },
  fee:{
    type:String,
    require:true
  },
  NIRF_ranking:{
    type:Number,
    require:true
  },
  highest_package:{
    type:String,
    require:true
  },
  average_package:{
    type:String,
    require:true
  },
  ratings:{
    type:Number,
    require:true
  },
})

const signupSchema=mongoose.Schema({
  name:String,
        dateOfBirth: String,
        state: String,
        gender: String,
        yearOf12thPass: String,
        phone: String,
        email: String,
        password: String,
        confirmPassword: String
})
const userDataModel=mongoose.model("userData",signupSchema);
const dataModel=mongoose.model("collegedetails", collageData);
module.exports={dataModel,userDataModel}