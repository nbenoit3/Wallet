import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from "react-redux";
import mapDispatchToProps from '../Actions/actionCreators';
import Axios from 'axios';


 class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }
    componentDidMount() {

    }
  
    componentWillUnmount() {
  
    }

   registerUser = (e) => {
       let user = this.state;
       console.log(user);

        Axios.post("http://localhost:3001/users/register", user)
        .then(res => {
            console.log(res);
            let loggedInUser = res.data.username;
            let loggedInUserID = res.data.id;
            alert(`You successfully registered as ${loggedInUser}`);
            this.props.userLoggedIn(loggedInUser, loggedInUserID);
            this.props.navigation.navigate('Home');
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                    <Button title="Go Back" onPress={() => this.props.navigation.navigate('Home')}></Button>
                    <Input style={styles.inputBox} autoCapitalize="none" placeholder="username" onChangeText={(username) => this.setState({username: username})}></Input>
                    <Input style={styles.inputBox} autoCapitalize="none" placeholder="password" onChangeText={(password) => this.setState({password: password})}></Input>
                    <Button onPress={(e) => {this.registerUser(e)}} title="Sign Up"/>
                
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

export default connect(null, mapDispatchToProps)(Register);