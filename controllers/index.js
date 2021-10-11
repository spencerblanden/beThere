const express = require("express");
const Places = require("../models/places");
const router = express.Router();
const placeSeed = require('../models/placeSeed');



router.get('/', (req,res) => {
    Places.find({}, (error, places) => {
        res.render("index.ejs", {places})
    })
});






//show routes

router.get("/seed", (req, res) => {
    Places.deleteMany({}, (error, allPlaces) => {})
    
    Places.create(placeSeed, (error, data) => {
        res.redirect('/')
    }) })

module.exports = router;