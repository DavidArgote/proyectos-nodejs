const assert = require("assert");
const proxyquire = require("proxyquire");

const { moviesMock, MovieServiceMock } = require("../utils/mocks/movies.js");
const testSever = require("../utils/testServer");

describe("routes - movies", function () {
  const route = proxyquire("../routes/movies", {
    "../service/movies": MovieServiceMock
  });

  const request = testSever(route);

  describe("GET /movies", function () {
    it("should respond with status 200", function (done) {
      request.get("/api/movies").expect(200, done);
    });

    it('should respond with the list of movies', function(done){
        request.get('/api/movies').end((err, res) => {
            assert.deepEqual(res.body, {
                data: moviesMock,
                message: 'Movies listed'
            });
            done();
        });
    });
  });
});
