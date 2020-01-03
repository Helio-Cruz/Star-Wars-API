// var crypto = require('crypto');
const mongoose = require( 'mongoose' );
// var jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: { 
      type: String,
      required: true
     }
  });


 userSchema.plugin(uniqueValidator);

 module.exports = mongoose.model('User', userSchema);