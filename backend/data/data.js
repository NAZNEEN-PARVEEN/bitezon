const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");

const recipeData = [
  {
    username: "Aman",
    recipeName: "Spicy Chicken Biryani",
    description: "A delicious and aromatic Indian dish made with marinated chicken, rice, and a blend of flavorful spices.",
    quantity: 4,
    ingredients: ["Basmati rice", "Chicken", "Onion", "Tomato", "Yogurt", "Garlic", "Ginger", "Spices", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/pictures/chains/3/307893/f606e2cc225f298f77b0bf9673e96dbe_featured_v2.jpg?output-format=webp",
    rate: 450,
    minute: 40
  },
  {
    username: "Chef Rahul",
    recipeName: "Butter Chicken",
    description: "A rich and creamy tomato and butter gravy with tender pieces of tandoor-cooked chicken.",
    quantity: 3,
    ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Garlic", "Ginger", "Spices", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/dish_photos/e32/b3770617b65fbf441ab4092e1d278e32.jpg?output-format=webp",
    rate: 500,
    minute: 35
  },
  {
    username: "Priya's Kitchen",
    recipeName: "Vegetable Pulao",
    description: "Fragrant basmati rice cooked with a variety of fresh vegetables and whole spices.",
    quantity: 2,
    ingredients: ["Basmati rice", "Carrot", "Beans", "Peas", "Onion", "Spices", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/pictures/1/21478391/9233341a9be1f17023fb0efbb734c421_o2_featured_v2.jpg",
    rate: 200,
    minute: 25
  },
  {
    username: "Gaurav",
    recipeName: "Dal Makhani",
    description: "A classic Indian lentil curry made with whole black lentils and red kidney beans, slow-cooked in a creamy sauce.",
    quantity: 5,
    ingredients: ["Whole black lentils", "Red kidney beans", "Tomato", "Cream", "Butter", "Garlic", "Ginger", "Spices"],
    image: "https://b.zmtcdn.com/data/dish_photos/17c/fe8c934ef0b70f1d9f9435be0325b17c.jpeg",
    rate: 300,
    minute: 40
  },
  {
    username: "Anjali",
    recipeName: "Palak Paneer",
    description: "Cubes of soft paneer in a rich and flavorful spinach gravy.",
    quantity: 3,
    ingredients: ["Paneer", "Spinach", "Onion", "Tomato", "Garlic", "Ginger", "Spices", "Cream"],
    image: "https://b.zmtcdn.com/data/dish_photos/42a/733975f6511eaec3e3a4a11bd05a042a.jpg",
    rate: 350,
    minute: 30
  },
  {
    username: "The Spice Master",
    recipeName: "Tandoori Aloo",
    description: "Marinated potatoes roasted in a tandoor oven, giving them a smoky and charred flavor.",
    quantity: 4,
    ingredients: ["Potatoes", "Yogurt", "Red chili powder", "Turmeric", "Garam masala", "Lemon juice", "Salt"],
    image: "https://b.zmtcdn.com/data/dish_photos/1fb/e3914ab52d149c573eed07a3b24061fb.png",
    rate: 250,
    minute: 25
  },
  {
    username: "Ruby's Kitchen",
    recipeName: "Aloo Gobi",
    description: "A popular dry curry of spiced potatoes and cauliflower florets.",
    quantity: 2,
    ingredients: ["Potatoes", "Cauliflower", "Onion", "Tomato", "Garlic", "Ginger", "Spices", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/dish_photos/285/410ed19a7fa964a0dcf0bbc564833285.jpeg?output-format=webp",
    rate: 180,
    minute: 25
  },
  {
    username: "Home Chef",
    recipeName: "Masala Dosa",
    description: "A thin, crispy rice and lentil crepe filled with a savory potato filling.",
    quantity: 2,
    ingredients: ["Rice", "Urad dal", "Potatoes", "Onion", "Mustard seeds", "Turmeric", "Chili", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/pictures/3/21909703/44c808904131aded55da96cf9261b435_o2_featured_v2.jpg",
    rate: 150,
    minute: 30
  },
  {
    username: "Cooking with Dev",
    recipeName: "Chole Bhature",
    description: "A classic North Indian dish of spicy chickpeas served with deep-fried bread.",
    quantity: 5,
    ingredients: ["Chickpeas", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Oil", "Flour (for bhature)"],
    image: "https://b.zmtcdn.com/data/dish_photos/393/2761619cba2609f0bd01eca363cd2393.jpeg?output-format=webp",
    rate: 400,
    minute: 35
  },
  {
    username: "Suman",
    recipeName: "Shahi Paneer",
    description: "Paneer cubes in a rich, creamy gravy made with tomatoes, onions, and cashews.",
    quantity: 3,
    ingredients: ["Paneer", "Tomatoes", "Onion", "Cashews", "Cream", "Spices", "Butter"],
    image: "https://b.zmtcdn.com/data/dish_photos/6c0/90892b0d285a6901f4f3c8a22c1506c0.png",
    rate: 450,
    minute: 30
  },
  {
    username: "Nisha",
    recipeName: "Paneer Butter Masala",
    description: "Paneer cubes in a creamy tomato-based gravy with butter and spices.",
    quantity: 4,
    ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Ginger", "Garlic", "Spices"],
    image: "https://b.zmtcdn.com/data/pictures/1/22205091/cf8d88bc93aa05eed331c2f53519dbf6_o2_featured_v2.jpg",
    rate: 400,
    minute: 35
  },
  {
    username: "Vikram",
    recipeName: "Egg Curry",
    description: "Hard-boiled eggs simmered in a spicy onion-tomato gravy.",
    quantity: 3,
    ingredients: ["Eggs", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Oil", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/pictures/3/103/2f44de09307e53a44cc0fe945fdecfec_o2_featured_v2.jpg",
    rate: 250,
    minute: 25
  },
  {
    username: "Ritu",
    recipeName: "Veg Fried Rice",
    description: "Aromatic rice stir-fried with fresh vegetables and soy sauce.",
    quantity: 2,
    ingredients: ["Rice", "Carrot", "Capsicum", "Beans", "Onion", "Soy Sauce", "Garlic", "Oil"],
    image: "https://b.zmtcdn.com/data/dish_photos/285/410ed19a7fa964a0dcf0bbc564833285.jpeg?output-format=webp",
    rate: 220,
    minute: 20
  },
  {
    username: "Aakash",
    recipeName: "Paneer Tikka",
    description: "Spiced paneer cubes grilled to perfection, served with chutney.",
    quantity: 4,
    ingredients: ["Paneer", "Yogurt", "Red chili powder", "Garam masala", "Lemon juice", "Capsicum", "Onion"],
    image: "https://b.zmtcdn.com/data/dish_photos/446/edf794bb86694ff1a5cdc8e4308f2446.jpg?output-format=webp",
    rate: 350,
    minute: 30
  },
  {
    username: "Meera",
    recipeName: "Chicken Curry",
    description: "Tender chicken cooked in a spicy, flavorful curry.",
    quantity: 5,
    ingredients: ["Chicken", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Oil", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/dish_photos/a21/2c2778b9df1ff243dd2c416c9e242a21.jpeg",
    rate: 420,
    minute: 35
  },
  {
    username: "Rahul",
    recipeName: "Mushroom Masala",
    description: "Mushrooms cooked in rich, spicy gravy with aromatic spices.",
    quantity: 3,
    ingredients: ["Mushroom", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Cream", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/dish_photos/c09/1be1a8f12c85d73de1b2228e08c05c09.jpg?output-format=webp",
    rate: 300,
    minute: 30
  },
  {
    username: "Aman",
    recipeName: "Spicy Chicken Biryani",
    description: "A delicious and aromatic Indian dish made with marinated chicken, rice, and a blend of flavorful spices.",
    quantity: 4,
    ingredients: ["Basmati rice", "Chicken", "Onion", "Tomato", "Yogurt", "Garlic", "Ginger", "Spices", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/pictures/chains/3/307893/f606e2cc225f298f77b0bf9673e96dbe_featured_v2.jpg?output-format=webp",
    rate: 450,
    minute: 40
  },
  {
    username: "Chef Rahul",
    recipeName: "Butter Chicken",
    description: "A rich and creamy tomato and butter gravy with tender pieces of tandoor-cooked chicken.",
    quantity: 3,
    ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Garlic", "Ginger", "Spices", "Coriander leaves"],
    image: "https://b.zmtcdn.com/data/dish_photos/e32/b3770617b65fbf441ab4092e1d278e32.jpg?output-format=webp",
    rate: 500,
    minute: 35
  },
];

module.exports = recipeData;
