const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const videojuegosRoutes = require("./src/api/routes/videojuegos.routes");

const {connect} = require("./src/util/database");
const PORT = process.env.PORT;
const server = express();

//----Con esta función Express transformará los datos a JSON para poder tratarlos
server.use(express.json());
//----Con esta función Express no codifica caracteres reservados en la URI.
server.use(express.urlencoded({ extended: false }));

connect()

server.use("/videojuegos", videojuegosRoutes);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})