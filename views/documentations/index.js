module.exports = {
    woopsIForgotToDocumentAllMyEndpoints: false, // I have changed this
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/giants415/express-personal-api/blob/master/README.md", // I have changed this
    baseUrl: "https://evening-tundra-69507.herokuapp.com/", // I have changed this
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // Sticking w/ this for the moment
      {method: 'GET', path: '/api/shows', description: 'See all of the shows'},
      {method: "POST", path: "/api/shows", description: "Where shows will be updated"},
      {method: 'DELETE', path: '/api/shows/:id', description: 'Removes shows from both DB and frontend'} // I have changed this
    ]
  }
