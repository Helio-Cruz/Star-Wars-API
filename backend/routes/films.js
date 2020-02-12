const express = require('express');

const FilmController = require('../controllers/films');

const router = express.Router();

 router.post('/films', FilmController.createFilm);
 router.get('/films', FilmController.listAllFilms);

 router.get('/films/:filmId', FilmController.readFilm);
 router.put('/films/:filmId', FilmController.updateFilm);
 router.delete('/films/:filmId', FilmController.deleteFilm);
 
module.exports = router;