// Import Mongoose for MongoDB object modeling
const mongoose = require('mongoose');

// ===== Movie Schema =====
// Define the schema for a Movie document
const movieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true }, // Movie title is required
        year: { type: Number, required: true }, // Release year of the movie is required
        director:{type:String, require: true } , // Director of the movie is required
        rating: Number // Movie rating
    },
    { timestamps: true }
);

// Export the model to be used in other parts of the application
module.exports = mongoose.model("Movie", movieSchema);