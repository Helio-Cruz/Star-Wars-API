const Character = require('../models/characters');

exports.createCharacter = (req, res, next) => {
    const newCharacter = new Character({     
        nom: req.body.nom,
        taille: req.body.taille  
    });
    newCharacter.save()
    .then(results => {
        res.status(201).json({
         //   message: 'Personage est creé!',
           // next:req.body.next,
        //   previous:req.body.previous,
            result: results,   
            
             
         });     
    })
     
    .catch(err => {
       res.status(500).json({      
       message: err.message || 'Personage n\'est pas creé'   
              });
          });
},

exports.listAllCharacters = (req, res, next) => {
    Character.find({})
    .then(results => {
        res.status(201).json({
         //   message: 'Characters trouvé!',
            result: results,
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Characters pas trouvé!'
        });
    });
},

exports.readCharacter = (req, res, next) => {
    Character.findById(req.params.characterId)
    .then(results => {
        res.status(201).json({
            message: 'Character trouvé!',
           result: results,   
         });      
    })
    .catch(err => {
      res.status(500).json({      
     message: 'Character pas trouvé!'       
             });
         });  
},

exports.updateCharacter = (req, res, next) => {
    Character.findOneAndUpdate(req.params.characterId, req.body, {new: true})
    .then(results => {
        res.status(201).json({
            message: 'Character misé à jour!',
           result: results,   
         });        
    })
    .catch(err => {
      res.status(500).json({      
     message: 'Character pas misé à jour!'        
             });
         });  
},

exports.deleteCharacter = (req, res, next) => {
    Character.remove({_id: req.params.characterId})
    .then(results => {
        res.status(201).json({
            message: 'Character suprimé!',
           result: results,   
         });        
    })
    .catch(err => {
      res.status(500).json({      
      message: 'Character pas suprimé'    
             });
         }); 
}