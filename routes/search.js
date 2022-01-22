const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

router.get("/:name", verify, async (req, res) => {
  try {
    var regex = new RegExp(req.params.name, "i");
    Movie.find({ title: regex }).then((result) => {
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
