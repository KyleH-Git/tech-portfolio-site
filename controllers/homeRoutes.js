const router = require('express').Router();
const {Account} = require('../models');

router.get('/', async (req, res) =>{
    res.render('homepage');
});

router.get('/profile', async (req, res) =>{
    res.render('profile', {logged_in: req.session.logged_in});
});

router.get('/login', async (req, res) =>{
    res.render('login');
});
router.get('/signup', async (req, res) =>{
    res.render('signup');
});

module.exports = router;