.

🍽️ bitezon: The Ultimate Food Delivery and Custom Chat Platform
bitezon is a dynamic food discovery and ordering platform inspired by services like Zomato, enhanced with an innovative, custom AI Chatbot feature for personalized user interaction and support.


✨ Key Features & Functionality
Food Discovery & Ordering: Core functionalities for browsing food items, viewing details, and managing the checkout process.

Custom AI Chatbot: An integrated conversational interface (using the Gemini/OpenAI API logic in gemini.js) providing:

Personalized Recommendations: Get suggestions based on past orders or dietary preferences.

Interactive Support: Quick answers to FAQs, order status inquiries, and custom requests.

Database Seeding: Easy setup using dedicated seeding scripts (seedFood.js, sweeseed.js, placeseed.js) to quickly populate the database with initial menu and location data.

Modular Backend: Clean API handling for authentication, data retrieval, and chatbot interactions.

💻 Technology StackYour project uses a standard Node.js/Express backend setup:ComponentTechnology /
FileRole in the ProjectServerNode.js & Express.jsThe core runtime and web framework for the API.
DatabaseMongoDB (Implied)Used for storing food listings, place data, user accounts, and orders.
AI Integrationgemini.js (or similar)Handles the connection and logic for the AI chatbot API.
Data Setupseed*.js filesScripts used to initialize database collections with mock/demo data.
API Entryapp.jsThe main configuration and entry file for the Express server.
