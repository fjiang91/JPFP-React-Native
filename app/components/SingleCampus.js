import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const SingleCampus = (props) => {
  console.log("TCL: SingleCampus -> props", props)

  return (
    <View>
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
