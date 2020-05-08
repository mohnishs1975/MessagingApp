const port = 3050;
const io = require("socket.io")(port);

console.log("Server running on port " + port);

io.on("connection,", function() {

    console.log("User connected");

        socket.on("Message", function() {
            console.log("Message Reveived");
        })
        
    })