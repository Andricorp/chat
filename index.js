
// const db = require('./db');
// db.init();

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var cors = require('cors')

app.use(bodyParser.json());
app.use(('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}))
app.use(express.static('public'))

app.use(cors())

const chatroom = require('./controllers/chatroom');
const message  = require('./controllers/message');

//ROUTER
// router()

app.get('/getChatRooms/:title', chatroom.last);
// app.get('/getChatRooms/:chatRoomId', chatroom.last);
app.get('/getChatRooms', chatroom.all);
app.get('/getMessages/:chatRoomId/:messageId', message.g );
app.post('/addMessage/:chatRoomId', message.p)
app.post('/addchatRoom', chatroom.add)


app.listen(8000)


// app.get('/getChatRooms', async function(req, res) {
//     //res.send(JSON.stringify(messages.slice(+req.params.messageId)));
//       // let chatRooms = await ChatRoom.findAll({    
//       let chatRooms = await test.db.ChatRoom.findAll({
//           order: ['title']
//       })
//       // res.send(JSON.stringify(chatRooms));
//       res.send(JSON.stringify(chatRooms));
  
//   });




// app.get('/getChatRooms/:id', async  function (req, res) {
//     // res.send(req.params.id)
//     let chatRooms = await test.db.ChatRoom.findAll({
//         order: ['title']
//     })
//     res.send(chatRooms);
// });



// app.get('/getMessages/:chatRoomId/:messageId', async function(req, res) {
// //   res.send(req.params.messageId);
//     let chat     = await test.db.ChatRoom.findById(+req.params.chatRoomId);
//     // let chat     = await ChatRoom.findById(+req.params.chatRoomId);
//     let messages = await chat.getMessages({
//         where: {
//             id: {
//                 [Op.gt]: +req.params.messageId
//             }
//         },
//         order: ['id']
//     }
//     );
//     res.send(JSON.stringify(messages));
//     //let messages = await Message.findAll({
//         //where: {
//             //id: {
//                 //[Op.gt]: +req.params.messageId
//             //},
//             //chatroomId: +req.params.chatRoomId
//         //},
//         //order: ['id']
//     //})
    
// });




// app.post('/addMessage/:chatRoomId', async (req, res) => {
//     //console.log(req.body)
//     //req.body.timestamp = (new Date).getTime();

//     //messages.push(req.body);

//     // let newMessage = await Message.create({
//     let newMessage = await test.db.Message.create({
//         nick: req.body.nick,
//         text: req.body.message,
//         chatroomId: +req.params.chatRoomId
//     })
//     console.log('new msg', req.body)
//     res.status(201).send(req.body);
// })

