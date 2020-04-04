var personas = [
	{ id: 1, nombre: 'Juan', edad: 30 },
	{ id: 2, nombre: 'Maria', edad: 25 },
	{ id: 3, nombre: 'Pedro', edad: 50 },
];

const listarPersonas = (id) => {
	if (id !== undefined && id !== null) {
		const filtrado = personas.filter((persona) => persona.id == id);
		return filtrado;
	} else {
		return personas;
	}
};

const agregarPersonas = (persona) => {
	persona.id = maxId() + 1;
	personas = [...personas, persona];
	return personas;
};

const maxId = () => {
	let maxId = 0;
	personas.reduce((acc, act) => {
		if (act.id > maxId) maxId = act.id;
	}, 0);
	return maxId;
};

module.exports = { listarPersonas, agregarPersonas };
