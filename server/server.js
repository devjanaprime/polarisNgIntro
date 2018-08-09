// requries
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const movies = require( './modules/routes/movies' );

// uses
app.use( express.static( 'server/public' ) );
app.use( '/movies', movies );

// globals
const port = process.env.PORT || 5000;

// server
app.listen( port, ()=>{
    console.log( 'server up on', port );
}) // end server up