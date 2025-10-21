const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const Sweet = require("./backend/models/sweets");       // Food model
const Sweetsdata = require("./backend/data/sweetdata");     // your food.js array


const dbURL = process.env.ATLASTDB_URL;

mongoose.connect(dbURL)
  .then(() => Sweet.insertMany(Sweetsdata))
  .then(() => {
    console.log("sweets data inserted successfully into atlas !");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting food data:", err);
    mongoose.connection.close();
  });
