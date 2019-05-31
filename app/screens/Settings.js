import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
class Settings extends React.Component {
  render() {
    return (
      <View >
        <Text style={styles.welcome}>Settings: Work In Progress</Text>
      </View>
    );
  }
}

export default Settings;
