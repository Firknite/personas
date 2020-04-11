const request = require("supertest");
const app = require("../app");

describe("Test de api", () => {
    test("prueba de metodo index principal", done => {
        request(app)
            .get("/")
            .set('Content-Type', 'application/json')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test('Lista personas', done => {
        request(app)
            .get('/persona')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    });

    test('Agregar persona', done => {
        request(app)
            .post('/persona')
            .send({
                "persona": {
                    "nombre": "Juanito",
                    "edad": 4
                }
            })
            .set('Content-Type', 'application/json')
            .then(response => {
                expect(response.statusCode).toBe(201);
                done();
            })
    });
});