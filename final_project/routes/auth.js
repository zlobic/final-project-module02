const express        = require("express");
const router = express.Router();
const User = require("../models/user");
const Journal = require("../models/journal");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const passport = require('passport');
const ensureLogin = require("connect-ensure-login");
const axios           = require('axios');
const mongoose     = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/* Home page */ 

    router.get('/', (req, res, next) => {
    res.render('index');
  });
  

/* Sign up */ 

router.get("/signup", (req, res, next) => {
    res.render('signup');
  });
  
router.post("/signup", (req, res, next) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
   
  
    if (username === "" || password === "") {
      res.render("signup", { message: "You should have an username and password" });
      return;
    }
  
    User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("signup", { message: "The username already exists" });
        return;
      }
  
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
  
      const newUser = new User({
        name,
        username,
        password: hashPass
      });
  
      newUser.save((err) => {
        if (err) {
          res.render("signup", { message: "Something went wrong" });
        } else {
          res.redirect("/my-page");
        }
      });
    })
    .catch(error => {
      next(error)
    })
  });
  
  
  router.get("/signup", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("private", { user: req.user });
  });
  
  
  /* Log in */
  
  router.get("/login", (req, res, next) => {
    res.render("login");
  });
  
  router.post("/login", passport.authenticate("local", {
    successRedirect: "/my-page",
    failureRedirect: "/login",
    failureFlash: false,
    passReqToCallback: false
  }));


  /* My Page */


  router.get("/my-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    Journal.find({author: req.user._id})
    .then( journals => {
      res.render("private", { user: req.user, journals: journals });
      })
    .catch(error => {
      console.log(error);
        next(error)
      })
    });


/* Delete */ 

router.get('/my-page/journals/journal-details/delete', (req, res) => {
  Journal.findByIdAndDelete({_id: req.query.id})
    .then( deleted => {
      res.render('private', deleted);
    })
    .catch(err => {
      console.log(err);
    })
})

 /* Journal details page */

 router.get('/my-page/journals/journal-details/:id', (req, res, next) => {
  Journal.findById(req.params.id)
    .then( journal => {
      res.render("journal-details" ,  journal );
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
  const author = mongoose.Types.ObjectId(req.user.id)


  const newJournal = new Journal({
    name: journalName,
    city: cityName,
    author: author
  });

  newJournal.save((err) => {
    if (err) { console.log(err) }
    else {
      var savedJournal;
      Journal.findOne({ name: journalName })
        .then(journal => {
          savedJournal = journal
          return User.findById({_id: req.user.id})
        })
        .then(user => {
          console.log(savedJournal)
          user.journals.push(savedJournal._id)
          user.save()
          res.redirect(`/my-page/journals/journal-details/${savedJournal._id}`);
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
});
    

/* Add Place page */

router.get('/my-page/add-place', (req, res, next) => {
  res.render('add-place');
});

router.post('/my-page/add-place', (req, res, next) => {
  const placeName = req.body.placename
  const comments = req.body.mycomments
  const journal = mongoose.Types.ObjectId(req.journal.id)

  const newPlace = new Place({
    name: placeName,
    comments: comments,
    journal: journal
  });

  newPlace.save((err) => {
    if (err) { console.log(err) }
    else {
      var savedPlace;
      Place.findOne({ name: placeName })
        .then(place => {
          savedPlace = place
          return Journal.findById({_id: req.journal.id})
        })
        .then(journal => {
          console.log(savedPlace)
          journal.places.push(savedPlace._id)
          journal.save()
          res.redirect('/my-page/journals/journal-details/');
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
});



 /* Logout */

 router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
 });

  

module.exports = router;

