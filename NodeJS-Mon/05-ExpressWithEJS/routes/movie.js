const express = require("express");
const router = express.Router();

const moviesData = [
    {
      "name": "Takht",
      "release_date": "2024-01-01",
      "actor": "Ranveer Singh"
    },
    {
      "name": "Sardar Udham Singh",
      "release_date": "2024-02-14",
      "actor": "Vicky Kaushal"
    },
    {
      "name": "Brahmastra",
      "release_date": "2024-03-29",
      "actor": "Ranbir Kapoor"
    },
    {
      "name": "Pathan",
      "release_date": "2024-04-15",
      "actor": "Shah Rukh Khan"
    },
    {
      "name": "Fighter",
      "release_date": "2024-06-21",
      "actor": "Hrithik Roshan"
    },
    {
      "name": "RRR",
      "release_date": "2024-07-30",
      "actor": "N. T. Rama Rao Jr."
    },
    {
      "name": "K.G.F: Chapter 2",
      "release_date": "2024-10-23",
      "actor": "Yash"
    },
    {
      "name": "Laal Singh Chaddha",
      "release_date": "2024-12-25",
      "actor": "Aamir Khan"
    },
    {
      "name": "Gangubai Kathiawadi",
      "release_date": "2024-01-01",
      "actor": "Alia Bhatt"
    },
    {
      "name": "Shamshera",
      "release_date": "2024-02-14",
      "actor": "Ranbir Kapoor"
    },
    {
      "name": "Sooryavanshi",
      "release_date": "2024-03-29",
      "actor": "Akshay Kumar"
    },
    {
      "name": "Tiger 3",
      "release_date": "2024-04-15",
      "actor": "Salman Khan"
    },
    {
      "name": "Krrish 4",
      "release_date": "2024-06-21",
      "actor": "Hrithik Roshan"
    },
    {
      "name": "Adipurush",
      "release_date": "2024-07-30",
      "actor": "Prabhas"
    },
    {
      "name": "Prithviraj",
      "release_date": "2024-10-23",
      "actor": "Akshay Kumar"
    },
    {
      "name": "Jersey",
      "release_date": "2024-12-25",
      "actor": "Shahid Kapoor"
    },
    {
      "name": "Cirkus",
      "release_date": "2024-01-01",
      "actor": "Ranveer Singh"
    },
    {
      "name": "Maidaan",
      "release_date": "2024-02-14",
      "actor": "Ajay Devgn"
    },
    {
      "name": "Luv Ranjan's Next",
      "release_date": "2024-03-29",
      "actor": "Ranbir Kapoor"
    }
  ]

router.get("/movie", (req,res,next) => {
    res.render("movies", {pageTitle : "Movies List", movies : moviesData});
});

module.exports = router;
