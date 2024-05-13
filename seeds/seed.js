const sequelize= require('../config/connection');
const {Account, Developer}= require ('../models')

const accountsData= require('./accounts.json');
const developerData = require('./developers.json')
//handles the seeding process
const seedDatabase= async ()=>{
    try{
    // ensures the tables match then drops/recreates them
    await sequelize.sync({force:true});

    // creates the account
    await Account.bulkCreate(accountsData, {
        individualHooks:true, //makes sure to execute the hooks in the model, specifically our password
        returning: true, // returns the tables
    });

    // creates the developer account
    await Developer.bulkCreate(developerData, {
        returning: true
    });
    
    console.log('Database has been seeded');
    }
    catch (error) {
        console.error('Could not seed database', error)
    }
    process.exit(0);
};
seedDatabase();

