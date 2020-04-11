const { listarPersonas, maxId, autenticar, agregarPersonas } = require('../models/persona.model');


describe('Test unitarios', () => {
	test('listar personas con id', () => {
		const esperado = [{ id: 1, nombre: 'Juan', edad: 30 }];
		const resultado = listarPersonas(1);
		expect(resultado).toStrictEqual(esperado);
	});

	test('listar personas', () => {
		const esperado = [
			{ id: 1, nombre: 'Juan', edad: 30 },
			{ id: 2, nombre: 'Maria', edad: 25 },
			{ id: 3, nombre: 'Pedro', edad: 50 }
		];
		const resultado = listarPersonas();
		expect(resultado).toStrictEqual(esperado);
	});

	test('Obtiene el maximo', () => {
		const esperado = 3;
		const result = maxId();
		expect(result).toBe(esperado);
	})

	test('test de autenticacion', () => {
		const esperado = true;
		const result = autenticar(101);
		expect(result).toBe(esperado);
	})

	test('test de autenticacion', () => {
		const esperado = false;
		const result = autenticar(90);
		expect(result).toBe(esperado);
	})
})


describe('Test de integracion', () => {
	test('test de agregar una persona', () => {
		const esperado = [
			{ id: 1, nombre: 'Juan', edad: 30 },
			{ id: 2, nombre: 'Maria', edad: 25 },
			{ id: 3, nombre: 'Pedro', edad: 50 },
			{ id: 4, nombre: 'Elian', edad: 7 }
		];
		const result = agregarPersonas({ nombre: 'Elian', edad: 7 });
		expect(result).toStrictEqual(esperado);
	})
})