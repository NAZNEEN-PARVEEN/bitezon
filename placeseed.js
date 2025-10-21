const mongoose = require("mongoose");
const Place = require("./backend/models/place");       // Schema
const placesData = require("./backend/data/placedata"); // Correct import
require('dotenv').config();

const dbURL = process.env.ATLASTDB_URL;

mongoose.connect(dbURL)
  .then(async () => {
    console.log("MongoDB Atlas connected succesfully");

    const existing = await Place.find();
    if (existing.length === 0) {
      await Place.insertMany(placesData);
      console.log("Place data inserted successfully!");
    } else {
      console.log("Place data already exists, skipping insertion.");
    }

    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting Place data:", err);
    mongoose.connection.close();
  });
