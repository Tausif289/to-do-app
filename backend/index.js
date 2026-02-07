
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");
const connectDB=require('./config/connectTodb')
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;



// Routes
app.use("/api/todos", todoRoutes);

// MongoDB Connection
// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('Backend server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

