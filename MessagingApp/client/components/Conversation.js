import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Socket from "../socket";


export default class Conversation extends React.Component {

    constructor(props) {
        super();
        this.state = {
            messages: []
        }
        this.socket = new Socket(props.navigation.state.params.displayName);
        this.socket.socket.on("message", (message) => {
            const updatedMessages = [...this.state.messages, message];
            this.setState({messages: updatedMessages})
        })
    }


    sendMessage(message) {
        this.socket.sendMessage(message);
    }

    render() {
        return (
            <GiftedChat
            messages={this.state.messages}
            onSend={(message) => this.sendMessage(message[0].text)}
            inverted={false}
            />
        )
    }
}