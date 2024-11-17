const mongoose = require('mongoose');
const express = require("express");
const rentedMovies = require("/home/c0de-l0rd/Projects/express/project1/schemas/rented_movies.js");


const movieRouter = express.Router();


movieRouter.get('/api/v1/rented-movies', async (req, res)=>{
     let movies = await rentedMovies.find();
     console.log("all rented movies:",movies);
    res.send(movies);
})

movieRouter.get('/api/v1/all-movies', async (req, res)=>{
    let movies = await rentedMovies.find();
   // console.log("all rented movies:",movies);
   res.send(movies);
})

movieRouter.post('/api/v1/add-movies',  (req, res)=>{
    let movieArray = [];
     const {body} = req;
     try{
     body.forEach(async(i) => {
        let newMovie = new rentedMovies(i);
        console.log('hi',i);
        let savedMovie = await newMovie.save();
        movieArray.push(savedMovie);
     })
        }
        catch(error){
            console.log(`an error ocured`, error);
        }

     res.send(movieArray);
})

module.exports = movieRouter;