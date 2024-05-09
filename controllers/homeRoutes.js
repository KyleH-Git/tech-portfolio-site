const router = require('express').Router();
const {User} = require('../models');

router.get('/', async (req, res) =>{
    res.render('homepage');
});

router.get('/profile', async (req, res) =>{
    res.render('profile');
});
module.exports = router;