const express        = require("express");
const router = express.Router();
const User = require("../models/user");
const Journal = require("../models/journal");
const axios           = require('axios');


/* Home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Journals page */
router.get('/my-page/journals', (req, res, next) => {
  Journal.find()
    .then(journalsDB => {
      res.render("journals" , { journals: journalsDB });
    })
    .catch(error => {
      console.log('Error while getting the journals from the DB: ', error);
    })
 });

 /* Journal details page */

 router.get('/my-page/journals/:id', (req, res, next) => {
  Journal.find()
    .then( journal => {
      res.render("journal-details" , { journal: journal });
    })
    .catch(err => {
      console.log('error');
    })
});

 /* Create journal page */

 router.get('/my-page/create-journal', (req, res, next) => {
  res.render('create-journal');
});

router.post('/my-page/create-journal', (req, res, next) => {
  const journalName = req.body.journalname
  const cityName = req.body.cityname
  const author =  req.user._id

  const newJournal = new Journal({
    name: journalName,
    city: cityName,
    author: author,
  });

  newJournal.save((err) => {
    if (err) {
      res.render("create-journal", { message: "Something went wrong" });
    } else {
      res.redirect("/my-page/journals/");
    }
  });

});



// Add Place page

router.get('/add-place', (req, res, next) => {
  res.render('add-place');
});

// axios.post


// Delete Journal Page

// router.get('/delete-journal', (req, res, next) => {
//   Journal.findByIdAndRemove({{journal}})
//   .then(successCallback)
//   .catch(errorCallback);
// });

  

module.exports = router;
