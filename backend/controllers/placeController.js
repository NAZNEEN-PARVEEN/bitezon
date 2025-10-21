const Place = require("../models/place.js");

// Get all places
exports.getAllPlace = async (req, res) => {
  try {
    const region = req.query.region || "All";
    const filter = region === "All" ? {} : { region };

    const places = await Place.find(filter);
    if (places.length === 0) {
      return res.status(404).send("No places found");
    }

    res.render("place", { places, region });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get single place detail (for detail page)
exports.getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id); // ✅ Correct model name
    if (!place) {
      return res.status(404).send("Place not found");
    }
    res.render("detailplace", { place }); 
  } catch (err) {
    res.status(500).send(err.message);
  }
};
