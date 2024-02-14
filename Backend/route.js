const express = require("express");
const router = express.Router();
const dataModel = require("./schema");

router.use(express.json());


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


router.put("/updatecollege/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedCollege = await dataModel.findByIdAndUpdate(id, newData, { new: true });
    if (!updatedCollege) {
      return res.status(404).send({ message: false, error: "College not found" });
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
