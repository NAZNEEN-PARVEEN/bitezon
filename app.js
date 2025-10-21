//new add
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
require("dotenv").config();


const getGeminiAPIResponse = require("./gemini");

// Models
const Recipe = require("./backend/models/Recipe");
const Place = require("./backend/models/place");
const Sweet = require("./backend/models/sweets");
const User = require("./backend/models/User");
const initialRecipeData = require("./backend/data/data");

// Routes
const recipeRoutes = require("./backend/routes/routes");

const app = express();
const DEFAULT_ADMIN_ID = "60c0f997c4c9d50015b8d2b3";
const dbURL=process.env.ATLASTDB_URL;


// ------------------ MongoDB Connection ------------------
// ...

async function main() {
    await mongoose.connect(dbURL);
    
    // try {
    //     // ... (check if exists logic remains the same) ...

    //     if (!exists && initialRecipeData && initialRecipeData.length > 0) {
            
    //         // 2. Data Mapping: Har recipe mein default user ID jodein
    //         const dataWithUser = initialRecipeData.map(recipe => ({
    //             ...recipe,
    //             user: DEFAULT_ADMIN_ID, // Required user ID yahan jud jayegi
    //             // Note: Agar 'username' field bhi required ho, to woh bhi yahan jodein:
    //             // username: recipe.username || "SystemAdmin",
    //         }));
            
    //         // 3. Updated array ko insert karein
    //         await Recipe.insertMany(dataWithUser); 
    //         console.log("Main Page Recipes successfully inserted from app.js!");
    //     } else {
    //         console.log("Initial Recipes found. Skipping mass insert.");
    //     }
    // } catch (err) {
    //     console.error("Error during initial Recipe data insertion:", err);
    // }
}

main()
    .then(() => {
        console.log(" MongoDB Atlas connected successfully!");
        
        // Start server only after successful DB connection and seeding
        app.listen(3000, () => {
             console.log(" Server running on http://localhost:3000");
        });
    })
    .catch(err => {
        console.error(" MongoDB Atlas Connection FAILED:", err.message);
        // Agar DB fail ho jaye to server start nahi hoga
    });
// ------------------ Middleware ------------------
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// STATIC FILES PATH (CORRECTED LINE)
app.use(express.static(path.join(__dirname,"backend", "public")));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname,"backend", "views"));

// ------------------ Cookie + Session + Flash ------------------
app.use(cookieParser());

app.use(
  session({
    secret: "secretKey123",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day session
  })
);

app.use(flash());

// ------------------ Passport Setup ------------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: "Email not registered" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: "Incorrect password" });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// ------------------ Flash Messages Middleware ------------------
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ------------------ Chatbot Rules ------------------
const rules = {
  "hi": "Hello! 😊 How can I assist you today?",
  "hello": "Hey there! 👋 What can I do for you?",
  "how are you": "I'm doing great! Thanks for asking 😄",
  "menu": "🍕 You can explore our delicious menu on the Menu page!",
  "order": "You can order using the 'Order Now' button 🛒",
  "contact": "You can contact us at support@nazfood.com 📩",
  "about": "We are an online food delivery platform delivering happiness 🍱✨",
  "thanks": "You're welcome! 😍 Anything else I can help you with?",
  "bye": "Goodbye! 👋 Have a tasty day!",
  "burger": "Yes my friend! We have so many dishes 🍔",
  "what is available": "We have burgers, fast food, biryani, drinks, sweets, and you can also order or book places.",
  "how much price of dishes": "It depends on the item, dear. Most dishes are above ₹150.",
  "what to charges of places": "Booking charges depend on the number of people and the place. Mostly, it is around ₹1500 per person.",
  "how can i order": "You can go to the 'Order Now' button, click it, fill the form, and your order will be added to your shortlist.",
  "how to order": "You can go to the 'Order Now' button, click it, fill the form, and your order will be added to your shortlist."
};

// ------------------ Chatbot Routes ------------------
app.get("/chat", (req, res) => res.render("chatbot"));

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const cleanedMsg = message.toLowerCase().trim().replace(/[?.!]/g, "");

  if (rules[cleanedMsg]) return res.json({ reply: rules[cleanedMsg] });

  try {
    const aiReply = await getGeminiAPIResponse(message);
    return res.json({ reply: aiReply });
  } catch (err) {
    console.error("Gemini API error:", err.message);
    const defaults = [
      "Sorry, I didn't get that 🤔",
      "Can you please rephrase that?",
      "Hmm... I don’t understand yet, but I’m learning! 💡",
      "I'm not sure, but you can check our Help section 📘"
    ];
    return res.json({ reply: defaults[Math.floor(Math.random() * defaults.length)] });
  }
});

// ------------------ Routes ------------------
app.use("/", recipeRoutes);

// ------------------ Error Handlers ------------------
app.use((req, res) => {
  res.status(404).render("404", { message: "Page not found" });
});

// ------------------ Start Server ------------------
// app.listen(3000, () => {
//   console.log(" Server running on http://localhost:3000");
// });
