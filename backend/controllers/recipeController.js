const { response } = require("express");
const Recipe = require("../models/Recipe");
const  Contact =  require("../models/contact");


// Show all recipes (for main page)
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.render("index", { recipes }); // pass all recipes to main page
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Show single recipe (for detail page)
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("user", "name email");
    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }
    res.render("show.ejs", { recipe }); // pass single recipe to show.ejs
  } catch (err) {
    res.status(500).send(err.message);
  }
};






// Render edit page

// Render edit page
exports.getEditById = async (req, res) => {
 try {
 const { id } = req.params;

 // ... (Valid ObjectId check) ...

   const recipeEdit = await Recipe.findById(id);
 
   // ... (Recipe Not Found check) ...

   // ✅ FIX: Authorization Check ko NULL check ke saath robust banaein
  if (!req.user || !recipeEdit.user || recipeEdit.user.toString() !== req.user._id.toString()) {
    req.flash("error", "You are not authorized to edit this recipe");
    return res.redirect("/"); 
   }

   // Render edit page
   res.render("edit", { recipeEdit });

   } catch (err) {
    console.error("EDIT ERROR CATCH BLOCK:", err); // Debugging ke liye isko use karein
   req.flash("error", "An unexpected system error occurred (you can not edit of this item).");
 return res.redirect("/"); 
 }
};


// Handle form submission and update
exports.postEditById = async (req, res) => {
  try {
    let imagePath = req.body.image; // URL from form

    if (req.file) {
      imagePath = "/images/" + req.file.filename; // uploaded file
    }

    const { recipeName, description, ingredients ,rate} = req.body;

    await Recipe.findByIdAndUpdate(req.params.id, {
      recipeName,
      description,
      image: imagePath,
    
      quantity: req.body.quantity,
      ingredients: ingredients.split(",").map(i => i.trim()), // string -> array
         rate, 
    });

    res.redirect("/recipe/" + req.params.id);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};


//for delet 
// Delete recipe by ID
exports.deleteById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id); // pehle find karo

    if (!recipe) {
      req.flash("error", "Recipe not found");
      return res.redirect("back");
    }

    // ✅ Only owner can delete
    if (recipe.user.toString() !== req.user._id.toString()) {
      req.flash("error", "You are not allowed to delete this order");
      return res.redirect("back");
    }

    await recipe.deleteOne(); // delete kar do
    req.flash("success", "Recipe deleted successfully");
    res.redirect("/"); // home page
  } catch (err) {
    console.error(err);
    req.flash("error", "you are not allowed to delete");
    res.redirect("back");
  }
};




exports.orderuser = async (req, res) => {
  try {
    const { user, username, recipeName, quantity, description, ingredients, imageURL,rate,minute } = req.body;

    // Decide which image to use
    let imagePath = imageURL || "/images/default.jpg"; // use default if nothing
    if (req.file) {
      imagePath = "/images/" + req.file.filename; // multer uploaded file
    }

    // Convert ingredients to array
    const ingredientsArray = ingredients.split(",").map(i => i.trim());

    const newRecipe = new Recipe({
      user: req.user._id,
      username:req.user.name, // <-- use logged-in user's name
      recipeName,
      quantity: Number(quantity),
      description,
      ingredients: ingredientsArray,
      image: imagePath,
         rate ,
         minute  // ✅ added
    
    });

    await newRecipe.save();

    res.redirect("/"); // go back to homepage
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};


///contact us // c
// Render contact form
exports.contactvalue = (req, res) => {
  res.render("contact");
};


//about 
exports.aboutus = (req, res) => {
  res.render("aboutus");
};


// Handle contact form submission
exports.saveContact = async (req, res) => {
  try {
    const { name, email, number, description } = req.body;

    const newContact = new Contact({ name, email, number, description });
    await newContact.save();

    res.render("contact", { message: "Contact saved successfully ✅" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};









// --------------------payment--------------
// Show payment page with only recipe data
exports.getPaymentForm = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    if (!recipe) return res.status(404).send("Recipe not found");

    res.render("payment", { recipe }); // pass recipe only
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading payment page");
  }
};


//after payment
exports.submitPayment = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    if (!recipe) return res.status(404).send("Recipe not found");

    // Here you can mark as paid
    recipe.paymentStatus = "paid"; 
    await recipe.save();

    res.render("sucess");
  } catch (err) {
    console.error(err);
    res.status(500).send("Payment failed");
  }
};




