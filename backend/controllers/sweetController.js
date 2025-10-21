const sweets = require("../models/sweets");
const Sweet = require("../models/sweets");

// ✅ Get all sweets
exports.getAllSweets = async (req, res) => {
  try {
 
    const sweets = await Sweet.find();

    if (sweets.length === 0) {
      return res.status(404).send("No sweets found");
    }

    // Render the EJS page and pass data
    res.render("sweet", { sweets });
  } catch (err) {
    console.error("Error fetching sweets:", err);
    res.status(500).send("Server error");
  }
};

// -------------getby id----------------

// Get single sweet detail (for detail page)
exports.getSweetById = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id); // ✅ Use model name 'Sweet'
    if (!sweet) {
      return res.status(404).send("Sweet not found");
    }
    res.render("sweetdetail", { sweet }); // pass single sweet object
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
