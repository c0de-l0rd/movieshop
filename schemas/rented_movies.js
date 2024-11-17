const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    runtime: {
        type: String,
        required: true,
    },
    releaseYear:{
        type: String,
        required: true,
    }
});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;