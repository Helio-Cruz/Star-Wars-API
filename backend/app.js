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
app.post('/films', filmRoutes);
app.get('/films', filmRoutes);

app.get('/films/:filmId', filmRoutes);
app.put('/films/:filmId', filmRoutes);
app.delete('/films/:filmId', filmRoutes);

/*characters*/

app.post('/characters', characterRoutes);
app.get('/characters', characterRoutes);

app.get('/characters/:characterId', characterRoutes);
app.put('/characters/:characterId', characterRoutes);
app.delete('/characters/:characterId', characterRoutes);

module.exports = app;

