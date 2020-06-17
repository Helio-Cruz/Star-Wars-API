const express = require('express');

const CharacterController = require('../controllers/characters');

const router = express.Router();

router.post('/', CharacterController.createCharacter);
router.get('/', CharacterController.listAllCharacters);

router.get('/:characterId', CharacterController.readCharacter);
router.put('/:characterId', CharacterController.updateCharacter);
router.delete('/:characterId', CharacterController.deleteCharacter);

module.exports = router;