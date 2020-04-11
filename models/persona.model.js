var personas = [
	{ id: 1, nombre: 'Juan', edad: 30 },
	{ id: 2, nombre: 'Maria', edad: 25 },
	{ id: 3, nombre: 'Pedro', edad: 50 }
  ];
  
  const listarPersonas = id => {
	if (id !== undefined && id !== null) {
	  const filtrado = personas.filter(persona => persona.id == id);
	  console.log({filtrado});
	  return filtrado;
	} else {
	  console.log({personas});
	  return personas;
	}
  };
  
  const agregarPersonas = persona => {
	persona.id = maxId() + 1;
	personas = [...personas, persona];
	return personas;
  };
  
  const maxId = () => {
	return Math.max(...personas.map(i => i.id))
  };
  
  const autenticar = (num) => {
	  if(num>100) {
		  return true;
	  } else {
		  return false;
	  }
  }
  
  module.exports = { listarPersonas, agregarPersonas, maxId, autenticar};