//place booking 
exports.addPlaceBooking = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.body.recipeId);
    if (!recipe) return res.status(404).send("Recipe not found");

    const newBooking = {
      user: req.user ? req.user._id : null,  // ✅ safe check
      username: req.user ? req.user.name : req.body.username, // ✅ always logged-in name
      placeName: req.body.placeName,
      personCount: req.body.personCount,
      days: req.body.days,
      meals: Array.isArray(req.body.meals) ? req.body.meals : [req.body.meals],
      address: req.body.address,
      bookingDate: req.body.bookingDate || Date.now()
    };

    if (!recipe.placeBooking) recipe.placeBooking = [];
    recipe.placeBooking.push(newBooking);
    await recipe.save();

    req.flash("success", "Place booked successfully!");
    res.redirect("/");
  } catch (err) {
    console.error("Booking failed:", err);
    req.flash("error", "Booking failed");
    res.redirect("/");
  }
};



// Show edit form
exports.editPlaceBooking = async (req, res) => {
  try {
    const { recipeId, bookingId } = req.params;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      req.flash("error", "Recipe not found");
      return res.redirect("back");
    }

    const booking = recipe.placeBooking.id(bookingId);
    if (!booking) {
      req.flash("error", "Booking not found");
      return res.redirect("back");
    }

    // ✅ Authorization check: only booking owner can edit
    if (!req.user || booking.user.toString() !== req.user._id.toString()) {
      req.flash("error", "You are not authorized to edit this booking");
      return res.redirect("back");
    }


    res.render("editPlaceBooking", { recipe, booking });
  } catch (err) {
    console.error("Edit booking error:", err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};


// Update booking
exports.updatePlaceBooking = async (req, res) => {
  const { recipeId, bookingId } = req.params;

  try {
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).send("Recipe not found");

    const booking = recipe.placeBooking.id(bookingId);
    if (!booking) return res.status(404).send("Booking not found");

      // ✅ Authorization check: only booking owner can update
    if (!req.user || booking.user.toString() !== req.user._id.toString()) {
      req.flash("error", "You are not authorized to update this booking");
      return res.redirect("back");
    }


    // ✅ always set username from logged-in user
    booking.username = req.user ? req.user.name : booking.username;

    booking.placeName = req.body.placeName;
    booking.personCount = req.body.personCount;
    booking.days = req.body.days;
    booking.meals = Array.isArray(req.body.meals) ? req.body.meals : [req.body.meals];
    booking.address = req.body.address;

    await recipe.save();

    req.flash("success", "Booking updated successfully!");
    res.redirect(`/recipe/${recipeId}`);
  } catch (err) {
    console.error("Update booking error:", err);
    req.flash("error", "Failed to update booking");
    res.redirect("back");
  }
};


// Delete booking
exports.deletePlaceBooking = async (req, res) => {
  const { recipeId, bookingId } = req.params;
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) return res.status(404).send("Recipe not found");
  
const booking = recipe.placeBooking.id(bookingId);
  if (!booking) return res.status(404).send("Booking not found");

    // ✅ Authorization check: only booking owner can delete
  if (!req.user || booking.user.toString() !== req.user._id.toString()) {
    req.flash("error", "You are not authorized to delete this booking");
    return res.redirect("back");
  }

  booking.deleteOne(); // ✅ fixed line
  await recipe.save();
   req.flash("success", "Booking deleted successfully!");

  res.redirect(`/recipe/${recipeId}`);
};

