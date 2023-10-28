const express = require('express')
const mongoose = require("mongoose");
const cors= require('cors');
const app = express()
const port = 3001

const dishesRoutes = require('./Routes/dishesRoute');
const userRoutes = require("./Routes/userRoutes");
app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/fooddelivery");
console.log("Connected to MongoDB");
app.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
  });
app.use("/api/user", userRoutes);
app.use("/api", dishesRoutes);
app.listen(port, () => {
    console.log("Example app listening")
})

