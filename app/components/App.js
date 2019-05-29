const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, {Component} from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';
import { CampusList } from './CampusList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <CampusList />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
}

