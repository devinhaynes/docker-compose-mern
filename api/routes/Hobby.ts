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

module.exports = router;
