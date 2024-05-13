const router = require('express').Router();
const {Account, Developer} = require('../models');

router.get('/', async (req, res) =>{
    res.render('homepage');
});


router.get('/developers', async (req, res) => {
    try {
        const developerData = await Developer.findAll({
            include: {
                model: Account,
                attributes: ['id']
            }
        });

        const developers = developerData.map((developer) => developer.get({plain: true}));
         res.render('homepage', {
            developers,
            logged_in: req.session.logged_in
         });
        }
        catch (error) {
            console.error('Could not get developers.', error);
            res.status(500).json({ message: 'Failed to retrieve developers' });
        }
});

router.get('/api/accounts', async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.json(accounts); 
    } catch (error) {
        console.error('Could not get accounts:', error);
        res.status(500).json({ message: 'Failed to retrieve accounts' });
    }
});

router.get('/api/developers', async (req, res) => {
    try {
        const developers = await Developer.findAll();
        res.json(developers);  
    } catch (error) {
        console.error('Could not get developers:', error);
        res.status(500).json({ message: 'Could not connect' });
    }
});

router.get('/profile', async (req, res) =>{
    res.render('profile', {logged_in: req.session.logged_in});
});

router.get('/login', async (req, res) =>{
    if (req.session.logged_in) {
            res.redirect('/homepage');
            return;
        }
    
      res.render('login');
});

router.get('/signup', async (req, res) =>{
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }
      
      res.render('signup');
});

module.exports = router;
