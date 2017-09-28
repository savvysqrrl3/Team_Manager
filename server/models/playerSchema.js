var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
 name: String,
 preferred_position: String,
 game1: { type: String, default: "Undecided"},
 game2: { type: String, default: "Undecided"},
 game3: { type: String, default: "Undecided"},
 created_at: { type: Date, required: true, default: Date.now }
});

var Player = mongoose.model('Player', PlayerSchema);