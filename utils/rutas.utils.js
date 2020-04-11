const express = require('express');
let persona = require('../controller/persona.controller');
let index = require('../controller/index.controller');

let router = express.Router();

router.use('/', index)

router.use('/persona', persona);

module.exports = router;
