import React from "react";
import {View, Text, TextInput, Button} from "react-native";

export default class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            displayName: ""
        }
    }
/*
    state = {
        username: "",
        password: ""
    }
*/
    enterChatroom() {
        if (this.state.displayName == "") {
            alert("Please enter a display name to enter a public chatroom");
        } else {
            this.props.navigation.navigate("Conversation", {displayName: this.state.displayName})
        }
    }
/*
    enterChatroom() {
        if (this.state.username == ""){
            alert("Please enter a username");
            alert("Please enter a password");
        } else {
            this.props.navigation.navigate("Conversation", {username: this.state.displayName})
        }
    }
*/
    render() {
        return(
            <View>
                <Text> Welcome to the MessagingApp </Text>
                <TextInput onChangeText={(text) => this.setState({displayName: text})} placeholder="Enter your display name to enter the public chat room"/>
                <Button title="Enter" onPress={() => this.enterChatroom()}/>
                <TextInput textContentType="username" style={{height:50}} placeholder="Username:" onChangeText={text => this.setState({username: text})}/>
                <TextInput textContentType="password" secureTextEntry={true} placeholder="Password:" onChangeText={text => this.setState({password: text})}/>
                <Button title="Login (For Existing Account)" onPress={() => this.login()}/>
                <TextInput textContentType="username" style={{height:50}} placeholder="Username:" onChangeText={text => this.setState({username: text})}/>
                <TextInput textContentType="password" secureTextEntry={true} placeholder="Password:" onChangeText={text => this.setState({password: text})}/>
                <TextInput textContentType="password" secureTextEntry={true} placeholder="Email:" onChangeText={text => this.setState({password: text})}/>
                <Button title="Create Account" onPress={() => this.login()}/>
            </View>
        )  
    }
}