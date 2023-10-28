const express = require('express')
const mongoose = require("mongoose");
const cors= require('cors');
const app = express()
const port = 3001

const dishesRoutes = require('./Routes/dishesRoute');
const userRoutes = require("./Routes/userRoutes");
app.use(cors());

app.use(express.json());
mongoose.connect("mongodb+srv://sonishreya8789:Q16baFvh3srS6Xl5@cluster0.sitrtjz.mongodb.net/?retryWrites=true&w=majority");
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

