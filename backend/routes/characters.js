const express = require('express');

const CharacterController = require('../controllers/characters');

const router = express.Router();

router.post('/characters', CharacterController.createCharacter);
router.get('/characters', CharacterController.listAllCharacters);

router.get('/characters/:characterId', CharacterController.readCharacter);
router.put('/characters/:characterId', CharacterController.updateCharacter);
router.delete('/characters/:characterId', CharacterController.deleteCharacter);

module.exports = router;