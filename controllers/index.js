const express = require("express");
const Places = require("../models/places");
const Events = require("../models/events");
const router = express.Router();

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


module.exports = router;