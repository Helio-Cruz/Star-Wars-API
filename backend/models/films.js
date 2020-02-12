const mongoose = require( 'mongoose' );

const filmSchema = mongoose.Schema({

         titre: {
            type: String,
            required: true
        },
        sortie: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        episode: {
            type: String,
            
        },
        description: {
            type: String,
            required: true
        } 
    
    
});

module.exports = mongoose.model('Film', filmSchema);