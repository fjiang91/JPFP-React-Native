import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const style = StyleSheet.create({
  campusView: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const SingleCampus = props => {
  return (
      <TouchableHighlight onPress={() => props.handleSelectContact(props)}>
        <View style={style.campusView}>
        <Text>Campus Name: {props.name}</Text>
        <Text>Campus Address: {props.address}</Text>
        <Text>Campus Description: {props.description}</Text>
        <Image
          source={{ uri: props.imageUrl }}
          style={{ width: 200, height: 200 }}
        />
         </View>
      </TouchableHighlight>

  );
};

export default SingleCampus;
