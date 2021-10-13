
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.get('/login', (req, res) => {
    res.render('user/login.ejs', { error: '' ,
    user: req.session.user});
});


router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {

        if(!foundUser) {
            return res.render('user/login.ejs', {error: 'Invalid Credentials', user: req.session.user});
        }

        const isMatched = bcrypt.compareSync(req.body.password, foundUser.password);

        if(!isMatched) {
            return res.render('user/login.ejs', {error: 'Invalid password', user: req.session.user});
        }

        req.session.user = foundUser._id;

        res.redirect('/dashboard')
    });
});


router.get('/signup', (req, res) => {
    res.render('user/signup.ejs', {user: req.session.user});
});

router.post('/signup', (req, res) => {
 
   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(3));

  User.create(req.body, (err, user) => {
      req.session.user = user._id
      res.redirect('/dashboard');
  });
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

router.get('/dashboard', (req, res) => {
    if(!req.session.user) { 
        return res.redirect('/login');
    } 
    User.findById(req.session.user, (err, user) => {
        res.render('user/dashboard.ejs', { user });
    });
});



module.exports = router;