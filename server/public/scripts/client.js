$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // on page load, grab quote data from the server
    getQuotes();
}

function getQuotes() {
    // AJAX!!!!!
    // Make an HTTP request to our server
    // to our GET /quotes endpoint
    //
    // This calls the function in server.js
    // defined in `app.get('/quotes')`
    $.ajax({
        // tell AJAX what endpoint to hit
        // endpoint = method + url
        url: '/quotes',
        method: 'GET'
    }).then(function(response) {
        // network requests take a LONG time
        // (millisecond!). Wait for the request to
        // complete and THEN, run this function
        //
        // whatever we pass to res.send()
        // becomes the `response` argument
        console.log('GET /quotes response is', response);
        
        // render quotes w/jQuery
        let quoteList = $('#quotes');
        console.log('quotes list element', quoteList);

        // loop through the array of quotes
        for (let quote of response) {
            // render a <li> with each quote
            quoteList.append(`
                <li>
                    ${quote.text}
                    <em>-- by ${quote.author}</em>
                </li>
            `);
        }
    });
};

// function getQuotes() {
//      $.ajax({}).then(function(response){console.log()});
// };