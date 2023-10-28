const express= require("express");
const router =express.Router();
const getDishes = require("../Controller/productController");

router.get("/food",getDishes);
module.exports = router;