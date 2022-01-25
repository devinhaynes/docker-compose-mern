export {};
const router = require("express").Router();
const HobbyModel = require("../models/Hobby");

// GET /hobbies
// Get all hobbies
router.get("/", (req, res) => {
  HobbyModel.find()
    .then((hobbies) => res.json(hobbies))
    .catch((e) => res.status(400).json(e));
});

// DELETE /hobbies
// Delete hobby
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await HobbyModel.deleteOne({ _id: id })
    .then(() => res.json({ success: true }))
    .catch((e) => res.status(400).json(e));
});

// GET /hobbies/:id
// Get single hobby from db
router.get("/:id", async (req, res) => {
  await HobbyModel.findOne({ _id: req.params.id })
    .then((hobby) => {
      res.json(hobby);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

// POST /hobbies
// Post a new hobby
router.post("/", (req, res) => {
  const hobby = new HobbyModel({
    hobby: req.body.hobby,
  });

  hobby.save((e: any) => (e ? res.json("Didn't work") : res.json("Worked")));
});

module.exports = router;
