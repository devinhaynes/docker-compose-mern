import express from "express";
import cors from "cors";
const mongoose = require("mongoose");

const PORT = 3001;
const MONGO_URL = `mongodb://mongo:27017`;

const app = express();

app.use(cors());

// User schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  hobbies: [String],
});
const UserModel = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  const Devin = new UserModel({
    first_name: "Devin",
    last_name: "Haynes",
    hobbies: ["coding", "chess", "archery"],
  });

  Devin.save((e: any) => (e ? res.json("Didn't work") : res.json("Worked")));
});

async function main() {
  return new Promise(async (resolve, reject) => {
    try {
      const connected = await mongoose.connect(MONGO_URL);
      if (connected) return resolve("Connected to DB");
      return reject("Unable to connect to DB");
    } catch (e) {
      return reject(e);
    }
  });
}

main()
  .then((results) => {
    console.log(results);
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));
