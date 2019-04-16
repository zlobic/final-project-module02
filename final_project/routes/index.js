const express        = require("express");
const router          = express.Router();
const Journal = require("../models/journal");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET journals page */
router.get('/journals', (req, res, next) => {
  Journal.find()
    .then(journalsDB => {
      res.render("journals" , { journals: journalsDB });
    })
    .catch(error => {
      console.log('Error while getting the journals from the DB: ', error);
    })
 });

 /* GET journal page */
  router.get('/journals/:journalId', (req, res, next) => {
    Journal.findOne({'_id': req.params.journalId})
      .then(theJournal => {
        res.render("journal-details", { journal: theJournal });
      })
      .catch(error => {
        console.log("Error while retrieving journal details: ", error);
      })
   });
  
   /* GET Add journal page */
   router.get('/create-journal', (req, res, next) => {
    res.render('create-journal');
  });

module.exports = router;
