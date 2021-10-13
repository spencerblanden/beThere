const express = require('express');
const app = express();
const homeController = require('./controllers/index.js');
const placeController = require('./controllers/places.js');
const eventController = require('./controllers/events.js')
const usersController = require('./controllers/user.js');
const mongoose = require('mongoose');
const expressSession = require('express-session')

require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const PORT = process.env.PORT

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



//routes
app.use('/', homeController)
app.use('/places', placeController)
app.use('/events', eventController)
app.use('/', usersController);



app.listen(PORT, () =>{
console.log('bethere running on ' + PORT)
})