const { json } = require("express/lib/response");
const characters = require("../models/personajes.model");

const getAllCharacters = async(req, res, next) =>{
    try {
        const allCharacters = await characters.find();
        return res.status(200).json(allCharacters);
    } catch (error){
        return res.status(500).json(error);
    }
}

const getCharactersByID = async(req, res) =>{
    const id = req.params.id;
    try{
        const CharactersByID = await characters.findById(id);
    return res.status(200).json(CharactersByID);
    } catch (error){
        return res.status(500).json(error);
    }
}

const getCharactersByName = async (req, res) => {
    const title = req.params.title;
    try{
        const CharactersByTitle = await characters.find({title: title});
        return res.status(200).json(CharactersByTitle);
    } catch (error){
        return res.status(500).json(error);
    }
};

const postNewCharacters = async (req, res, next) => {

    try {

        /* console.log(req.body.titulo); */

        const newCharacters = new characters(req.body);

        const CharactersDB = await newCharacters.save();

        return res.status(200).json(CharactersDB);
        
    } catch (error) {
        return next(error);
    }

}

const deleteCharacters = async (req, res, next) => {

    try {

        const { id } = req.params;

        const CharactersBorrada = await characters.findByIdAndDelete(id)

        return res.status(200).json(CharactersBorrada);
        
    } catch (error) {
        return next(error)
    }

}

const patchCharacters = async (req, res, next) => {

    try {

        const { id } = req.params;

        const patchCharacters = new characters(req.body);

        patchCharacters._id = id;

        const CharactersDB = await characters.findByIdAndUpdate(id, patchCharacters);

        return res.status(200).json({ nuevo: patchCharacters, vieja: CharactersDB})
        
    } catch (error) {
        return next(error)
    }

}

module.exports = {getAllCharacters, getCharactersByID, getCharactersByName, postNewCharacters, deleteCharacters, patchCharacters};