const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const multer = require("multer");
const path = require("path");
const Recipe = require("../models/Recipe"); // <-- import Recipe model
const Contact = require("../models/contact");
const foodController = require("../controllers/foodController"); // t acces for controller file 
const placeController = require("../controllers/placeController"); // place controller 
const sweetController = require("../controllers/sweetController"); // for controller sweets
const Place = require("../models/place");
const { body, validationResult } = require("express-validator");

//signup 
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//login
const passport = require('passport');


router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  });
});


// ---------------- MULTER CONFIG ------------------
// multer storage setup (for file uploads)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, path.join(__dirname, '..', 'public', 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

// only allow images
const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed!"), false);
    }
  }
});

// ------------------ CRUD Routes ------------------

// Show all recipes (home page)
router.get("/", recipeController.getAllRecipes);

// Show single recipe detail
router.get("/recipe/:id", ensureAuthenticated,recipeController.getRecipeById);

// Edit recipe (form open)
router.get("/recipe/edit/:id",ensureAuthenticated, recipeController.getEditById);

// Edit recipe (update data) ✅ use PUT + multer
router.put(
  "/recipe/edit/:id",ensureAuthenticated,
  upload.single("imageFile"), // match the input name in your form
  recipeController.postEditById
);

// Delete recipe ✅ use DELETE
router.delete("/recipe/delete/:id", ensureAuthenticated,recipeController.deleteById);

// ------------------ ORDER Routes ------------------

// Show order form page
router.get("/order",ensureAuthenticated, (req, res) => {
  res.render("order",{user:req.user}); // sirf form dikhayega
});

// Handle new order (user adds recipe/order) ✅ updated to add order inside existing recipe
router.post("/order",ensureAuthenticated, upload.single("imageFile"), recipeController.orderuser);

// ------------------ CONTACT ROUTES ------------------
router.get("/contact", recipeController.contactvalue);
router.post("/contact", recipeController.saveContact);


// ------------------ CONTACT ROUTES ------------------
router.get("/aboutus", recipeController.aboutus);

// ------------------ Food ROUTES ------------------
// All food
router.get("/food/:id", foodController.getRecipeDetail);
router.get("/all", foodController.getAllRecipes);

// Places routes
router.get("/places", placeController.getAllPlace);
router.get("/place/:id", placeController.getPlaceById);

// Sweet routes
router.get("/sweets", sweetController.getAllSweets);
router.get("/sweets/:id", sweetController.getSweetById);



// ------------------ PAYMENT Routes ------------------
router.get("/payment/:recipeId", recipeController.getPaymentForm);

//after payment
router.post("/payment/:recipeId/submit", recipeController.submitPayment);

// ------------------ PLACE BOOKING ------------------

// Show booking form
router.get("/placebook/:recipeId", ensureAuthenticated,async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);

    if (!recipe){
            req.flash("error_msg", "Recipe not found");
      return res.redirect("/"); // ya kisi suitable page pe redirect
    }

       res.render("placebook", { 
      recipe,
      user: req.user,      // logged-in user pass karo
      booking: null        // agar editing ka option hai, yahan booking data pass kar sakti ho
    });
    
  } catch (err) {
    console.error(err);
    req.flash("error_msg", "Something went wrong while loading the booking form");
    res.redirect("/"); // ya kisi suitable page pe redirect
  }
});

// Add new booking
router.post("/place/add", recipeController.addPlaceBooking);

// Edit booking
router.get("/place/edit/:recipeId/:bookingId",  ensureAuthenticated, recipeController.editPlaceBooking);
router.put("/place/edit/:recipeId/:bookingId",   ensureAuthenticated,recipeController.updatePlaceBooking);

// Delete booking
router.delete("/place/delete/:recipeId/:bookingId", recipeController.deletePlaceBooking);



// Add new review
// Ensure user is logged in before posting
// Add new review
router.post('/recipes/:id/reviews', ensureAuthenticated, async (req, res) => {
  const { comment, rating } = req.body;
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) {
    req.flash('error', 'Recipe not found');
    return res.redirect('/');
  }

  // ✅ Store both user ID and username
  recipe.reviews.push({
    user: req.user._id,       // reviewer ID
    username: req.user.name,  // reviewer name
    comment,
    rating
  });
  
  await recipe.save();

  req.flash('success', 'Review added successfully');
  res.redirect(`/recipe/${recipe._id}`);
});




