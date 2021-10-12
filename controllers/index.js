const express = require("express");
const Places = require("../models/places");
const Events = require("../models/events");
const router = express.Router();
const placeSeed = require('../models/placeSeed');
const eventSeed = require('../models/eventSeed');



router.get('/', (req,res) => {
    Places.find({}, (error, places) => {
        res.render("index.ejs", {places})
    })
    // Events.find({}, (error, events) => {
    //     res.render("index.ejs", {events})
    // })
});






//show routes

router.get("/placeseed", (req, res) => {
    Places.deleteMany({}, (error, allPlaces) => {})
    
    Places.create(placeSeed, (error, data) => {
        res.redirect('/')
    }) })
// router.get("/eventseed", (req, res) => {
//         Events.deleteMany({}, (error, allEvents) => {})
        
//         Events.create(eventSeed, (error, data) => {
//             res.redirect('/')
//         }) })

module.exports = router;