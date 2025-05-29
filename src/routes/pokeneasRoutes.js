const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokeneaController');

router.get('/info', controller.getBasicInfo);
router.get('/imagen', controller.getImageAndPhrase);
router.get('/:id', controller.getPokeneaById); 

module.exports = router;
