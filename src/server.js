//Este archivo guarada la definición del servidor
// - rutas que van a exitir
// - middlewares que se van a usar
// - Aqui se montan los routes del servidor

const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");
const server = express();

server.use(cors());
server.use(express.json()); // Middleware
server.use("/posts", postsRouter);
server.use("/auth", authRouter);

server.get("/", (request, response) => {
  response.json({
    success: true,
    message: "DESAFIO-BACK",
  });
});

module.exports = server;
