import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from "react-redux";
import Axios from 'axios';


class CreateEntry extends Component {
    constructor({userID}) {
        super()
        this.state = {
            website: "",
            username: "",
            password: "",
            cardNumber: "",
            expirationDate: "",
            securityCode: "",
            loggedInUser: userID
        }
    }

     handleCreateEntry =  async () => {
        let newEntry = this.state;
        console.log(newEntry);
    let data = await Axios.post("http://localhost:3001/entry/new", newEntry)
        alert("You created a new entry");
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Enter the website or card information below</Text>
                <Input placeholder='Website' onChangeText={(text) => this.setState({website: text})}/>
                <Input placeholder='Username' onChangeText={(text) => this.setState({username: text})}/>
                <Input placeholder='Password' onChangeText={(text) => this.setState({password: text})}/>
                <Input placeholder='Card Number' onChangeText={(text) => this.setState({cardNumber: text})}/>
                <Input placeholder='Expiration Date' onChangeText={(text) => this.setState({expirationDate: text})}/>
                <Input placeholder='Security Code' onChangeText={(text) => this.setState({securityCode: text})}/>
                <Button style={styles.button} color="#841584" title="Create Entry" onPress={this.handleCreateEntry}></Button>
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
      header: {
        fontSize: 30,
        color: "white",

      }
})

let mapStateToProps = (state) => ({
    userID: state.loggedInUserID
})

export default connect(mapStateToProps, null)(CreateEntry);