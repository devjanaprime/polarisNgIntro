// requires
const express = require( 'express' );
const router = express.Router();

// routes
router.get( '/', ( req, res )=>{
    console.log( 'GET hit' );
    res.send( 'bleet' );
}) //end GET

// exports
module.exports = router;