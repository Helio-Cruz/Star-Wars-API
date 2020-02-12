const mongoose = require( 'mongoose' );

const characterSchema = mongoose.Schema({

  //  next:String,
  //  previous: String,
        nom: {
           type: String
        },
        taille:{
            type: String       
        }  
});

module.exports = mongoose.model('Character', characterSchema);