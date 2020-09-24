const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe("services - movies", function() {

    const MovieServices = proxyquire('../service/movies', {
        '../lib/mongo' : MongoLibMock
    });

    const moviesServices = new MovieServices();

    describe("when getMovies method is called", async function() {
        it('should call the getAll MongoLib method', async function() {
            await moviesServices.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });
        it('should return an array of movies', async function() {
            const result = await moviesServices.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    });

});