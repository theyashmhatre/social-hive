
//  Declaring the required packages
require("dotenv").config();
const express = require("express");
const app = express();
const functions = require('firebase-functions');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Declaring routes
const authRoutes = require("./routes/auth");

// Initializing the Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Initializing Routes
app.use("/",authRoutes);





exports.api = functions.https.onRequest(app);