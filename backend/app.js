const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user' );

const filmRoutes = require('./routes/films' );

const characterRoutes = require('./routes/characters');

const app = express();

mongoose
.connect(
  'mongodb+srv://helio:120688@cluster0-w7t2v.mongodb.net/test'
  )
.then(() => {
  console.log('Connected to database');
})
.catch(() => {
  console.log('Connection failed');
});

 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
 
 
app.use(bodyParser.json())

/*users*/
app.use('/api/user', userRoutes);

/*films */
app.use('/films', filmRoutes);

/*characters*/
app.use('/characters', characterRoutes);

module.exports = app;

