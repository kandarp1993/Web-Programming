const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
      let story = {
        storyTitle:"My Visit to Dubai",
        story:"With all the turmoil going ahead in the Middle East right now, relatively few individuals would need to visit. That is the point at which my mom revealed to me she has arranged a visit to Dubai, which is in the United Arab Emirates, I was anxious, yet exceptionally eager to visit another place so far away.\nDubai would be a four-day stop before a one-month trek to India, however in any case, I was elate. Dubai is home to the tallest building and the greatest shopping center on the planet, and a portion of the world's wealthiest individuals. Sightseers from everywhere throughout the world come to see the sights and experience a culture more than ever."
      }  
      res.json(story);
    } catch (e) {
      res.status(500).send();
    }
  });

  module.exports = router;