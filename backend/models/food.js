const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  region: String,
  famousDishes: [String],
  ingredients: [String],
  cookingStyle: String,
  popularCities: [String],
  rating: {
    type: Number,
    default: 0
  },
    minute: {
        type: Number, // time to cook (in minutes)
        required: true
    },
  priceRange: String
});

module.exports = mongoose.model("Food", foodSchema);
