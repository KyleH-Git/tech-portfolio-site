const router = require('express').Router();
const {Account, Developer} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) =>{
    console.log(req.query);
    
    try {
        let developerData;
        if((req.query.name === '' && req.query.yearsOfExperience === '' && req.query.stack_type === '') || Object.keys(req.query).length === 0){
            developerData = await Developer.findAll({
                include: {
                    model: Account,
                }
            });
            
        }
        else if(req.query.name){
            developerData = await Developer.findAll({
                where: {
                    last_name: req.query.name,
                },
                include: {
                    model: Account,
                }
            });
        }
        else{
            developerData = await Developer.findAll({
                where: {
                    years_coding: req.query.yearsOfExperience,
                    stack_type: req.query.stack_type
                },
                include: {
                    model: Account,
                }
            });
        }
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


router.get('/profile', withAuth, async (req, res) =>{
    try {
        const accountData = await Account.findByPk(req.session.user_id, {
            include: {
                model: Developer,
            }
        });

        const account = accountData.get({plain: true});
        console.log(account);
    res.render('profile', {logged_in: req.session.logged_in, ...account});
    }
    catch (error) {
        console.error('Could not get profile.', error);
        res.status(500).json({ message: 'Failed to retrieve profile information' });
    }
});

router.get('/login', async (req, res) =>{
    if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
    
      res.render('login');
});

router.get('/signup', async (req, res) =>{
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
      
      res.render('signup');
});

module.exports = router;
