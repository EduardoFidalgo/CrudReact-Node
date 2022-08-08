const Sequelize = require('sequelize');

const database = require('./db');

const Game = database.define('Game', 
    {
        id: 
        {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, 
        name: 
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        cost :
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        category :
        {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

module.exports = Game;