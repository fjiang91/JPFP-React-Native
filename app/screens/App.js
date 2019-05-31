import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './Home';
import Settings from './Settings';
import CampusStack from './CampusStack';
import StudentStack from './StudentStack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MainNavigation = createMaterialBottomTabNavigator(
  {
    Home: { screen: Home },
    Student: { screen: StudentStack },
    Campus: { screen: CampusStack },
    // Settings: { screen: Settings }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const AppNavigator = createAppContainer(MainNavigation);
export default class App extends Component {
  render() {
    return (
      <Provider store={store} style={styles.container}>
        <AppNavigator />
      </Provider>
    );
  }
}
