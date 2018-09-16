const conf = require('../config')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'password', conf);
module.exports.sequelize = sequelize;
const ChatRoom = require('./chatroom')(sequelize, Sequelize);
const Message = require('./message')(sequelize, Sequelize);


ChatRoom.hasMany(Message)
Message.belongsTo(ChatRoom)
Message.hasMany(Message)
Message.belongsTo(Message)

// Message.hasOne(Message
    // , 
// ,    { as: 'Conments', foreignKey: 'commentId', 
//  })

module.exports.db = {
    // sequelize: sequelize,
    // Sequelize: Sequelize,
    // Message: Message,
    // ChatRoom: ChatRoom

    sequelize,
    Sequelize,
    Message,
    ChatRoom
}