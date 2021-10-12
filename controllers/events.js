const express = require("express");
const Events = require("../models/events");
const router = express.Router();
const eventSeed = require('../models/eventSeed');



router.get("/eventseed", (req, res) => {
        Events.deleteMany({}, (error, allEvents) => {})
        
        Events.create(eventSeed, (error, data) => {
            res.redirect('/events')
        }) })


router.get('/', (req,res) => {
    Events.find({}, (error, events) => {
    
        res.render("./events/index.ejs", {events})
        
    })
});

router.get('/new', (req,res) => {
    Events.find({}, (error, events) => {
        res.render('./events/new.ejs', {events})
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
    }) 
    })
})

module.exports = router;