$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // on page load, grab quote data from the server
    getQuotes();

    // jQuery the button
    console.log('submitBtn', $('#submitBtn'));
    $('#submitBtn').on('click', addQuote);
}

function addQuote() {
    console.log('inside addQuote');

    // grab our quote data from the DOM inputs
    let newQuote = {
        text: $('#quoteInput').val(),
        author: $('#authorInput').val()
    }
    console.log('newQuote is', newQuote);
    
    // POST our quote to /quotes
    $.ajax({
        method: 'POST',
        url: '/quotes',
        //send our quote data (object) to the server
        data: newQuote,
    }).then((response) => {
        console.log('POST /quotes', response);

        // refresh data from the server
        // by calling the GET /quotes endpoint
        // and re-rendering the DOM
        //
        // make sure to do this AFTER the POST request is complete
        // (in our .then())
        getQuotes();
    }).catch((error) => {
        console.log('POST /quotes failed!', error);
        // render the error to the DOM
        $('body').append(`
            <h2>
                Failed to save quote! 
                Check your data, before you wreck your data
            </h2>
        `);
        // or if we're feeling lazy, use a quick alert
        // alert('Uh oh... something bad happened');
    });
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
        quoteList.empty();
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