import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image, ScrollView} from 'react-native';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#6b72a5"}}>
            <ScrollView showsVerticalScrollIndicator="true" contentContainerStyle={styles.container} >
                <Image style={{ borderRadius: 10, margin: 12}} source={{uri: "https://logo.clearbit.com/wellsfargo.com", width: 100, height: 100,}}/>
                <Image style={{ borderRadius: 10, margin: 12}} source={{uri: "https://logo.clearbit.com/amazon.com", width: 100, height: 100}}/>
                <Image style={{ borderRadius: 10, margin: 12}} source={{uri: "https://logo.clearbit.com/citibank.com", width: 100, height: 100,}}/>
                
            </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#6b72a5',
        flexDirection: "row"
      }
})


export default Profile;