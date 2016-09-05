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

var db = require('./models');

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

//route
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  var documents = require('./views/documentations');
  res.json(documents);
});

//get profile info, eventually move this to a separate file
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

//get all shows
app.get('/api/shows', function(req, res) {
  db.Show.find()
    .exec(function(err, shows) {
      if (err) {return console.log("index error: "+ err); }
    res.json(shows);
  });
});

//create a new show
app.post('/api/shows', function(req, res) {
  var newShow = new db.Show({
    title: req.body.title,
    numSeasons: req.body.numSeasons,
    description: req.body.description,
    reasonItsGood: req.body.reasonItsGood,
    representativeImage: req.body.representativeImage
  });
      newShow.save(function(err, show){
        if (err) {
          return console.log("save error: " + err);
        } else {
        console.log("saved ", show.title);
        res.json(show);
        }
      });
});

//delete a currently listed show
app.delete('/api/shows/:id', function (req, res) {
  console.log('you want to delete ', req.params);
  var showId = req.params.id;
  db.Show.findOneAndRemove({ _id: showId }, function (err, deleteShow) {
    res.json(deleteShow);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
