const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const test= require('../db/models')

module.exports.g = async function(req, res) {
//res.send(JSON.stringify(messages.slice(+req.params.messageId)));

    let chat     = await test.db.ChatRoom.findById(+req.params.chatRoomId);
    // let chat     = await ChatRoom.findById(+req.params.chatRoomId);
    let messages = await chat.getMessages({
        where: {
            id: {
                [Op.gt]: +req.params.messageId
            }
        },
        order: ['id']
    });
    //let messages = await Message.findAll({
        //where: {
            //id: {
                //[Op.gt]: +req.params.messageId
            //},
            //chatroomId: +req.params.chatRoomId
        //},
        //order: ['id']
    //})
    res.send(JSON.stringify(messages));
    
    // res.send(messages);

};

module.exports.p = async (req, res) => {
    //console.log(req.body)
    //req.body.timestamp = (new Date).getTime();

    //messages.push(req.body);

    // let newMessage = await Message.create({
    let newMessage = await test.db.Message.create({
        nick: req.body.nick,
        text: req.body.message,
        chatroomId: +req.params.chatRoomId
    })
    console.log('new msg', req.body)
    res.status(201).send(req.body);
}