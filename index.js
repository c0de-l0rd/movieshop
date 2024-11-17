const express = require("express");
require("dotenv").config();
const path = require("node:path");
const mongoose = require("mongoose");
const rootRouter = require("/home/c0de-l0rd/Projects/express/project1/routes/rootRoute.js")

const app = express();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/movieshop";

    mongoose.connect(MONGO_URI).then(()=>{
        console.log("connected to mongodb")
    }).catch((error)=>{
        console.log("there was an error conecting to monngodb", error);
    })

    app.use(express.json());  // Now req.body will be parsed properly
    app.use('/public', express.static(path.join(__dirname, 'public'))); // Assuming your static files are in the "public" folder
    app.use(rootRouter);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));});

const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT isn't set
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
