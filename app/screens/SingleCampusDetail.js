import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  campusView: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const SingleCampusDetail = (props) => {
  const { name, description, address, imageUrl} = props.navigation.state.params;
  return (
    <View style={style.campusView} >
      <Text>Campus Name: {name} </Text>
      <Text>Campus Address: {address}</Text>
      <Text>Campus Description: {description}</Text>
      <Image source={{uri: imageUrl}} style={{width: 200, height: 200}}/>
    </View>
  );
};

export default SingleCampusDetail;
