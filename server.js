const express = require("express");
const session = require('express-session');
const passport = require('./config/passport');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const seed = require('./db/seeds.js');

// sync models with db
let force = false;
console.log(process.env.NODE_ENV)
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  force = true;
}

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require('./routes/index.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: force}).then(function() {
  if(force) seed();
  
  // Send every request to the React app
  // Define any API routes before this runs
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
