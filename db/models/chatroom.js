
module.exports = (sequelize, DataType)=>{
    let ChatRoom = sequelize.define('chatroom', {
        title: DataType.STRING,
    })
    return ChatRoom;
}