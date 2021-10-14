const express = require("express");
const Places = require("../models/places");

const router = express.Router();


const User = require('../models/user');






router.get('/', (req,res) => {
    Places.find({}, (error, places) => {
        res.render("index.ejs", {
           places, 
           user: req.session.user
        })
    })
  
});






module.exports = router;