const express = require("express");
const router = express.Router();
const {dataModel,userDataModel} = require("./schema");
require("dotenv").config()
router.use(express.json());
const Joi =require('joi')
const jwt=require('jsonwebtoken')








router.get("/colleges", async (req, res) => {
  try {
    const colleges = await dataModel.find();
    res.send({
      message: true,
      data: "Colleges retrieved successfully",
      colleges: colleges,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});


router.post("/createcolleges", async (req, res) => {
  try {
    const {error}= JoiCollageDataSchema.validate(req.body);
    if(error){
      return res.json({success:false, Message:error.details[0].Message})
    }
    const data = req.body;
    const newCollege = new dataModel(data);
    await newCollege.save();
    res.send({
      message: true,
      data: "New college is created successfully",
      college: newCollege,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});


router.patch("/updatecollege/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedCollege = await dataModel.findByIdAndUpdate(id, newData, { new: true });
    if (!updatedCollege) {
      return res.status(404).send({ message: "false in the upation of collage", error: "College not found" });
    }
    res.send({
      message: true,
      data: "College updated successfully",
      college: updatedCollege,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});


router.delete("/deletecollege/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCollege = await dataModel.findByIdAndDelete(id);
    if (!deletedCollege) {
      return res.status(404).send({ message: false, error: "College not found" });
    }
    res.send({
      message: true,
      data: "College deleted successfully",
      college: deletedCollege,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});

module.exports = router;


////////////////////////////////////////////////////////////////////
//////////  User model///////////////
router.post("/createUser", async (req, res) =>{
  try {
    const {error}= JoiSignupSchema.validate(req.body);
    if(error){
      return res.json({success:false, Message:error.details[0].Message})
    }
    const data = req.body;
    const user = new userDataModel(data);
    await user.save();
    res.send({
      message: true,
      data: "New user is created successfully",
      User: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});



router.post("/login", async (req, res) => {
  try {
    const {email,password} = req.body;
    const user = await userDataModel.findOne({email:email,password:password}
      );
      if(user && user.email==email && user.password==password){
        const token=jwt.sign({email:user.email},process.env.SECRET_KEY,{expiresIn:'7d'})
        res.json({success:true,Message:"Login success",token})
      }else{
        res.json({Message:"Please Enter correct credencials"})
      }
      
  
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});

module.exports=router
// crteating a route for authentication process
////////////////////////////////////////////////////////////
////Joi validation
// Joi Schemas for Validation
const JoiCollageDataSchema = Joi.object({
  state: Joi.string().required(),
  name: Joi.string().required(),
  fee: Joi.string().required(),
  NIRF_ranking: Joi.number().required(),
  highest_package: Joi.string().required(),
  average_package: Joi.string().required(),
  ratings: Joi.string().required()
});

const JoiSignupSchema = Joi.object({
  name: Joi.string(),
  dateOfBirth: Joi.string(),
  state: Joi.string(),
  gender: Joi.string(),
  yearOf12thPass: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string(),
  confirmPassword: Joi.string().valid(Joi.ref('password'))
});