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
    const newEvent = [{
        name: req.body.name,
        day: req.body.day,
        time: req.body.time,
        creator: user,
        attendees: [user],
        there: [user]
    }]
    Places.findById(req.params.id, (err, place) => {
        Array.from(place.events).push(newEvent),
            res.redirect(`./places/${req.params.id}`)
        }
        )
    })
    
    router.get('/:id/edit', (req,res) => {
        Places.find({}, (error, place) => {
            res.render('./events/edit.ejs', {place,
                user: req.session.user})
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