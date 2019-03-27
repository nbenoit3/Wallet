import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

class Settings extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign Out" onPress={() => this.props.navigation.navigate("Home")}></Button>
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


export default Settings;