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
    type:Number,
    require:true
  },
  NIRF_ranking:{
    type:Number,
    require:true
  },
  highest_package:{
    type:Number,
    require:true
  },
  average_package:{
    type:Number,
    require:true
  },
  ratings:{
    type:Number,
    require:true
  },
})
const dataModel=mongoose.model("CollageData", collageData);
module.exports=dataModel