const port = 3050; 
const io = require("socket.io")(port);
const Message = require("./Message");
//const mongoose = require('mongoose');


console.log("Server running on port " + port);

io.on("connection", function(socket) {

    console.log("User connected");

     socket.on("message", function(data){
         const username = data.username;
         const message = data.message; 
         console.log("Message received from " + data.username);
         io.emit("message", Message.format(message, username));
     })
 })
/*
 mongoose.connect('mongodb://localhost:27017/MessagingApp', { useNewUrlParser: true });
 const conn = mongoose.connection;
 const Schema = mongoose.Schema;
 
 const schema = new Schema({
   firstName: String,
   lastName: String,
   password: String
 });
 
 const User = mongoose.model('user', schema);
 
 const user = new User({ firstName: 'one' , lastName: 'hello', password: 'hello'});
 
 async function run() {
   console.log(`Mongoose: ${mongoose.version}`);
   await conn.dropDatabase();
   await user.save();
   let found = await User.findOne();
   console.log(found);
   return conn.close();
 }
 
 run();
 */