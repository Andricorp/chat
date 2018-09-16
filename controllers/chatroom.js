// const Sequelize = require('sequelize');
const test= require('../db/models')
// const last= require('./chatroom').last
// const sequelize = test.sequelize;
module.exports.all = async  function (req, res) {
    console.log(+req.params.chatRoomId);
    let chatRooms = await test.db.ChatRoom

    .findAll({
      order: ['title']
  })
  res.send(JSON.stringify(chatRooms));

};

module.exports.last = async  function (req, res) {
      console.log('thtff '+req.params.title);
      let chatRoom = await test.db.ChatRoom
      // .findById(+req.params.chatRoomId);

    .findAll({
      // limit: 1,
      where: {
        // id: sequelize.fn[("max")], 
        // id: req.params.chatRoomId,
        title: req.params.title
      }
  })
console.log('Chat rooms '+chatRoom+' !!!!!!!!!!!!!!!!!!!1');
      
      res.send(chatRoom);
  }

module.exports.add = async function (req, res) {
  console.log('body '+req.body);

    let chatRoom = await test.db.ChatRoom
  // .findAll({
  //   where: {
  //     title: req.params.title
  //   }
  // })
// if(!chatRoom){
 
  let newRoom = await test.db.ChatRoom.create({
    title: req.body.title
  })

  console.log('new room ', req.body);
  res.status(201).send(newRoom); 
// }
  // else{
    // res.status(504).send();
  // }
}