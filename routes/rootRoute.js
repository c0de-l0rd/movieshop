const exppress = require("express");
const movieRoute = require("/home/c0de-l0rd/Projects/express/project1/routes/movies/chooseMovie.js");
const {Router} = exppress;


router = Router();

router.use(movieRoute);

module.exports = router;
