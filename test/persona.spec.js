// mis funciones basicas de jest

// function sum(a, b) {
// 	return a + b;
// }

// test('test para funcion suma', () => {
// 	expect(sum(1, 2)).toBe(3);
// });

const { listarPersonas } = require('../models/persona.model');

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
