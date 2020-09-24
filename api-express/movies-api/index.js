const express = require("express");
const app = express();

const { config } = require("./config/index");
const moviesApi = require("./routes/movies");
const {
  logError,
  errorHandler,
  wrapErrors,
} = require("./utils/middleware/errorHandlers");
const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());

// Rutas
moviesApi(app);
app.use(notFoundHandler);
// Errors Middlewares
app.use(logError);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log("Servidor corriendo");
});
