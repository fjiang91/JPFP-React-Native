import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
class Home extends React.Component {
  render() {
    return (
      <View >
        <Text style={styles.welcome}>Welcome To The One Piece Academy</Text>
      </View>
    );
  }
}

export default Home;
