const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
 const bodyParser = require('body-parser');
// const passport = require('passport');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user' );


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

// const app = require('./models/users');

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

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// })

// app.use((req, res, next) => {
//   res.send('Hello from express');
//   next();
// })
 
app.use(bodyParser.json())
app.use('/api/user', userRoutes);

module.exports = app;

