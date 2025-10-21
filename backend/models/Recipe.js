const mongoose = require("mongoose");

// ✅ Subdocument schema for place bookings
const placeBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  username:{type : String,require:true}, // use ID instead of name
  placeName: { type: String, required: true },
  personCount: { type: Number, required: true },
  days: { type: Number, required: true },
  meals: [{ type: String }], // Breakfast/Lunch/Dinner
  address: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now }
});

// ✅ Subdocument schema for reviews
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // reviewer ID
    username:{type : String,require:true}, 
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now }
});

// ✅ Main Recipe Schema
const recipeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // owner of recipe
  recipeName: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: [String], required: true },
  rate: { type: Number },
  minute: { type: Number },
  placeBooking: [placeBookingSchema],
  reviews: [reviewSchema]
});

module.exports = mongoose.model("Recipe", recipeSchema);
