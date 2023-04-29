const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home")

require("dotenv").config({ path: "./config/.env" });

require("./config/auth")(passport);

connectDB();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ uri: process.env.DB_STRING }),
    })
);

app.use(passport.initialize());

app.use(passport.session());

app.use(flash());

//Routes (simplified)
app.use("/", homeRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on, you better catch it!`);
});

