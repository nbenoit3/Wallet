import React, {Component} from 'react';
import {Alert, StyleSheet, View, Button, Image, ScrollView, TouchableHighlight} from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { connect } from "react-redux";
import Axios from 'axios';

class Profile extends Component {
        state = {
            currentUserID: this.props.userID,
            usersEntryList: [],
            selectedEntryList: {},
            entrySelected: false
        }
   
   async componentDidMount() {
       let userID = this.state.currentUserID.currentUserID;
       console.log(userID);
        let entryList = await Axios.post("http://localhost:3001/entry/entrylist", {id: userID});
        console.log(entryList);
        this.setState({usersEntryList: entryList.data});
    }

    deleteEntry = async (entry) => {
        console.log(entry);
        let data = await Axios.post("http://localhost:3001/entry/delete", entry);
        console.log(data);
        let userID = this.state.currentUserID.currentUserID;
        let entryList = await Axios.post("http://localhost:3001/entry/entrylist", {id: userID});
        console.log(entryList);
        this.setState({usersEntryList: entryList.data});
    }

    showEntryInfo = (e, entry) => {
        console.log("you hit the showEntryInfo method");
          this.setState(prevState => ({
            selectedEntryList: entry,
            entrySelected: prevState.entrySelected === false ? true : false
          }));
    }

    deleteEntryAlert = (e, entry) => {
        Alert.alert(
            'Delete Entry',
            'You are about to delete this entry, are you sure?',
            [
                {text: "Yes", onPress: () => this.deleteEntry(entry)},
                {text: "No", onPress: () => console.log("You pressed NO to not delete")}
            ],
            {cancelable: false},
        )
    }

    goBackFunc = () => {
        console.log("you hit the go back method");
        this.setState(prevState => ({
            selectedEntryList: {},
            entrySelected: prevState.entrySelected === true ? false : true
        }))
    }

    render() {
        console.log(this.state.selectedEntryList);

        if (this.state.entrySelected == true) {
            return (
                <View style={{flex: 1, backgroundColor: "#6b72a5"}}>
                    <Button title="Go Back" onPress={this.goBackFunc}></Button>
                    <Text h4>Website: {this.state.selectedEntryList.website}</Text>
                    <Text h4>Username: {this.state.selectedEntryList.username}</Text>
                    <Text h4>Password: {this.state.selectedEntryList.password}</Text>
                    <Text h4>Card: {this.state.selectedEntryList.card_number}</Text>
                    <Text h4>Exp Date: {this.state.selectedEntryList.expiration_date}</Text>
                    <Text h4>Sec Code: {this.state.selectedEntryList.security_code}</Text>
                    
                </View>
            )
        }
        return (
            <View style={{flex: 1, backgroundColor: "#6b72a5"}}>
                <ScrollView showsVerticalScrollIndicator="true" contentContainerStyle={styles.container}>
                    {this.state.usersEntryList.map((entry, i) => (
                    <TouchableHighlight key={i} onPress={(e) => {this.showEntryInfo(e, entry)}} onLongPress={(e) => {this.deleteEntryAlert(e, entry)}}>
                        <Image key={i} style={{ borderRadius: 10, margin: 12}} source={{uri: `https://logo.clearbit.com/${entry.website}`, width: 100, height: 100}}/>
                    </TouchableHighlight>
                    ))}
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

let mapStateToProps = (state) => ({
    userID: state.loggedInUserID
})

export default connect(mapStateToProps, null)(Profile);