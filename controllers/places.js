const express = require("express");
const Places = require("../models/places");
const router = express.Router();
const placeSeed = require('../models/placeSeed');


router.get('/', (req,res) => {
    Places.find({}, (error, places) => {
        res.render("./places/index.ejs", {places,
            user: req.session.user})
    })
});

router.get('/new', (req,res) => {
    Places.find({}, (error, places) => {
        res.render('./places/new.ejs', {places,
            user: req.session.user})
    })
})

router.post("/", (req, res) => {
   
    Places.create(req.body, (err, place) => {
        res.redirect("./places")
    })
});

router.get("/:id/edit", (req, res) => {
    Book.findById(req.params.id, (error, foundBook) => {
        res.render("edit.ejs", {
            book: foundBook,
            user: req.session.user
        })
    })
})

router.get("/:id", (req,res) => {
    Places.findById(req.params.id, (err, place) => {
    res.render('./places/show.ejs', {
        place: place,
        user: req.session.user
    }) 
    })
})

module.exports = router;