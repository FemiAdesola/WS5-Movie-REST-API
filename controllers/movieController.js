// Import Mongoose for ObjectId validation and database operations
const mongoose = require("mongoose");

// Import the Movie model (Mongoose schema)
const Movie = require("../models/movieModel");

// ===== Controller Functions =====

// ===== GET: Retrieve All Movies =====
exports.getMovies = async (req, res) => {
  try {
    // Retrieve all movies, sorted by creation date (newest first)
    const movies = await Movie.find({}).limit(50);

    // Respond with the list of movies in JSON format
    res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

// ===== GET: Retrieve a Single Movie by ID =====
exports.getMovieBYId = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id); // Find movie by ID from request parameters
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" }); // If not found, respond with 404
    }
    res.status(200).json(movie); // Respond with the found movie
  } catch (err) {
    res.status(400).json({ error: "Invalid id" });
  }
};

// ===== POST: Create a New Movie =====
exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body); // Create a new Movie instance with request body data
    await movie.save(); // Save the new movie to the database
    res.status(201).json(movie); // Respond with the created movie
  } catch (err) {
    res.status(400).json({ error: "Failed to create movie" });
  }
};

// ===== PUT: Update an Existing Movie by ID =====
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }); // Find movie by ID and update with request body data
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" }); // If not found, respond with 404
    }
    res.status(200).json(movie); // Respond with the updated movie
  } catch (err) {
    res.status(400).json({ error: "Invalid update data" }); // Handle invalid data
  }
};

// ===== DELETE: Remove a Movie by ID =====
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id); // Find movie by ID and delete it
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" }); // If not found, respond with 404
    }
    res.status(200).json({ message: "Movie deleted successfully", id: movie._id  }); // Respond with success message
  } catch (err) {
    res.status(400).json({ error: "Invalid id" }); // Handle invalid ID format
  }
};