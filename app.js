const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());
app.set('port', 3000);

let rutas = require('./utils/rutas.utils');

app.use(rutas);

module.exports = app;