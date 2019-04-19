const express        = require("express");
const router         = express.Router();
const Journal        = require("../models/journal");
const axios           = require('axios');


/* Home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Journals page */
router.get('/journals', (req, res, next) => {
  Journal.find()
    .then(journalsDB => {
      res.render("journals" , { journals: journalsDB });
    })
    .catch(error => {
      console.log('Error while getting the journals from the DB: ', error);
    })
 });

 /* Create journal page */

 router.get('/create-journal', (req, res, next) => {
  res.render('create-journal');
});

router.post('/create-journal', (req, res, next) => {
  const journalName = req.body.journalname
  const cityName = req.body.cityname
  const author= req.user._id

  // res.send (`Journalname: ${journalName}, CityName : ${cityName}, firstDay : ${firstDay}, numberOfDays : ${numberOfDays}`);

  const newJournal = new Journal({
    name: journalName,
    city: cityName,
    author: author,
  });

  newJournal.save((err) => {
    if (err) {
      res.render("create-journal", { message: "Something went wrong" });
    } else {
      res.redirect("/journal-details");
    }
  });

});

 /* Journal details page */

 router.get('/journal-details', (req, res, next) => {
  Journal.find({author: req.user._id})
    .then( journal => {
      res.render("journal-details" , { journal: journal });
    })
    .catch(err => {
      console.log('error');
    })
});


// Add Place page

router.get('/add-place', (req, res, next) => {
  res.render('add-place');
});

axios.post
  

module.exports = router;
