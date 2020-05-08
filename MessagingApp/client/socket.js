import io from "./socket.io"

const apiUrl = "192.168.1.255";
const port = 3050;

class Socket {

    socket = null;
    
    constructor(displayName) {
        this.socket = io(`https://${apiUrl}:${port}`);
        this.displayName = displayName;
    }

    sendMessage(message) {
        console.log("sent");
        this.socket.emit("message", {username: this.displayName, message: message});
    }

}
export default Socket;
