console.log('Look ma, my first express app!');

// load the express library
// from node_modules/express
const express = require('express');

// create our "app" (server)
const app = express();

// tell express where to find all
// of our "public" files
// aka "client-side" files
// aka "static assets"
app.use(express.static('./server/public'));

// listen for requests
const port = 5000;
app.listen(port, function() {
    // kind of like our onReady function
    console.log('App is up and running on localhost:5000');
});