const router = require('express').Router();
const {User} = require('../models');

router.get('/', async (req, res) =>{
    res.render('homepage');
});

router.get('/profile', async (req, res) =>{
    res.render('profile');
});
router.get('/createAccount', async (req, res) =>{
    res.render('profile');
});
router.get('/login', async (req, res) =>{
    res.render('profile');
});
router.get('/signup', async (req, res) =>{
    res.render('signup');
});

module.exports = router;