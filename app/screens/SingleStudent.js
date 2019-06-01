import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const style = StyleSheet.create({
  studentView: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const SingleStudent = props => {
  const { name, picture, email, location} = props;
  return (
      <TouchableHighlight>
        <View style={style.studentView}>
        <Text>Student Name: {`${name.first} ${name.last} `}</Text>
        <Text>Student Email: {email}</Text>
        <Text>Student Address: {location.street}</Text>
        <Image
          source={{ uri: picture.large }}
          style={{ width: 350, height: 350 }}
        />
         </View>
      </TouchableHighlight>

  );
};

export default SingleStudent;
