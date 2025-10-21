const Food = require("../models/food.js");

// 1️⃣ Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const food = await Food.find(); // fetch all recipes
    if (food.length === 0) {
      return res.status(404).send("No recipes found");
    }
    res.render("recipes", { food, region: "All" }); // pass all recipes
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// 2️⃣ Get recipes by region
exports.getRecipesByCuisine = async (req, res) => {
  try {
    let region = req.params.region;

    // Normalize region name (e.g. "north-indian" → "North Indian")
    region = region.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

    const food = await Food.find({ region: region });

    if (food.length === 0) {
      return res.status(404).send(`No recipes found for region: ${region}`);
    }

    res.render("recipes", { food, region });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// 3️⃣ Get single recipe detail
exports.getRecipeDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Food.findById(id);

    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }

    // render detail.ejs page and pass recipe data
    res.render("detail", { recipe });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
