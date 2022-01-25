const router = require("express").Router();
const UserModel = require("../models/User");

// GET /users
// Get all users from db
router.get("/", async (_, res) => {
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
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await UserModel.deleteOne({ _id: id })
    .then(() => res.json({ success: true }))
    .catch((e) => res.status(400).json(e));
});

// GET /users/:id
// Get single user from db
router.get("//:id", async (req, res) => {
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
router.post("/", (req, res) => {
  const { first_name, last_name, hobbies } = req.body;
  const user = new UserModel({
    first_name,
    last_name,
    hobbies,
  });

  user.save((e: any) => (e ? res.json("Didn't work") : res.json("Worked")));
});

module.exports = router;
