const express = require("express");
const Places = require("../models/places");
const user = require("../models/user");


const router = express.Router();







// router.get('/', (req,res) => {
//     Places.find({}, (error, place) => {
    
//         res.render("./events/index.ejs", {
//             place,
//             user: req.session.user
//         })
        
//     })
// });


router.put('/:id', (req,res) => {
    if(!req.session.user) return res.redirect(`/places/${req.params.id}`)
    const newEvent = {
        name: req.body.name,
        day: req.body.day,
        time: req.body.time,
        creator: req.session.user,
        attendees: [req.session.user],
        there: [req.session.user]
    };
    Places.findById(req.params.id, (err, place) => {
        place.events.push(newEvent);
        place.save(function(err) {
            console.log(err)
            console.log(place)
            res.redirect(`/places/${place._id}`);
        })
    })
})


router.get('/:id/edit', (req,res) => {
    Places.findById(req.params.id, (error, place) => {
    res.render('events/edit.ejs', {place,
        user: req.session.user
        })
    })
})

// router.post("/", (req, res) => {
   
//     Places.create(req.body, (err, event) => {
//         res.redirect("./events")
//     })
// });

// router.get("/:id", (req,res) => {
//    Places.find(req.params.id, (err, place) => {
//        console.log(place)
//             res.render('./events/show.ejs', {
//                 place,
//                 user: req.session.user
//             })
//     }) 
//     })


module.exports = router;