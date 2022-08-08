const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('crudgames', 'root', '',
{
    dialect:'mysql', host:'localhost'
});

module.exports = componenteSequelize;