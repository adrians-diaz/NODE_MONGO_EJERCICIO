const express = require("express");

const routerCharacters = express.Router();

const {getAllCharacters, getCharactersByID, getCharactersByName, postNewCharacters, deleteCharacters, patchCharacters} = require("../controllers/personajes.controller");

routerCharacters.get("/", getAllCharacters);
routerCharacters.get("/id/:id", getCharactersByID);
routerCharacters.get("/name/:name", getCharactersByName);
routerCharacters.post('/', postNewCharacters);
routerCharacters.delete('/:id', deleteCharacters);
routerCharacters.patch('/:id', patchCharacters)

module.exports = routerCharacters;

