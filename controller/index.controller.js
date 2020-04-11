const express = require('express');


let rutas = express.Router();

rutas.get('/', (req, res) => {
	return res.status(200).json({
        saludo: "hola mundo!"
    })
});


module.exports = rutas;
