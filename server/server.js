console.log('Look ma, my first express app!');

// load the express library
// from node_modules/express
const express = require('express');
// load the body parser module
const bodyParser = require('body-parser');

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

// setup body-parser
// tells express how to read data from the client
// either as JSON, or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

// GET /first-quote
app.get('/first-quote', function(req, res) {
    res.send(quotes[0]);
});

// POST /quotes
app.post('/quotes', function(req, res) {
    console.log('woohoo, we got a new quote');

    // body parser gives us req.body
    // which includes
    console.log('req.body', req.body);
    let newQuote = req.body;

    // validate our new quote
    if (!newQuote.author || !newQuote.text) {
        // set status code to 400 (client messed up)
        // and send back a useful message in the response body
        res.status(400).send({
            message: 'Missing a required field! Try again, and try harder.'
        });
        // end the function!
        return;
    }

    quotes.push(newQuote);
    
    // send back a created status
    res.sendStatus(201); // 201 Created
});