const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username:{
  type: String,
  
  },
  description: {
    type: String,
    trim: true
  },
  images: [
    {
      type: String, // store image URLs
      trim: true
    }
  ],
  cuisines: [
    {
      type: String,
      trim: true
    }
  ],
  address: {
    type: String,
    trim: true
  },
  region: {
    type: String,
    trim: true
  },
  popularCities: [String],

  ratings: {
    dining: {
      type: Number,
      default: 0
    },
    delivery: {
      type: Number,
      default: 0
    },
    totalReviews: {
      type: Number,
      default: 0
    }
  },

  averageRating: {
    type: Number,
    default: 0
  },

  // ✅ Added price field
  price: {
    type: Number, // Example: 250, 499, etc.
    required: true
  },

  priceRange: {
    type: String, 
    trim: true
  },
  category: {
    type: String, // e.g., "Restaurant", "Cafe", etc.
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Place", placeSchema);
