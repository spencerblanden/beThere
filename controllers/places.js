const express = require("express");
const Places = require("../models/places");
const router = express.Router();



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
        
        router.delete("/:id", (req, res) => {
            Places.findByIdAndRemove(req.params.id, (err, data) => {
                res.redirect("/places")
            })
        })


        router.post("/", (req, res) => {
            
            Places.create(req.body, (err, place) => {
                res.redirect("./places")
            })
        });
       
        router.put("/:id", (req, res) => {
           Places.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true}, 
                (error, updatedPlace) => {
                    res.redirect(`./${req.params.id}`)
                }
                )
            })
        
        router.get("/:id/edit", (req, res) => {
            Places.findById(req.params.id, (error, foundPlace) => {
                res.render("./places/edit.ejs", {
                    place: foundPlace,
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