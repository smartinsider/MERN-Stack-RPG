const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const itemModule = require("./routes/api/items");
const locationModule = require("./routes/api/location");
const getUserModule = require("./routes/api/getuser");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport", passport);

// Items
app.post("/api/items/giveItem", itemModule.giveItem);

//Location
app.post("/api/location/setLocation", locationModule.setLocation);

// Routes
app.use("/api/users", users);
app.get("/api/getUser", getUserModule.getUser);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () =>
  console.log(`Server is up and running on port ${port} !`)
);
