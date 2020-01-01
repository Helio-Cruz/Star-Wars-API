const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendWelcomeEmail } = require('../emails/account');

const User = require("../models/users");

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        // password: req.body.password  // never store password like this
        password: hash
     });  
     user.save()
     .then(result => {
        sendWelcomeEmail(user.email, user.name)
         res.status(201).json({
             message: 'User created!',
             result: result,         
         });
       
     })
     .catch(err => {
         res.status(500).json({        
          message: "Invalid authentication The e-mail or password already exists!" /* afficher error message on the modal*/         
         });
      });
   });
}

exports.loginUser =  (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
        if (!result) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        const token = jwt.sign(
            { email: fetchedUser.email, userId: fetchedUser._id }, 
            'MY_SECRET', 
            { expiresIn: '1h' }
        );
        res.status(200).json({
            token: token,
            expiresIn: 3600

        });
    })
    .catch(err => {
        return res.status(401).json({
            message: "Invalid authentication credentials!"
        });
    });
}