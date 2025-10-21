const mongoose = require("mongoose");

const sweetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  overallRating: {
    type: Number,
    required: true
  },
  dining: {
    rating: { type: Number },
    reviews: { type: Number }
  },
  delivery: {
    rating: { type: Number },
    reviews: { type: Number }
  },
  cuisines: {
    type: [String],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  images: [
    {
      type: String,
      trim: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },  price: {
        type: Number, // price of the dish
        required: true
    },
    minute: {
        type: Number, // time to cook (in minutes)
        required: true
    }
});

module.exports= mongoose.model("Sweet", sweetSchema);


