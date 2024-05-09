
const sequelize= require('../config/connection');
const bcrypt= require('bcrypt');
const { Model, DataTypes}= require('sequelize');

class User extends Model {}


User.init ({
    id: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: 
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: 
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    role: //we can use this role attribute to differentiate between the client and the developer
    {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'client',
    },
    photoUrl: //profile photo url
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    yearsCoding: //years the dev has been coding
    {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    stackType: //front end or back end experience
    {
        type: DataTypes.ENUM,
        values: ['frontend', 'backend', 'full-stack', ],
        allowNull: true,
    },
    portfolioUrl: //link to portfolio
    {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
{
    hooks:
    {
        async beforeCreate(newUserData){
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize, //links this model to the db connection
    timestamps: false, //if true would add a timestamp on the table
    freezeTableName: true, //prevents sequelize from changing the table name
    underscored: true, //tells sequelize to use snake case instead of camel case
    modelName: 'user', //name of the model
});

module.exports = User;
