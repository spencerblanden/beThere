const express = require("express");
const Places = require("../models/places");
const router = express.Router();







router.get('/', (req,res) => {
    Places.find({}, (error, place) => {
    
        res.render("./events/index.ejs", {
            place,
            user: req.session.user
        })
        
    })
});

router.get('/new', (req,res) => {
    Places.find({}, (error, events) => {
        res.render('./events/new.ejs', {events,
            user: req.session.user
        })
    })
})

router.post("/", (req, res) => {
   
    Places.create(req.body, (err, event) => {
        res.redirect("./events")
    })
});

router.get("/:id", (req,res) => {
    Places.findById(req.params.id, (err, event) => {
        console.log(event)
    res.render('./events/show.ejs', {
        event: event,
        user: req.session.user
    }) 
    })
})

module.exports = router;