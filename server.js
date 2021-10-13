const express = require('express');
const mongoose = require('mongoose');
const app = express();
const homeController = require('./controllers/index.js');
const placeController = require('./controllers/places.js');
const eventController = require('./controllers/events.js')
const usersController = require('./controllers/user.js');
const expressSession = require('express-session')

require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const PORT = process.env.PORT

const methodOverride = require("method-override")

const db = mongoose.connection;
db.on("error",(err) => console.log(err.message + " Where you at mongo?"))
db.on("connected", () => console.log("Your mongoose is running you better catch it"))
db.on("disconnected", ()=> console.log("mon no go"))




//middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended:false }))
app.use(expressSession({
    secret: 'gsfgrtdfsdf',
    resave: false,
    saveUninitialized: false
}))
app.use(methodOverride("_method"))


//routes
app.use('/home', homeController)
app.use('/places', placeController)
app.use('/events', eventController)
app.use('/', usersController);

const placeSeed = require('./models/seeds/placeSeed.js');
const Places = require("./models/places");

app.get("/placeseed", (req, res) => {
    Places.deleteMany({}, (error, allPlaces) => {})
        Places.create(placeSeed, (error, data) => {
        console.log(placeSeed)
        res.redirect('/places')
    }) })

app.listen(PORT, () =>{
console.log('bethere running on ' + PORT)
})