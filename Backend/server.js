const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB=require("./mongoDB")
const router=require("./route")
require('dotenv').config();
connectDB()
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(router)

app.get('/', (req, res) => {
  res.send('My server is started');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
