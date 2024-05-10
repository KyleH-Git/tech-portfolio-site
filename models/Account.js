
const sequelize= require('../config/connection');
const bcrypt= require('bcrypt');
const { Model, DataTypes}= require('sequelize');

class Account extends Model {}


Account.init ({
    id: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        validate: {
            isIn: [['client', 'developer']]
        }
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
    modelName: 'account', //name of the model
});

module.exports = Account;
