const sequelize= require('../config/connection');
const {User}= require ('../models')

const userData= require('./userData.json');

//handles the seeding process
const seedDatabase= async ()=>{
    // ensures the tables match then drops/recreates them
    await sequelize.sync({force:true});
    // inserts the user data into the database
    await User.bulkCreate(userData,{
        individualHooks:true, //makes sure to execute the hooks in the model, specifically our password
        returning: true, // returns the tables
    });
    process.exit(0);
};
seedDatabase();