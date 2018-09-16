const test = require('./models');

// const sequelize = new Sequelize('test', 'root', 'password', conf);
// exports.init = 
async function 
// ()
run()
{
//sequelize.sync().then( () => console.log('synced'))
    await test.db.sequelize.sync()
    console.log('synced')
}
run()

