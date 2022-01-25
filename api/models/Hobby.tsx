export {};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Hobby schema
const HobbySchema = new Schema({
  hobby: String,
});

module.exports = mongoose.model("Hobby", HobbySchema);
