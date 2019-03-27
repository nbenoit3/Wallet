import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Login from "./Login";

 class Homescreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>WheresMyWallet App</Text>
                <Button title="login" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
                <Button title="signup" onPress={() => this.props.navigation.navigate('Register')}></Button>
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
    title: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
      color: "white"
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  export default Homescreen;