// Load environment variables from the .env file
require('dotenv').config();


// Import required modules
const express = require('express');
const cors = require('cors');

// Import route modules
const movieRouter = require("./routes/movieRoutes");

// Import database connection function
const connectDB = require('./db/db');

// Define the server port (use environment variable or default to 4000)
const PORT = process.env.PORT || 4001;

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

// ===== Middleware Setup =====

// Enable Cross-Origin Resource Sharing (CORS)
// This allows your API to be accessed by clients from different domains
app.use(cors());

// Parse incoming JSON requests and make the data available in req.body
app.use(express.json());

// ===== API Routes =====
// All movies-related routes
app.use(movieRouter);


// Simple test route
app.get("/", (req, res) => {
    res.json({ message: "WS-5 Movie API running, add /api/movies to see all the movies" });
});

// Start listening for incoming requests on the specified port
app.listen(PORT, () =>
  console.log(`API is running in http://localhost:${process.env.NODE_ENV} mode on port ${PORT}`)
);
