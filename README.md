### Express Setup

## starting terminal commands
npm init --yes
npm install express

npm install body-parser (later)

# exit out of server
control+c

# end all running servers
killall -9 node

# HTTP Jargon

## HTTP

"HyperText Transfer Protocol"
 - a document somewhere that a committee wrote up that describes internet functionality

 The context for all of this describes requests, responses, and how to structure them

 ## Request

 What the client (browser) sends to the server

```js
app.get('/quotes', function(req, res))
                        //  ^ req === request
```

## Response

What the server sends back to the client. This can be anything, including HTML, CSS, JS files
(static concent), or objects, arrays, etc... (dynamic content, data, JSON)

```js
app.get('/quotes', function(res, res) {
                            //  ^ res === response

    // send back JSON data (array)
    res.send(['a', 'b', 'c']);
});
```

## JSON

JavaScript Object Notation

The main format for data that's sent across the internets.

Looks like javascript objects, but with **double quotes**

```json
[
    {
        "text": "Debugging is like being the detective in a crime movie where you are also the murder",
        "author": "Filipe Fortes"
    }
]
```

## URLs / Routes / Paths

The path is a _noun_, describing what type of data we're working with.

We use these terms somewhat interchangeably.

Often we exclude the "domain" or the "host",
Like,  `/quotes'

In express:

```js
app.get('/quotes', function(req, res))
//         ^ path / route / url
```

## Method

A _verb_ that describes what the client wants to do with the data.

In HTTP, there are 4 main methods that we'll use:
    - GET: retrieve some data from the server
    - POST: send some new data to the server
    - PUT: Update some existing data on the server
    - DELETE: Delete some data from the server

```js
app.get('/quotes', function(req, res))
//  ^ our method

app.put('/quotes',...)

app.post('/quotes',...)

app.delete('/quotes',...)
```
## Body (Requests & Responses)

The body is part of the request that contains the actual data that we're passing back and forth.

## Headers (Requests & Responses)

Extra meta-data that gets sent along with your request or response.

eg.
`Content-Type: application/json`

## Status Code (Responses only)

A number that represents the status of the request

Common Status Code:
- 200 OK
- 201 Created
- 400 Bad Request - The client messed up, sent bad data, etc
- 404 Not Found - Probably the wrong url
- 500 Server Error - Probably a JS bug in your server code

## Endpoint

The whole thing that we're listening for.

Path + Method = Endpoint

```js
// our GET /quotes endpoint
app.get('/quotes', function(req, res))
```

## API

The entire server.

A bunch of endpoints = an API

In general:
"Application Programming Interface"
A way for programs to communicate with one another.
