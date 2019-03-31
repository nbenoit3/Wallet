import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator, NavigationEvents } from "react-navigation";
import { Provider } from 'react-redux';
import Login from "./Components/Login";
import { createStore } from 'redux';
import Homescreen from "./Components/Homescreen";
import DashboardScreen from "./Components/DashboardScreen";
import Profile from "./Components/ProfileScreen";
import Settings from "./Components/SettingScreen";
import Register from "./Components/Register";
import CreateEntry from "./Components/CreateEntryScreen";
import reducer from './reducer';

let store = createStore(reducer);

// type Props = {};
class App extends Component{
  render() {
    return (
      <Provider store={store}>
          <AppContainer/>
        </Provider>
    );
  }
}

export default App;

const DashboardTabNavigator = createBottomTabNavigator({
  Profile,
  Settings
},{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName
    }
  }
})

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: <Icon style={{paddingLeft: 10}} name="align-left" size={25}
      onPress={() => navigation.openDrawer()}></Icon>,
      headerRight: <Icon style={{paddingRight: 10}} name="plus" size={25}
      onPress={() => navigation.navigate('CreateEntry')} ></Icon>
    }
  }
})

const AppDrawNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: Homescreen },
  Dashboard: {screen: AppDrawNavigator},
  Register: {screen: Register},
  CreateEntry: {screen: CreateEntry},
  Login: {screen: Login}
})

const AppContainer = createAppContainer(AppSwitchNavigator);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6b72a5',
  },
  title: {
    fontSize: 20,
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


