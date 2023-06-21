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

//serves static files from client/src/public. Allows server to server static files located in /public directory of client side. These files can be accessed directly by the client without going through extra routes or middleware
app.use(express.static(path.join(__dirname, '../../client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
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

//api routes in server will handle requests from client side
app.use("/api", apiRoutes);

//server will serve static files and direct all other routes to client side app
//serve the built and optimized version of client side app.
app.use(express.static(path.join(__dirname, "../../client/build")));

//ensures client side is built and deployed
//handles all other routes that are not explicitly defined.
//when req is made to route that's not matched on server, this will catch the request and serve the index.html from client/build directory.
//usually used SPA where client side app handles routing internally (react router).
//servering index.html for unmatches routes lets client side handle routing/rending of appropriate components
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on, you better catch it!`);
});

export default app;
