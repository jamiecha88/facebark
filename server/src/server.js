import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongodb-session";
import methodOverride from "method-override";
import flash from "express-flash";
import logger from "morgan";
import connectDB from "./config/database.js";
import apiRoutes from "./src/api";
import path from "path";
import dotenv from "dotenv";

const app = express();
const store = MongoStore(session);

dotenv.config({ path: "./config/.env" });

require("./config/auth.js")(passport);

connectDB();

//serve static assets from the client/build folder
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(express.urlencoded({ extended: true }));

//middleware for parsing json requests
app.use(express.json());

app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new store({ uri: process.env.DB_STRING }),
    })
);

app.use(passport.initialize());

app.use(passport.session());

app.use(flash());

//mount your server-side routes
app.use("/api", apiRoutes); //

app.listen(process.env.PORT, () => {
    console.log(`Server is running on, you better catch it!`);
});

export default app;
