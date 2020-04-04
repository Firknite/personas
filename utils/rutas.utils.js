const express = require('express');
let persona = require('../controller/persona.controller');

let router = express.Router();

router.use('/persona', persona);

module.exports = router;
