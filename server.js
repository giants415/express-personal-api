// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // I have changed this
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/giants415/express-personal-api/blob/master/README.md", // I have changed this
    baseUrl: "https://evening-tundra-69507.herokuapp.com/", // I have changed this
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // Sticking w/ this for the moment
      {method: "POST", path: "/api/shows", description: "Wheres shows will be updated"}, // I have changed this
    ]
  })
});

app.get('/api/profile', function(req, res) {
  res.json({
    name: 'Andrew Vinocur',
    currentCity: 'San Francisco',
    githubLink: 'https://github.com/giants415',
    githubProfileImage: 'To be added',
    personalSiteLink: 'https://giants415.github.io/',
    pets: [{name: 'Mark Sanchez', type: 'Cat', breed: 'Prototypical Orange Tabby'}]
  })
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
