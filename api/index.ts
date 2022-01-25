import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const mongoose = require("mongoose");
const UserRouter = require("./routes/User");
const HobbyRouter = require("./routes/Hobby");

const PORT = 3001;
const MONGO_URL = `mongodb://mongo:27017`;

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", UserRouter);
app.use("/hobbies", HobbyRouter);

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
