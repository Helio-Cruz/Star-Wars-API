
const Film = require('../models/films');

exports.createFilm = (req, res, next) => {
  const newFilm = new Film({
    titre: req.body.titre,
    sortie: req.body.sortie,
    director: req.body.director,
    episode: req.body.episode,
    description: req.body.description
  });
newFilm.save()
 .then(results => {
    res.status(201).json({
        message: 'Film creé!',
       result: results,   
     });     
})
 
.catch(err => {
   res.status(500).json({      
  message: err.message || 'Film pas creé!'   
          });
      });     
},

exports.listAllFilms = (req, res, next) => {
  Film.find({})
   .then(results => {
      res.status(201).json({
      //  message: 'Films trouvé!',
      result: results,   
   });
  })
  .catch(err => {
    res.status(500).json({      
   message: 'Films pas trouvé!'       
           });
    });
},


exports.readFilm = (req, res, next) => {
  Film.findById(req.params.filmId)
  .then(results => {
    res.status(201).json({
        message: 'Film trouvé!',
       result: results,   
     });      
})
.catch(err => {
  res.status(500).json({      
 message: 'Film Id pas trouvé'       
         });
     });  
},

exports.updateFilm = (req, res, next) => {
  Film.findOneAndUpdate(req.params.filmId, req.body, {new: true})
  .then(results => {
    res.status(201).json({
        message: 'Film misé à jour!',
       result: results,   
     });        
})
.catch(err => {
  res.status(500).json({      
 message: 'Film pas misé à jour!'        
         });
     });  
},

exports.deleteFilm = (req, res, next) => {
  Film.remove({_id: req.params.filmId})
  .then(results => {
    res.status(201).json({
        message: 'Film suprimé!',
       result: results,   
     });        
})
.catch(err => {
  res.status(500).json({      
 message: 'Film pas suprimé'       
         });
     }); 
}

