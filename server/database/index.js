(async() =>
{
    const database = require('./db');
    const Game = require('./gameTable');

    await database.sync(); // if Don't exist = Create table

    await Game.create(
        {
            name: "God Of War",
            cost: "200",
            category: "Fight"
        }
    )
    
    const findAllProd = await Game.findAll();
    
    console.log(findAllProd);    

})();