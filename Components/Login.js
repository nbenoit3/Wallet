import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from "react-redux";
import mapDispatchToProps from '../Actions/actionCreators';
import Axios from 'axios';


 class Login extends Component {

    //     let user = {
    //         username: document.getElementById("loginUsername").value,
    //         password: document.getElementById("loginPassword").value
    //     }
        
        // axios.post("/users/login", user)
        // .then(res => {
        //     var loggedInUser = res.data.username;
        //     login(loggedInUser);
        //     history.push("/Home")
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    
    render() {
        return (
            <View style={styles.container}>
                    <TextInput style={styles.inputBox} placeholder="Username" id="loginUsername"></TextInput>
                    <TextInput style={styles.inputBox} placeholder="Password" id="loginPassword"></TextInput>
                    <Button title="Login" onPress={(e) => {loginUser(e)}}/>
                
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6b72a5',
        flexDirection: "column"
      },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: "#b5b5b5",
        borderRadius: 25,
        paddingHorizontal: 10,
        fontSize: 30,
        margin: 5
    }
})

export default Login;