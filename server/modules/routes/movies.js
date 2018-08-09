// requires
const express = require( 'express' );
const router = express.Router();
let favoriteMovies = [];

// routes
router.get( '/', ( req, res )=>{
    console.log( 'GET hit' );
    res.send( favoriteMovies );
}) //end GET

router.post( '/', ( req, res )=>{
    console.log( 'POST hit:', req.body );
    favoriteMovies.push( req.body );
    res.sendStatus( 200 );
}) //end GET


// exports
module.exports = router;