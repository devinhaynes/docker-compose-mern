import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const HobbyModel = require("./models/Hobby");

const PORT = 3001;
const MONGO_URL = `mongodb://mongo:27017`;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET /users
// Get all users from db
app.get("/users", async (_, res) => {
  await UserModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

// DELETE /users
// Delete user
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  await UserModel.deleteOne({ _id: id })
    .then(() => res.json({ success: true }))
    .catch((e) => res.status(400).json(e));
});

// GET /users/:id
// Get single user from db
app.get("/users/:id", async (req, res) => {
  await UserModel.findOne({ _id: req.params.id })
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

// POST /users
// Post a new user
app.post("/users", (req, res) => {
  const { first_name, last_name, hobbies } = req.body;
  const user = new UserModel({
    first_name,
    last_name,
    hobbies,
  });

  user.save((e: any) => (e ? res.json("Didn't work") : res.json("Worked")));
});

// GET /hobbies
// Get all hobbies
app.get("/hobbies", (req, res) => {
  HobbyModel.find()
    .then((hobbies) => res.json(hobbies))
    .catch((e) => res.status(400).json(e));
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