// =======================
// Delete a review
// =======================
// =======================
// Delete a review (Fixed version)
// =======================
router.post('/recipes/:id/reviews/:reviewId/delete', ensureAuthenticated, async (req, res) => {
  try {
    const { id, reviewId } = req.params;
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      req.flash('error', 'Recipe not found');
      return res.redirect(`/recipes/${id}`);
    }

    const review = recipe.reviews.id(reviewId);
    if (!review) {
      req.flash('error', 'Review not found');
      return res.redirect(`/recipes/${id}`);
    }

    // ✅ Only the review owner can delete
    if (!review.user || review.user.toString() !== req.user._id.toString()) {
      req.flash('error', 'You are not allowed to delete this review');
      return res.redirect(`/recipe/${id}`);
    }

    // ✅ Remove the review and save
    review.deleteOne(); // <- preferred over .remove()
    await recipe.save();

    req.flash('success', 'Review deleted successfully');
    res.redirect(`/recipe/${id}`);
  } catch (err) {
    console.error("❌ DELETE REVIEW ERROR:", err.message);
    req.flash('error', 'Something went wrong while deleting the review');
    res.redirect(`/recipe/${req.params.id}`);
  }
});


// =======================
// Edit a review - show edit form
// =======================
// router.get('/recipes/:id/reviews/:reviewId/edit', ensureAuthenticated, async (req, res) => {
//   try {
//     const { id, reviewId } = req.params;
//     const recipe = await Recipe.findById(id);
//     if (!recipe) {
//       req.flash('error', 'Recipe not found');
//       return res.redirect('back');
//     }

//     const review = recipe.reviews.id(reviewId);
//     if (!review) {
//       req.flash('error', 'Review not found');
//       return res.redirect('back');
//     }

//     // Only review owner can edit
//     if (review.user.toString() !== req.user._id.toString()) {
//       req.flash('error', 'You are not allowed to edit this review');
//       return res.redirect(`/recipe/${recipe._id}`);
//     }

//     res.render('editreview', { recipe, review });
//   } catch (err) {
//     console.error(err);
//     req.flash('error', 'Something went wrong');
//     res.redirect('back');
//   }
// });



// Edit a review - show edit form
router.get('/recipes/:id/reviews/:reviewId/edit',ensureAuthenticated, async (req, res) => {
  const { id, reviewId } = req.params;
  const recipe = await Recipe.findById(id);
  const review = recipe.reviews.id(reviewId);
  res.render('editreview', { recipe, review });
});

// =======================
// Update review
// =======================
router.post('/recipes/:id/reviews/:reviewId/edit', ensureAuthenticated, async (req, res) => {
  try {
    const { id, reviewId } = req.params;
    const { comment, rating } = req.body;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      req.flash('error', 'Recipe not found');
      return res.redirect('back');
    }

    const review = recipe.reviews.id(reviewId);
    if (!review) {
      req.flash('error', 'Review not found');
      return res.redirect('back');
    }

    // Only review owner can update
    if (review.user.toString() !== req.user._id.toString()) {
      req.flash('error', 'You are not allowed to update this review');
      return res.redirect(`/recipe/${recipe._id}`);
    }

    review.comment = comment;
    review.rating = rating;
    await recipe.save();

    req.flash('success', 'Review updated successfully');
    res.redirect(`/recipe/${recipe._id}`);
  } catch (err) {
    console.error(err);
    req.flash('error', 'Something went wrong');
    res.redirect('back');
  }
});


//signup route 

// Signup GET
router.get('/signup', (req, res) => {
  res.render('signup'); // create signup.ejs
});

// Signup POST
// Signup POST route with validation
router.post(
  '/signup',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('confirmPassword')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords do not match');
        }
        return true;
      })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash('error', errors.array()[0].msg);
      return res.redirect('/signup');
    }

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash('error', 'Email already registered');
      return res.redirect('/signup');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    req.flash('success', 'Account created! You can login now.');
    res.redirect('/login');
  }
);



//login 
// Login GET
router.get('/login', (req, res) => {
  res.render('login', { error: req.flash('error') }); // create login.ejs
});

// Login POST
router.post('/login', passport.authenticate('local', {
  successRedirect: '/', // redirect to home page after login
  failureRedirect: '/login',
  failureFlash: true
}));

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});


//review protection 
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

// Example usage
router.get('/add-review', ensureAuthenticated, (req, res) => {
  res.render('addReview');
});


// Filter by region dynamically
router.get("/region/:region", async (req, res, next) => {
  try {
    const data = await foodController.getRecipesByCuisine(req, res);
    if (!data || data.length === 0) {
      return res.status(404).render("404", { message: "No recipes found for this region" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});



module.exports = router;
