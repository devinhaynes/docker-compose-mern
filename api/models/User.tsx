const mongoose = require("mongoose");

// User schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  hobbies: [String],
});

module.exports = mongoose.model("User", UserSchema);
