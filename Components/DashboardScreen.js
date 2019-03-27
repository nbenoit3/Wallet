import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the Dashboard where you can add credit cards and webiste infomation</Text>
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
      }
})


export default Dashboard;