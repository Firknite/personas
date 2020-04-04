const express = require('express');
const personaModel = require('../models/persona.model');
const { formatoRespuesta } = require('../utils/general.utils');

let rutas = express.Router();

rutas.get('/:id?', (req, res) => {
	return formatoRespuesta(
		true,
		200,
		personaModel.listarPersonas(req.params.id),
		true,
		res
	);
});

rutas.post('/', (req, res) => {
    return formatoRespuesta(
		true,
		200,
		personaModel.agregarPersonas(req.body.persona),
		true,
		res
	);
});

module.exports = rutas;
