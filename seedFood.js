const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config(); //
const Food = require("./backend/models/food");       // Food model
const foodData = require("./backend/data/datafood");     // your food.js array

const dbURL = process.env.ATLASTDB_URL;
mongoose.connect(dbURL)
  .then(() => Food.insertMany(foodData))
  .then(() => {
    console.log("Food data inserted successfully into atlas!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting food data:", err);
    mongoose.connection.close();
  });
