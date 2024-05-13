const sequelize= require('../config/connection');
const {Account, Developer}= require ('../models')

const userData= require('./users.json');

//handles the seeding process
const seedDatabase= async ()=>{
    try{
    // ensures the tables match then drops/recreates them
    await sequelize.sync({force:true});

    //create an array of objects 
    // const accountsData= userData.map(user=> ({
    //     username: user.username,
    //     password:  user.password,
    //     email: user.email,
    // }));

    // // filter for the developer role then create an array for dev users
    // const developerData= userData.filter (user => user.role === 'developer').map(user => ({
    //     accountId: user.accountId,
    //     photoUrl: user.photoUrl,
    //     yearsCoding: user.yearsCoding,
    //     stackType: user.stackType,
    //     portfolioUrl: user.portfolioUrl
    // }));

    // // creates the account
    // const accounts= await Account.bulkCreate(accountsData, {
    //     individualHooks:true, //makes sure to execute the hooks in the model, specifically our password
    //     returning: true, // returns the tables
    // });

    // // links the account data to the developer
    // developerData.forEach(dev=> {
    //     const account= accounts.find(account=> account.email === dev.email);
    //     console.log(account);
    //     dev.accountId= account.id;
    // });

    // // creates the developer account
    // await Developer.bulkCreate(developerData, {
    //     individualHooks: true,
    //     returning: true
    // });
    console.log('Database has been seeded');
    }
    catch (error) {
        console.error('Could not seed database', error)
    }
    process.exit(0);
};
seedDatabase();

