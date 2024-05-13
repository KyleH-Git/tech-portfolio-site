
const sequelize= require('../config/connection');
const { Model, DataTypes}= require('sequelize');

class Developer extends Model {}


Developer.init ({
    id: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    photo_url: //profile photo url
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    years_coding: //years the dev has been coding
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stack_type: //front end or back end experience
    {
        type: DataTypes.ENUM,
        values: ['frontend', 'backend', 'full-stack', '' ],
        allowNull: true,
    },
    first_name:
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_name:
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    portfolio_url: //link to portfolio
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    account_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'account',
          key: 'id',
        }
    }
},
{
    sequelize, //links this model to the db connection
    timestamps: false, //if true would add a timestamp on the table
    freezeTableName: true, //prevents sequelize from changing the table name
    underscored: true, //tells sequelize to use snake case instead of camel case
    modelName: 'developer', //name of the model
});

module.exports = Developer;
