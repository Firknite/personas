const formatoRespuesta = (exitoP, status, data, mensajeP = true, res) => {
	var datos = {
		exito: exitoP,
		mensaje: mensajeP == true ? 'Ejecutado correctamente' : mensajeP,
		resultado: data,
	};
	return res.status(status).json({ datos });
};

module.exports = { formatoRespuesta };
