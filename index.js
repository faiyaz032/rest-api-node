//dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//internal imports
const userRouter = require('./routers/userRouter');
const todoRouter = require('./routers/todoRouter');
const { notFoundHandler, defaultErrorHandler } = require('./middlewares/errorHandlers');

//initialise the app
const app = express();
dotenv.config();
app.use(express.json());

//connect to the database
mongoose
   .connect('mongodb://localhost/rest-api', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('you app is successfully connected to the database'))
   .catch((error) => console.log(error));

//routers
app.use('/user', userRouter);
app.use('/todos', todoRouter);

//error handler
app.use(notFoundHandler);
app.use(defaultErrorHandler);

//start the app
app.listen(process.env.PORT, () => console.log(`App is alive in localhost:${process.env.PORT}`));
