console.log('Look ma, my first express app!');

// load the express library
// from node_modules/express
const express = require('express');

// create our "app" (server)
const app = express();

// my data!
const quotes = [
    {
        text: 'Debugging is like being the detective in a crime movie where you are also the murderer',
        author: 'Filipe Fortes'
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

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

// our GET /quotes endpoint
// listen for requests coming to a specific
// URL: http://localhost:5000/quotes
app.get('/quotes', function(req, res) {
    console.log('ready to send back some quotes');
    console.log('request.route.path is', req.route.path);
    
    // send information back (will appear on DOM)
    // an array of quote objects
    res.send(quotes);
});