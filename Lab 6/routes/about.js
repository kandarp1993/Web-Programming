const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
      let about = {
          name : "Kandarp Desai",
          cwid: "10419687",
          biography: "Hey there! My name is Kandarp.\n I am a graduate student at Stevens Institute of Technology.",
          favoriteShows: ["Game of Throns", "Narcos", "Person of interest", "Sillicon valley"],
          hobbies: ["Cricket", "Football", "Coding"]
      }  
      res.json(about);
    } catch (e) {
      res.status(500).send();
    }
  });

  module.exports = router;