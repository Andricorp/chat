
module.exports = (sequelize, DataType)=> {
    let Message = sequelize.define('message', {
        nick: DataType.STRING,
        text: DataType.STRING,
        // answer_on: DataType.
    })
    return Message;
}