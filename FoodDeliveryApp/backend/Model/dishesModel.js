const mongoose = require("mongoose");

const DishesModel = mongoose.model("dishes", {
  name: { type: String, required: true },
  imgSrc: { type: String, required: true },
  itemId: {type: String,required:true},
//   category: { type: String, required: true },
  price: { type:   Number, required: true },
//   quantity: { type: Number, required: true },
});

module.exports = DishesModel;




