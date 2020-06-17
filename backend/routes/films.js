const express = require('express');

const FilmController = require('../controllers/films');

const router = express.Router();

 router.post('/', FilmController.createFilm);
 router.get('/', FilmController.listAllFilms);

 router.get('/:filmId', FilmController.readFilm);
 router.put('/:filmId', FilmController.updateFilm);
 router.delete('/:filmId', FilmController.deleteFilm);
 
module.exports = router;