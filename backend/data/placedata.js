const placesData = [
  {
    name: "The Mandi Chowk - Biryani Kitchen",
    description: "Authentic Arabian and Mughlai dishes with a focus on Mandi and Biryani.",
    images: [
      "https://b.zmtcdn.com/data/pictures/1/19495371/87eaef59996ca008a519054014accbaa_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/5/21848925/87268dfef842dac2f3b2445753e90e8d_featured_v2.jpg?output-format=webp"
    ],
    cuisines: ["Mandi", "Biryani", "Arabian", "Mughlai", "Seafood", "Kebab", "Shawarma", "North Indian"],
    address: "Premises 3/90, 1st and 2nd Floor, Block P, Connaught Place, New Delhi",
    region: "Delhi NCR",
    popularCities: ["New Delhi", "Gurugram", "Noida"],
    ratings: { dining: 4.3, delivery: 4.3, totalReviews: 1237 },
    averageRating: 4.3,
    price: 1500,
    priceRange: "₹1500 per person",
    category: "Restaurant"
  },
  {
    name: "Biryani Blues",
    description: "Famous for Hyderabadi biryani and kebabs with rich spices.",
    images: [
      "https://b.zmtcdn.com/data/pictures/6/19129306/33cab35b72c7bfd1d1641ce440bb068f_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/1/19495371/87eaef59996ca008a519054014accbaa_featured_v2.jpg"
    ],
    cuisines: ["Hyderabadi", "Biryani", "North Indian"],
    address: "Connaught Place, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Gurugram", "Noida"],
    ratings: { dining: 4.2, delivery: 4.4, totalReviews: 982 },
    averageRating: 4.3,
    price: 1500,
    priceRange: "₹1500 per person",
    category: "Restaurant"
  },
  {
    name: "Karim’s",
    description: "Historic eatery serving Mughlai cuisine since 1913.",
    images: [
      "https://b.zmtcdn.com/data/pictures/5/21848925/87268dfef842dac2f3b2445753e90e8d_featured_v2.jpg?output-format=webp",
      "https://b.zmtcdn.com/data/pictures/7/18418277/20b12b311d6bdec919a8a1f5796fd44d_featured_v2.jpg"
    ],
    cuisines: ["Mughlai", "North Indian", "Kebab"],
    address: "Jama Masjid, Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Lucknow"],
    ratings: { dining: 4.4, delivery: 4.2, totalReviews: 1450 },
    averageRating: 4.3,
    price: 1800,
    priceRange: "₹1800 per person",
    category: "Restaurant"
  },
  {
    name: "Barbeque Nation",
    description: "Buffet and live grill with a variety of veg and non-veg starters.",
    images: [
      "https://b.zmtcdn.com/data/pictures/6/20529116/e490f3f36511b032662db78bd5d26b94_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/8/20448098/4106728f52a1a6c3770f3835c098b885_featured_v2.jpg"
    ],
    cuisines: ["BBQ", "North Indian", "Grill", "Desserts"],
    address: "Rajouri Garden, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Mumbai", "Bangalore"],
    ratings: { dining: 4.5, delivery: 4.3, totalReviews: 1750 },
    averageRating: 4.4,
    price: 2000,
    priceRange: "₹2000 per person",
    category: "Restaurant"
  },
  {
    name: "Al-Bake Shawarma",
    description: "Famous for authentic Lebanese-style Shawarma rolls.",
    images: [
      "https://b.zmtcdn.com/data/pictures/2/18208892/08ac5d8f000f429eaf5f9780af647a8c_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/0/21513480/c10f2e7b66c83879e2af89bd0a0c7b7a_featured_v2.jpg"
    ],
    cuisines: ["Lebanese", "Shawarma", "Fast Food"],
    address: "New Friends Colony, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Gurugram"],
    ratings: { dining: 4.1, delivery: 4.0, totalReviews: 850 },
    averageRating: 4.1,
    price: 1500,
    priceRange: "₹1500 per person",
    category: "Restaurant"
  },
  {
    name: "Gulati Restaurant",
    description: "Iconic North Indian restaurant serving butter chicken and kebabs.",
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/1/4751/6571354415b0cc7ade3dbb9b7cc0196b_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/8/18238278/8a78794b498468ce663b76c1d2cd8159_featured_v2.jpg"
    ],
    cuisines: ["North Indian", "Mughlai", "Tandoor"],
    address: "Pandara Road Market, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi"],
    ratings: { dining: 4.6, delivery: 4.4, totalReviews: 2030 },
    averageRating: 4.5,
    price: 2200,
    priceRange: "₹2200 per person",
    category: "Restaurant"
  },
  {
    name: "Bikanervala",
    description: "Pure vegetarian chain offering sweets, snacks, and Indian thalis.",
    images: [
      "https://b.zmtcdn.com/data/pictures/3/20562173/5b99423fa7f26cf55d81315402f1319b_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/8/20518558/fa893e95081419a4b730a5c17f2d2ef9_featured_v2.jpg"
    ],
    cuisines: ["Indian", "Street Food", "Desserts"],
    address: "Karol Bagh, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Noida", "Jaipur"],
    ratings: { dining: 4.0, delivery: 4.2, totalReviews: 950 },
    averageRating: 4.1,
    price: 1200,
    priceRange: "₹1200 per person",
    category: "Restaurant"
  },
  {
    name: "PizzaExpress",
    description: "Authentic Italian pizzas and pastas made fresh with classic recipes.",
    images: [
      "https://b.zmtcdn.com/data/pictures/0/19025880/b069d49e34a5e0472e2c7c2659dcb3c5_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/7/18261157/398f217d92e90698a4d7953cecfd39ff_featured_v2.jpg"
    ],
    cuisines: ["Italian", "Pizza", "Pasta"],
    address: "CyberHub, Gurugram",
    region: "Delhi NCR",
    popularCities: ["Gurugram", "Delhi"],
    ratings: { dining: 4.4, delivery: 4.1, totalReviews: 820 },
    averageRating: 4.3,
    price: 1800,
    priceRange: "₹1800 per person",
    category: "Restaurant"
  },
  {
    name: "Social",
    description: "Trendy café and workspace serving global comfort food and cocktails.",
    images: [
      "https://b.zmtcdn.com/data/pictures/2/19165382/3befefd890385c4ad5d4bb6ed400c40d_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/4/19042004/015ec9fdb5d531f19352a5ccfdcfd39e_featured_v2.jpg"
    ],
    cuisines: ["Continental", "Fast Food", "Drinks"],
    address: "Hauz Khas Village, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Mumbai", "Bangalore"],
    ratings: { dining: 4.5, delivery: 4.2, totalReviews: 1650 },
    averageRating: 4.4,
    price: 2000,
    priceRange: "₹2000 per person",
    category: "Cafe"
  },
  {
    name: "Indian Accent",
    description: "Fine dining experience blending Indian flavors with global techniques.",
    images: [
      "https://b.zmtcdn.com/data/pictures/2/20563412/e038000124113d65d2ae949ba476e84c_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20589933/a9ac294bcc0b52ab5de3ca608dc63b40_featured_v2.jpg"
    ],
    cuisines: ["Modern Indian", "Fine Dining"],
    address: "The Lodhi, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Mumbai"],
    ratings: { dining: 4.8, delivery: 4.6, totalReviews: 980 },
    averageRating: 4.7,
    price: 5000,
    priceRange: "₹5000 per person",
    category: "Fine Dining"
  },
  {
    name: "Andhra Bhavan",
    description: "Government canteen known for authentic South Indian Andhra meals.",
    images: [
      "https://b.zmtcdn.com/data/pictures/6/20023766/70717f2464b638cfb23001b5aa9fea30_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/1/312601/5ae165fe31bfc309916514906ae1215e_featured_v2.jpg"
    ],
    cuisines: ["South Indian", "Andhra"],
    address: "Ashoka Road, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi"],
    ratings: { dining: 4.3, delivery: 4.1, totalReviews: 720 },
    averageRating: 4.2,
    price: 300,
    priceRange: "₹300 per person",
    category: "Restaurant"
  },
  {
    name: "Cafe Delhi Heights",
    description: "Casual café offering global cuisine and creative beverages.",
    images: [
      "https://b.zmtcdn.com/data/pictures/4/3124/f95dd663262b167cf7b172e731f4a6b4_featured_v2.jpg",
      "https://b.zmtcdn.com/data/pictures/6/19283556/f9226829c47697ea6444f79756f2cd6d_featured_v2.jpg"
    ],
    cuisines: ["Continental", "Fast Food", "Beverages"],
    address: "DLF Promenade, Vasant Kunj, New Delhi",
    region: "Delhi NCR",
    popularCities: ["Delhi", "Gurugram"],
    ratings: { dining: 4.4, delivery: 4.2, totalReviews: 1100 },
    averageRating: 4.3,
    price: 1000,
    priceRange: "₹1000 per person",
    category: "Cafe"
  }
];

module.exports = placesData;
