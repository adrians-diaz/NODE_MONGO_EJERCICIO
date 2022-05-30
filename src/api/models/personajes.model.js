const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rol: {type: String, required: false},
    game: {type: String, required: true},
    img: {type: String, required: true},
},
{   
    timestamps: true
}
);
const characters = mongoose.model('personajes', charactersSchema);

module.exports = characters;