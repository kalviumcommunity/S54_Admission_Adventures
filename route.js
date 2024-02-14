const express = require("express");
const router = express.Router();
const dataModel = require("./schema");

// Middleware to parse JSON bodies
router.use(express.json());

// Route to fetch all colleges
router.get("/colleges", async (req, res) => {
  try {
    const NewColleges = await dataModel.find();
    console.log("NewColleges: ", NewColleges);
    res.send({
      message: true,
      data: "Data got successfully",
      newdata: NewColleges,
    });
  } catch (err) {
    console.error(err); 
    res.send({ message: false, error: "Error" });
  }
});

// Route to create a new college
router.post("/createcolleges", async (req, res) => {
  try {
    const data = req.body;
    const NewColleges = new dataModel(data);
    await NewColleges.save();
    res.send({
      message: true,
      data: "New college is created successfully",
      newdata: NewColleges,
    });
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});

module.exports = router;
