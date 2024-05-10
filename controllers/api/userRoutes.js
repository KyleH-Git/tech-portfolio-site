const router = require('express').Router();
const { Account , Developer} = require('../../models');


router.post('/createAccount', async (req, res) => {
    try {
        const userData = await Account.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/profile', async (req, res) => {
    console.log('profile route reached');
    try {
        const profileData = await Developer.create(req.body);
        console.log(profileData);
        req.session.profile_data = profileData;
        res.status(200).json(profileData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    console.log('reached login route')
    console.log(req.body.email)
    try {
        
        const userData = await Account.findOne({ where: { email: req.body.email } });
        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;