import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const style = StyleSheet.create({
  campusView: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const SingleCampus = (props) => {
  return (
    <View style={style.campusView}>
      <Text>Campus Name: {props.name}</Text>
      <Text>Campus Address: {props.address}</Text>
      <Text>Campus Description: {props.description}</Text>
      <Image source={{uri: props.imageUrl}} style={{width: 200, height: 200}}/>
    </View>
  );
};

SingleCampus.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleCampus;
