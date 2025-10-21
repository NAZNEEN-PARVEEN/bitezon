const sweetsData = [
  {
    name: "Fabelle Chocolate",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/pictures/7/22102737/9d626f74e11eec248db5d15abf10da0e_o2_featured_v2.jpg",
      "https://b.zmtcdn.com/data/dish_photos/25a/067095f16b2fe98f676ada279438e25a.jpeg"
    ],
    price: 250,
    minute: 15
  },
  {
    name: "Fabelle Chocolate",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/pictures/8/310448/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg?output-format=webp",
      "https://b.zmtcdn.com/data/dish_photos/25a/067095f16b2fe98f676ada279438e25a.jpeg"
    ],
    price: 270,
    minute: 20
  },
  {
    name: "Fabelle Chocolate",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/4cc/2b2ebfd216bb9e51b52df64cf1acf4cc.jpeg",
      "https://b.zmtcdn.com/data/dish_photos/25a/067095f16b2fe98f676ada279438e25a.jpeg"
    ],
    price: 300,
    minute: 25
  },
  {
    name: "Sugar Daddy Cafe",
    overallRating: 3.9,
    dining: { rating: 4.0, reviews: 8 },
    delivery: { rating: 3.9, reviews: 13 },
    cuisines: ["Chinese", "Pizza", "Burger", "Pancake", "Waffle", "Fast Food", "Ice Cream", "Beverages"],
    address: "Shop 25, Bada Bazar, Rajinder Nagar, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/00a/4c537df076b05153663a57240b76100a.jpeg?output-format=webp",
      "https://b.zmtcdn.com/data/dish_photos/453/15d24a0afba7dd8ad7c9efdbbc89f453.jpg?output-format=webp"
    ],
    price: 150,
    minute: 10
  },
  {
    name: "Sweet Tooth Paradise",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/951/3403bcdf09545b8070c20b15b70ed951.png?output-format=webp",
      "https://b.zmtcdn.com/data/dish_photos/0e5/280b8875969cedfb1d48eeb39ab870e5.jpeg?output-format=webp"
    ],
    price: 220,
    minute: 15
  },
  {
    name: "The Dessert House",
    overallRating: 4.3,
    dining: { rating: 4.4, reviews: 18 },
    delivery: { rating: 4.2, reviews: 27 },
    cuisines: ["Bakery", "Pastry", "Waffle", "Coffee"],
    address: "Shop 8, Sector 18, Noida",
    images: [
      "https://b.zmtcdn.com/data/pictures/2/21890812/d81a5705a9f6f7eaf6e2826b42ee60ab_o2_featured_v2.jpg",
      "https://b.zmtcdn.com/data/dish_photos/28f/c4b280b3a3216096d6c0f5dc4ab9228f.jpg"
    ],
    price: 200,
    minute: 12
  },
  {
    name: "Gulab Jamun Junction",
    overallRating: 4.1,
    dining: { rating: 4.2, reviews: 12 },
    delivery: { rating: 4.0, reviews: 22 },
    cuisines: ["Indian Sweets", "Snacks", "Beverages"],
    address: "Street 4, Lajpat Nagar, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/927/3480d2b164cd3ebea54c08198ef8e927.jpg",
      "https://b.zmtcdn.com/data/dish_photos/5a6/570aa466d8bd34680d54c055aafc95a6.jpeg"
    ],
    price: 120,
    minute: 10
  },
  {
    name: "Mithai Mahal",
    overallRating: 4.7,
    dining: { rating: 4.8, reviews: 35 },
    delivery: { rating: 4.6, reviews: 41 },
    cuisines: ["Indian Sweets", "Snacks", "Chaat"],
    address: "Khan Market, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/e01/c2365ded40ddaac6656f2fb3734bce01.jpeg",
      "https://b.zmtcdn.com/data/pictures/4/18855284/c421fe23ddbb73951e811fec1bfb8499_featured_v2.jpg"
    ],
    price: 250,
    minute: 18
  },
  {
    name: "Brown Sugar Bliss",
    overallRating: 4.0,
    dining: { rating: 4.2, reviews: 19 },
    delivery: { rating: 3.9, reviews: 25 },
    cuisines: ["Desserts", "Cakes", "Coffee"],
    address: "Mall Road, Shimla",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/ca4/6d2a7db924021b81322f4afc4dc04ca4.jpg",
      "https://b.zmtcdn.com/data/dish_photos/24d/1d81de07063be33a8e3e390924a5f24d.png"
    ],
    price: 180,
    minute: 14
  },
  {
    name: "Kesar Delights",
    overallRating: 4.4,
    dining: { rating: 4.5, reviews: 30 },
    delivery: { rating: 4.3, reviews: 33 },
    cuisines: ["Mithai", "Desserts", "Beverages"],
    address: "Sector 10, Chandigarh",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/e92/24c45b23515272e6b81608840972be92.png",
      "https://b.zmtcdn.com/data/dish_photos/db9/d2b4c03a7f823be62dcf136aca5c6db9.jpeg"
    ],
    price: 230,
    minute: 16
  },
  {
    name: "Bite of Heaven",
    overallRating: 4.6,
    dining: { rating: 4.7, reviews: 40 },
    delivery: { rating: 4.5, reviews: 50 },
    cuisines: ["Cakes", "Pastries", "Desserts"],
    address: "Sector 22, Gurgaon",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/6cf/388bf5ed3fa93f63cc6b901466d016cf.jpeg",
      "https://b.zmtcdn.com/data/pictures/4/21793624/4a6762073fecbb2344bf4f4ed5764505_o2_featured_v2.jpg"
    ],
    price: 280,
    minute: 20
  },
  {
    name: "Rajbhog Sweets",
    overallRating: 4.2,
    dining: { rating: 4.3, reviews: 28 },
    delivery: { rating: 4.1, reviews: 37 },
    cuisines: ["Bengali Sweets", "Snacks", "Namkeen"],
    address: "Chandni Chowk, Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/7ef/dd73f13610a03e9eafc033e75481b7ef.jpg?output-format=webp",
      "https://b.zmtcdn.com/data/dish_photos/0e0/26daf950daf4c18f297f67e563c8f0e0.jpg?output-format=webp"
    ],
    price: 200,
    minute: 15
  },
  {
    name: "Creamy Cravings",
    overallRating: 4.8,
    dining: { rating: 4.9, reviews: 45 },
    delivery: { rating: 4.7, reviews: 60 },
    cuisines: ["Ice Cream", "Shakes", "Desserts"],
    address: "DLF Phase 3, Gurgaon",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/826/1558302fd609621dba3c2f6a1a681826.jpeg",
      "https://b.zmtcdn.com/data/pictures/5/21887985/53e82882c8ee663f3e43d600734067d4_o2_featured_v2.jpg"
    ],
    price: 270,
    minute: 22
  },
  {
    name: "Rasgulla Realm",
    overallRating: 4.3,
    dining: { rating: 4.4, reviews: 20 },
    delivery: { rating: 4.2, reviews: 32 },
    cuisines: ["Bengali Sweets", "Snacks"],
    address: "Park Street, Kolkata",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/145/b8cf6087b33550d1139001c4482bd145.jpeg",
      "https://b.zmtcdn.com/data/dish_photos/8f7/6301b12f21c6cb148916beca9697f8f7.png"
    ],
    price: 210,
    minute: 18
  },
  {
    name: "Shahi Mithas",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 29 },
    delivery: { rating: 4.4, reviews: 35 },
    cuisines: ["Indian Sweets", "Snacks", "Chaat"],
    address: "Model Town, Ludhiana",
    images: [
      "https://b.zmtcdn.com/data/pictures/6/22120916/ebdff103fb325dc6978e12d2cece5576_o2_featured_v2.jpg",
      "https://b.zmtcdn.com/data/dish_photos/306/0b320be20c01ff74934e56f97894a306.jpg"
    ],
    price: 240,
    minute: 17
  },
  {
    name: "Sweet Donuts",
    overallRating: 4.5,
    dining: { rating: 4.1, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/4d0/809d88055af8fcaf3083d3d1684764d0.jpg",
      "https://b.zmtcdn.com/data/dish_photos/0e5/280b8875969cedfb1d48eeb39ab870e5.jpeg?output-format=webp"
    ],
    price: 180,
    minute: 14
  },
  {
    name: "Sweet Authentique Bites",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/pictures/3/311093/36266b3468bb9dc4912e594f753f2771_featured_v2.jpg",
      "https://b.zmtcdn.com/data/dish_photos/0e5/280b8875969cedfb1d48eeb39ab870e5.jpeg?output-format=webp"
    ],
    price: 260,
    minute: 20
  },
  {
    name: "Caara At Ogaan",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 24 },
    delivery: { rating: 4.4, reviews: 38 },
    cuisines: ["Desserts", "Ice Cream", "Beverages"],
    address: "Plot 12, Connaught Place, New Delhi",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/de9/599477f4f90656d6f547070daef12de9.jpeg",
      "https://b.zmtcdn.com/data/dish_photos/ab7/0171f2b383e9166e13fa02bce78a6ab7.jpg"
    ],
    price: 280,
    minute: 22
  },{
    name: "Shahi Mithas",
    overallRating: 4.5,
    dining: { rating: 4.6, reviews: 29 },
    delivery: { rating: 4.4, reviews: 35 },
    cuisines: ["Indian Sweets", "Snacks", "Chaat"],
    address: "Model Town, Ludhiana",
    images: [
      "https://b.zmtcdn.com/data/pictures/6/22120916/ebdff103fb325dc6978e12d2cece5576_o2_featured_v2.jpg",
      "https://b.zmtcdn.com/data/dish_photos/306/0b320be20c01ff74934e56f97894a306.jpg"
    ],
    price: 240,
    minute: 17
  },
   {
    name: "Kesar Delights",
    overallRating: 4.4,
    dining: { rating: 4.5, reviews: 30 },
    delivery: { rating: 4.3, reviews: 33 },
    cuisines: ["Mithai", "Desserts", "Beverages"],
    address: "Sector 10, Chandigarh",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/e92/24c45b23515272e6b81608840972be92.png",
      "https://b.zmtcdn.com/data/dish_photos/db9/d2b4c03a7f823be62dcf136aca5c6db9.jpeg"
    ],
    price: 230,
    minute: 16
  },
  {
    name: "Bite of Heaven",
    overallRating: 4.6,
    dining: { rating: 4.7, reviews: 40 },
    delivery: { rating: 4.5, reviews: 50 },
    cuisines: ["Cakes", "Pastries", "Desserts"],
    address: "Sector 22, Gurgaon",
    images: [
      "https://b.zmtcdn.com/data/dish_photos/6cf/388bf5ed3fa93f63cc6b901466d016cf.jpeg",
      "https://b.zmtcdn.com/data/pictures/4/21793624/4a6762073fecbb2344bf4f4ed5764505_o2_featured_v2.jpg"
    ],
    price: 280,
    minute: 20
  },
];

module.exports = sweetsData;
