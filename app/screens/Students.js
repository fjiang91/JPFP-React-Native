import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});

class Student extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Inside Student Screen</Text>
      </View>
    );
  }
}

export default Student;
