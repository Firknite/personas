const supertest = require("supertest");
const server = supertest.agent(`http://localhost:3000`);
const should = require("should");

describe("Pruebas de e2e", () => {

  describe("Pruebas de API de personas", () => {

    it("Crea contacto", (done) => {
        server
        .post("/persona")
        .set('Content-Type', 'application/json')
        .send({
            "persona": {
                "nombre": "Juanito",
                "edad": 4
            }
        })
        .end((err, res) => {
          res.statusCode.should.equal(201);
          res.body.datos.exito.should.equal(true)
          done();
        });
    });

    it("Obtiene personas", (done) => {
      server
        .get("/persona")
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          res.statusCode.should.equal(200);
          done();
        });
    });

  });

})

/**
 * Otros metodos de should para la evaluacion de respuestas
 */
//res.body.code.should.equal(200);
//res.body.length.should.be.exactly(0)
//res.text.should.equal('texto cualquiera')
//res.statusCode.should.equal(200);