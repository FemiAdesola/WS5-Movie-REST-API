// Import the Express framework
const express = require('express');

// Import controller functions for movie routes
const {
    getMovies,
    getMovieBYId,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');

// Create a new router instance
const router = express.Router();

// ===== Movie Routes =====

// GET: Retrieve all movies
router.get('/api/movies', getMovies);

// GET: Retrieve a single movie by ID
router.get('/api/movies/:id', getMovieBYId);

// POST: Create a new movie
router.post('/api/movies', createMovie);

// PUT: Update an existing movie by ID
router.put('/api/movies/:id', updateMovie);

// DELETE: Delete a movie by ID
router.delete('/api/movies/:id', deleteMovie);

// Export the router to be used in the main server file
module.exports = router;