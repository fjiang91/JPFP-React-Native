import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';
import CampusList from './CampusList';
import Students from './Students';
import Home from './Home';
import Settings from './Settings'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const btmTabs = createMaterialBottomTabNavigator(
  {
    Home: { screen: Home },
    Students: { screen: Students },
    CampusList: { screen: CampusList },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
    labeled: true
  }
);

const AppNavigator = createAppContainer(btmTabs);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
