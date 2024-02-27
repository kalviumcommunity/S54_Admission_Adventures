require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.mongoURI; // Using the mongoURI from environment variables

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Mohan_Kumar:mohan01012005@cluster0.sdsvsnw.mongodb.net/admission_adventures");
        console.log("Database has been successfully connected");
    } catch (error) {
        console.error("Error:", error);
        console.log("Database disconnected. Please check the errors.");
    }
};

module.exports = connectDB;
