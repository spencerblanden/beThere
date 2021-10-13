const express = require("express");
const Events = require("../models/events");
const router = express.Router();
const eventSeed = require('../models/eventSeed');






router.get('/', (req,res) => {
    Events.find({}, (error, events) => {
    
        res.render("./events/index.ejs", {
            events,
            user: req.session.user
        })
        
    })
});

router.get('/new', (req,res) => {
    Events.find({}, (error, events) => {
        res.render('./events/new.ejs', {events,
            user: req.session.user
        })
    })
})

router.post("/", (req, res) => {
   
    Events.create(req.body, (err, event) => {
        res.redirect("./events")
    })
});

router.get("/:id", (req,res) => {
    Events.findById(req.params.id, (err, event) => {
        console.log(event)
    res.render('./events/show.ejs', {
        event: event,
        user: req.session.user
    }) 
    })
})

module.exports = router;