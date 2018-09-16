// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
// const test = require('../db/models')

// module.exports = function(app){
//     app.get('/getMessages/:chatRoomId/:messageId', async function(req, res) {
//         //res.send(JSON.stringify(messages.slice(+req.params.messageId)));
//           let chat     = await test.db.ChatRoom.findById(+req.params.chatRoomId);
//           // let chat     = await ChatRoom.findById(+req.params.chatRoomId);
//           let messages = await chat.getMessages({
//               where: {
//                   id: {
//                       [Op.gt]: +req.params.messageId
//                   }
//               },
//               order: ['id']
//           }
//           );
//           //let messages = await Message.findAll({
//               //where: {
//                   //id: {
//                       //[Op.gt]: +req.params.messageId
//                   //},
//                   //chatroomId: +req.params.chatRoomId
//               //},
//               //order: ['id']
//           //})
//           res.send(JSON.stringify(messages));
//       });
// }