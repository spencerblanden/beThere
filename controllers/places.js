const express = require("express");
const Places = require("../models/places");
const router = express.Router();
const placeSeed = require('../models/placeSeed');


router.get('/', (req,res) => {
    Places.find({}, (error, places) => {
        res.render("./places/index.ejs", {places})
    })
});



module.exports = router;