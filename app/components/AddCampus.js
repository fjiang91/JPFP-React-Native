import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: '',
    };
  }

  handleNameInput = name => {
    this.setState({ name });
  };

  handleAddressInput = address => {
    this.setState({ address });
  };

  handleDescriptionInput = description => {
    this.setState({ description });
  };

  handleImageUrlInput = imageUrl => {
    this.setState({ imageUrl });
  };

  handleSubmit = () => {

  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Campus Name"
          value={this.state.name}
          onChangeText={this.handleNameInput}
          style={style.input}
        />
        <TextInput
          placeholder="Address"
          value={this.state.address}
          onChangeText={this.handleAddressInput}
          style={style.input}
        />
        <TextInput
          placeholder="Description"
          value={this.state.description}
          onChangeText={this.handleDescriptionInput}
          style={style.input}
        />
        <TextInput
          placeholder="Campus Image Url"
          value={this.state.imageUrl}
          onChangeText={this.handleImageUrlInput}
          style={style.input}
        />
        <Button title="Add Campus" style={style.input} onPress={this.handleSubmit} />
      </View>
    );
  }
}
