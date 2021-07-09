//dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//initialise the app
const app = express();
dotenv.config();
app.use(express.json());

//connect to the database
mongoose
   .connect('mongodb://localhost/rest-api', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('you app is successfully connected to the database'))
   .catch((error) => console.log(error));
