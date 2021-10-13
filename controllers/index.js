const express = require("express");
const Places = require("../models/places");
const Events = require("../models/events");
const router = express.Router();
const placeSeed = require('../models/placeSeed');
const eventSeed = require('../models/eventSeed');
const User = require('../models/user');



router.get('/', (req,res) => {
    Places.find({}, (error, places) => {
        res.render("index.ejs", {
           places, 
           user: req.session.user
        })
    })
    // Events.find({}, (error, events) => {
    //     res.render("index.ejs", {events})
    // })
});





//seed routes

router.get("/eventseed", (req, res) => {
    Events.deleteMany({}, (error, allEvents) => {})
    
    Events.create(eventSeed, (error, data) => {
        console.log(data)
        res.redirect('/events')
    }) })

router.get("/placeseed", (req, res) => {
    Places.deleteMany({}, (error, allPlaces) => {})
    
    Places.create(placeSeed, (error, data) => {
        res.redirect('/places')
    }) })


module.exports = router;