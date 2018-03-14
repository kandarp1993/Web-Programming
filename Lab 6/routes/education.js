const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
      let education = [
        {
            schoolName: "Stevens Institute of Technology",
            degree: "MS in CS",
            favoriteClass: "My favourite class is CS-546 Web Prograamimg. This is one of the favourite class till now I have attended. This course has very interesting assignments. I do not miss a single class because professor has great knowledge. I am learning many new things from this course. I like the way professor teach new concept.",
            favoriteMemory: "My first day at stevens was interesting. I was new at stevens and did not know about the location of building. I got lost and could not able to reach on time for my orientation. Later on I studied the map of stevens. Now I easily figure out each building."
        },
        {
            schoolName: "Babaria Institute of Technology",
            degree: "BS in CS",
            favoriteClass: "My most loved class at Babaria was my Public Speaking class with Kari Duffy. She made a casual environment that enabled the understudies to feel good making inquiries, and all the more critically, getting up before the class to give a discourse. Not exclusively were extraordinary, entertaining recollections made with my kindred colleagues, yet the course additionally showed me how to viably display a contention in a verbal way, a quality that is useful for any vocation way.",
            favoriteMemory: "Our college used to organise a cultural festival every year in the month of February called 'Surge'. This festival used to have a number of events related to dance, music, singing, sports and also a DJ night. I used to enjoy going to this festival with my friends. This is one my most memorable memory from my undergraduate college."
        },
        {
            schoolName: "Bai Ava Bai High School",
            degree: "High School",
            favoriteClass: "My Favorite class was Maths.",
            favoriteMemory: "The most memorable memory I have about by school is our school's Annual Day celebration. Our class had performed a group dance on Indian movie songs. We had also won the best performance award."
        }
      ]  
      res.json(education);
    } catch (e) {
      res.status(500).send();
    }
  });

  module.exports = router;