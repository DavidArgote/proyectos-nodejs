const MongoLib = require('../lib/mongo');

class MoviesService {

    constructor() {
        this.collection = 'movies';
        this.mongoDb = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && { tags : { $in: tags } };
        const movies = await this.mongoDb.getAll(this.collection, query);
        return movies || [];
    }

    async getMovie({ movieId }) {
        const movie = await this.mongoDb.get(this.collection, movieId);
        return movie || {};
    }

    async createMovie({ movie }) {
        const createMovieId = await this.mongoDb.create(this.collection, movie);
        return createMovieId;
    }
    
    async updateMovie({ movieId, movie } = {}) {
        const updateMovieId = await this.mongoDb.update(this.collection, movieId, movie);
        return updateMovieId;
    }

    async deleteMovie({ movieId }) {
        const deleteMovieId = await this.mongoDb(this.collection, movieId);
        return deleteMovieId;
    }

}

module.exports = MoviesService;